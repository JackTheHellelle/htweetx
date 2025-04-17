import { addDoc, collection, updateDoc } from "firebase/firestore";
import React, { useState } from "react";
import { styled } from "styled-components";
import { auth, db, storage } from "../firebase";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";

const Form = styled.form`
	display: flex;
	flex-direction: column;
	gap: 10px;
`;

const TextArea = styled.textarea`
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

const AttachFileButton = styled.label`
	padding: 10px 0px;
	color: #FC4E00;
	text-align: center;
	border-radius: 20px;
	border: 1px solid #FC4E00;
	font-size: 14px;
	font-weight: 600;
	cursor: pointer;
`;

const AttachFileInput = styled.input`
	display: none;
`;

const SubmitBtn = styled.input`
	background-color: #FC4E00;
	color: white;
	border: none;
	padding: 10px 0px;
	border-radius: 20px;
	font-size: 16px;
	cursor: pointer;
	&:hover,
	&:active {
		opacity: 0.9;
	}
`;

const CharCount = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== "full",
})<{ full: boolean }>`
  font-size: 14px;
  align-self: flex-end;
  color: ${(props) => (props.full ? "#FF4444" : "#aaa")};
  font-weight: ${(props) => (props.full ? "bold" : "normal")};
  animation: ${(props) => (props.full ? "shake 0.3s" : "none")};
  transition: all 0.2s ease-in-out;

  @keyframes shake {
    0% { transform: translateX(0); }
    25% { transform: translateX(-2px); }
    50% { transform: translateX(2px); }
    75% { transform: translateX(-2px); }
    100% { transform: translateX(0); }
  }
`;

export default function PostTweetForm() {
	const [isLoading, setLoading] = useState(false);
	const [tweet, setTweet] = useState("");
	const [file, setFile] = useState<File | null>(null);
	const onChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
		setTweet(e.target.value);
	};
	const onFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { files } = e.target;
		if (files && files.length === 1) {
			//파일용량 제한 로직 추가
			const selectedFile = files[0];
			if (selectedFile.size > 512000) {
				alert("Only files smaller than 500KB are allowed for upload.");
				e.target.value = "";//파일 input 초기화
				setFile(null);
				return;
			}
			setFile(selectedFile);
		}
	};
	const onSubmit = async(e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const user = auth.currentUser;
		if (!user || isLoading || tweet === "" || tweet.length > 180) return;
		try {
			setLoading(true);
			const doc = await addDoc(collection(db, "tweets"), {
			//await addDoc(collection(db, "tweets"), {
				tweet,
				createdAt: Date.now(),	
				username: user.displayName || "Anonymous",
				userId: user.uid,
				avatar: user.photoURL ?? null,
			});
			//트윗에 파일첨부 있을 경우
			if (file) {
				const locationRef = ref(storage, `tweets/${user.uid}-${user.displayName}/${doc.id}`);
				const result = await uploadBytes(locationRef, file);
				const url = await getDownloadURL(result.ref);
				await updateDoc(doc, {
					photo: url,
				})
			}
			//트윗 작성 및 게시 완료 시 리셋
			setTweet("");
			setFile(null);
		} catch (e) {
			console.log(e);			
		} finally {
			setLoading(false);
		}
	};
	return (		
		<Form onSubmit={onSubmit}>
			<TextArea
				rows={5}
				maxLength={180}
				onChange={onChange}
				value={tweet}
				placeholder="오늘의 한화이글스는 어땠나요?"
				required
			/>
			<CharCount full={tweet.length === 180}>
  			{tweet.length}/180
			</CharCount>
			<AttachFileButton htmlFor="file">
				{file ? "Photo added ✅" : "Add photo"}
			</AttachFileButton>
			<AttachFileInput
				onChange={onFileChange}
				type="file"
				id="file"
				accept="image/*"
			/>
			<SubmitBtn
				type="submit"
				value={isLoading ? "Posting..." : "Post Tweet"}
			/>
		</Form>
	)
}