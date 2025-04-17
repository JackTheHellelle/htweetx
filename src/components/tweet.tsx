import { styled } from "styled-components";
import { ITweet } from "./timeline";
import { auth, db, storage } from "../firebase";
import { deleteDoc, doc, updateDoc } from "firebase/firestore";
import { deleteObject, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import React, { useState } from "react";
import { formatDistanceToNow } from "date-fns";
import { ko } from "date-fns/locale";

const Wrapper = styled.div`
  display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: flex-start;
  padding: 20px;
  border: 1px solid rgba(255, 255, 255, 0.5);
  border-radius: 15px;
`;

const Column = styled.div`
	&:last-child {
		place-self: end;
	}
`;

const Photo = styled.img`
  width: 100%;
  height: auto;
  border-radius: 15px;
`;

const Username = styled.span`
  font-weight: 600;
  font-size: 15px;
	margin-bottom: 5px;
`;

const Payload = styled.p`
  margin: 10px 0px;
  font-size: 18px;
	line-height: 1.4;
	white-space: pre-wrap; /* \n 줄바꿈 유지 */
  word-break: normal;           /* 기본 단어 단위 줄바꿈 */
  overflow-wrap: break-word;    /* 너무 길면 단어 단위로 줄바꿈 */
`;

const DeleteButton = styled.button`
	background-color: #FC4E00;
	color: white;
	font-weight: 600;
	border: 0;
	font-size: 12px;
	padding: 5px 10px;
	text-transform: uppercase;
	border-radius: 5px;
	cursor: pointer;
	margin-top: 10px;
`;

const EditButton = styled.button`
	background-color: darkgray;
	color: white;
	font-weight: 600;
	border: 0;
	font-size: 12px;
	padding: 5px 10px;
	text-transform: uppercase;
	border-radius: 5px;
	cursor: pointer;
	margin-top: 10px;
`;

const Spinner = styled.div`
  border: 2px solid rgba(255, 255, 255, 0.2);
  border-top: 2px solid white;
  border-radius: 50%;
  width: 18px;
  height: 18px;
  animation: spin 0.8s linear infinite;
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;

const AuthorRow = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Avatar = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
`;

const FallbackAvatar = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #ccc;
  color: #07111F;
  font-weight: bold;
  font-size: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-transform: uppercase;
`;

const TextArea = styled.textarea`
	margin: 10px 0;
	border: 2px solid white;
	padding: 20px;
	border-radius: 20px;
	font-size: 16px;
	color: white;
	background-color: black;
	width: 100%;
	resize: none;
	font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
			Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
	&::placeholder {
		font-size: 16px;
	}
	&:focus {
		outline: none;
		border-color: #FC4E00;
	}
`;

// const formatDate = (timestamp: number) => {
//   const date = new Date(timestamp);
//   const yyyy = date.getFullYear();
//   const mm = String(date.getMonth() + 1).padStart(2, "0");
//   const dd = String(date.getDate()).padStart(2, "0");
//   const hh = String(date.getHours()).padStart(2, "0");
//   const min = String(date.getMinutes()).padStart(2, "0");
//   const sec = String(date.getSeconds()).padStart(2, "0");

//   return `${yyyy}.${mm}.${dd} ${hh}:${min}:${sec}`;
// };

const getRelativeTime = (timestamp: number) => {
	return formatDistanceToNow(new Date(timestamp), {
		addSuffix: true,
		locale: ko,
	});
}

export default function Tweet({ username, photo, tweet, userId, id, avatar, createdAt }: ITweet) {
	const user = auth.currentUser;
	const [isLoading, setIsLoading] = useState(false);
	const [isEditing, setIsEditing] = useState(false);
	const [editText, setEditText] = useState(tweet);
	const [newFile, setNewFile] = useState<File | null>(null);
	const [preview, setPreview] = useState(photo);

	const onDelete = async () => {
		const ok = confirm("R U sure u wanna delete this tweet?");
		if (!ok || user?.uid !== userId) return;
		try {
			await deleteDoc(doc(db, "tweets", id));
			if (photo) {
				const photoRef = ref(storage, `tweets/${user.uid}/${id}`);
				await deleteObject(photoRef);
			}
		} catch (e) {
			console.log(e);
		} finally {
			//
		}
	};
	const onFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const file = e.target.files?.[0];
		if (file) {
			setNewFile(file);
			setPreview(URL.createObjectURL(file)); // 미리보기용 URL 생성
		}
	};
	const onSave = async () => {
		setIsLoading(true);
		try {
			const docRef = doc(db, "tweets", id);
    	const updateData: any = { tweet: editText };

			if (newFile) {
				// 기존 이미지가 있다면 삭제
				if (photo) {
					const oldRef = ref(storage, `tweets/${user?.uid}/${id}`);
					await deleteObject(oldRef);
				}

				// 새 이미지 업로드
				const newRef = ref(storage, `tweets/${user?.uid}/${id}`);
				const result = await uploadBytes(newRef, newFile);
				const url = await getDownloadURL(result.ref);
				updateData.photo = url;
			}

			await updateDoc(docRef, updateData);
			setIsEditing(false);
		} catch (e) {
			console.log(e);
		} finally {
			setIsLoading(false);
		}
	};
	const onCancel = () => {
		setEditText(tweet); // 원래 내용으로 복원
		setNewFile(null);
  	setPreview(photo);
		setIsEditing(false);
	};	
  return (
    <Wrapper>
      <Column>
				<AuthorRow>
					{avatar ? (
						<Avatar src={avatar} alt="profile" />
					) : (
						<FallbackAvatar>{username?.charAt(0)}</FallbackAvatar>
					)}
					<div style={{ display: "flex", flexDirection: "column" }}>
						<Username>{username}</Username>
						<span style={{ fontSize: "12px", opacity: 0.7 }}>{getRelativeTime(createdAt)}</span>
					</div>
				</AuthorRow>
				{isEditing ? (
					<>
        		<TextArea value={editText} onChange={(e) => setEditText(e.target.value)} />
						<input type="file" accept="image/*" onChange={onFileChange} />
    				{preview && <Photo src={preview} />}
						{isLoading ? (
							<div style={{ display: "flex", alignItems: "center", gap: "5px", marginTop: "10px" }}>
								<Spinner />
								<span style={{ fontSize: "14px", fontStyle: "italic" }}>Saving...</span>
							</div>
						) : (
							<div style={{ display: "flex", gap: "5px", marginBottom: "10px" }}>
								<EditButton onClick={onSave}>Save</EditButton>
								<DeleteButton onClick={onCancel}>Cancel</DeleteButton>
							</div>
						)}
					</>
				) : (					
					<Payload>{tweet}</Payload>
				)}
      </Column>
      <Column>{photo ? <Photo src={photo} /> : null}</Column>
			{user?.uid === userId ? (
				<Column style={{ display: "flex", gap: "5px" }}>
					{!isEditing && <EditButton onClick={() => setIsEditing(true)}>Edit</EditButton>}
					<DeleteButton onClick={onDelete}>Delete</DeleteButton>
				</Column>
			) : null}
    </Wrapper>
  );
}