import { styled } from "styled-components";
import { ITweet } from "./timeline";
import { auth, db, storage } from "../firebase";
import { deleteDoc, doc, updateDoc } from "firebase/firestore";
import { deleteObject, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { useState } from "react";

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
`;

const Payload = styled.p`
  margin: 10px 0px;
  font-size: 18px;
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

export default function Tweet({ username, photo, tweet, userId, id }: ITweet) {
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
        <Username>{username}</Username>
				{isEditing ? (
					<>
        		<input type="text" value={editText} onChange={(e) => setEditText(e.target.value)} style={{ fontSize: "16px", margin: "10px 0", padding: "5px", width: "100%" }} />
						<input type="file" accept="image/*" onChange={onFileChange} />
    				{preview && <Photo src={preview} />}
						{isLoading ? (
							<div style={{ display: "flex", alignItems: "center", gap: "5px", marginTop: "10px" }}>
								<Spinner />
								<span style={{ fontSize: "14px", fontStyle: "italic" }}>Saving...</span>
							</div>
						) : (
							<div style={{ display: "flex", gap: "5px" }}>
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