import { styled } from "styled-components";
import { auth, db, storage } from "../firebase";
import { useEffect, useState } from "react";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { updateProfile } from "firebase/auth";
import { ITweet } from "../components/timeline";
import Tweet from "../components/tweet";
import { collection, getDocs, limit, orderBy, query, updateDoc, where } from "firebase/firestore";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 20px;
`;
const AvatarUpload = styled.label`
  width: 200px;
  overflow: hidden;
  height: 200px;
  border-radius: 50%;
  background-color: #FC4E00;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  svg {
    width: 50px;
  }
`;

const AvatarImg = styled.img`
  width: 100%;
`;
const AvatarInput = styled.input`
  display: none;
`;
const Name = styled.span`
  font-size: 22px;
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
const Tweets = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  gap: 10px;
`;
const IconButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;

  svg {
    width: 20px;
    height: 20px;
    stroke: currentColor;
  }

  &:hover {
    opacity: 0.8;
  }
`;

export default function Profile() {
  const user = auth.currentUser;
  const creationTime = user?.metadata.creationTime;
  const lastSignInTime = user?.metadata.lastSignInTime;
  const [avatar, setAvatar] = useState(user?.photoURL);
  const [tweets, setTweets] = useState<ITweet[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isEditingName, setIsEditingName] = useState(false);
  const [newName, setNewName] = useState(user?.displayName ?? "");
  const [nameLoading, setNameLoading] = useState(false);
  const formatDate = (isoDateString?: string) => {
    if (!isoDateString) return "";
    const date = new Date(isoDateString);
    return `${date.getFullYear()}년 ${date.getMonth() + 1}월 ${date.getDate()}일`;
  };
  const onAvatarChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const { files } = e.target;
    if (!user) return;
    if (files && files.length === 1) {
      setIsLoading(true);
      try {
        const file = files[0];
        const locationRef = ref(storage, `avatars/${user?.uid}`);
        const result = await uploadBytes(locationRef, file);
        const avatarUrl = await getDownloadURL(result.ref);
        setAvatar(avatarUrl);
        // Firebase Auth 사용자 프로필에 반영
        await updateProfile(user, {
          photoURL: avatarUrl,
        });
        // 유저가 작성한 트윗의 avatar 필드도 업데이트
        const tweetQuery = query(
          collection(db, "tweets"),
          where("userId","==", user.uid),
        );
        const snapshot = await getDocs(tweetQuery);
        const updates = snapshot.docs.map((docSnap) => updateDoc(docSnap.ref, {avatar: avatarUrl}));
        await Promise.all(updates);
      } catch (e) {
        console.error(e);
      } finally {
        setIsLoading(false);
      }
    }
  }
  const onSaveName = async () => {
    if (!user || newName.trim() === "") return;
    setNameLoading(true);
    try {
      // 1. Firebase Auth 사용자 이름 변경
      await updateProfile(user, { 
        displayName: newName 
      });

      // 2. 해당 유저의 트윗들 모두 업데이트
      const tweetsQuery = query(
        collection(db, "tweets"),
        where("userId","==", user.uid),
      );
      const snapshot = await getDocs(tweetsQuery);
      const updates = snapshot.docs.map((docSnap) => updateDoc(docSnap.ref, {username: newName}));
      await Promise.all(updates);
      setIsEditingName(false);
    } catch (e) {
      console.error(e);
    } finally {
      setNameLoading(false);
    }
  };
  const fetchTweets = async () => {
    const tweetQuery = query(
      collection(db, "tweets"),
      where("userId","==", user?.uid),
      orderBy("createdAt","desc"),
      limit(25)
    );
    const snapshot = await getDocs(tweetQuery);
    const tweets = snapshot.docs.map((doc) => {
      const { tweet, createdAt, userId, username, photo } = doc.data();
      return { tweet, createdAt, userId, username, photo, id: doc.id, };
    });
    setTweets(tweets);
  };
  useEffect(() => {
    fetchTweets();
  }, []);
  return (
    <Wrapper>
      <AvatarUpload htmlFor="avatar">
        {isLoading ? (
          <Spinner />
        ) : avatar ? (
          <AvatarImg src={avatar} />
        ) : (
          <svg
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path d="M10 8a3 3 0 100-6 3 3 0 000 6zM3.465 14.493a1.23 1.23 0 00.41 1.412A9.957 9.957 0 0010 18c2.31 0 4.438-.784 6.131-2.1.43-.333.604-.903.408-1.41a7.002 7.002 0 00-13.074.003z" />
          </svg>
        )}
      </AvatarUpload>
      <AvatarInput 
        id="avatar"
        type="file"
        accept="image/*"
        onChange={onAvatarChange}
      />
      {
        isEditingName ? (
          <>
            <input
              value={newName}
              onChange={(e) => setNewName(e.target.value)}
              style={{ fontSize: "18px", padding: "5px", borderRadius: "5px", border: "1px solid #ccc" }}
            />
            {
              nameLoading ? (
                <Spinner />
              ) : (
                <div style={{ display: "flex", gap: "5px" }}>
                  <button onClick={onSaveName}>Save</button>
                  <button onClick={() => setIsEditingName(false)}>Cancel</button>
                </div>
              )
            }            
          </>
        ) : (
          <>
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <Name>{user?.displayName ?? "Anonymous"}</Name>
              <IconButton onClick={() => setIsEditingName(true)} aria-label="Edit name">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487Zm0 0L19.5 7.125"
                  />
                </svg>
              </IconButton>
            </div>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", gap: "10px",  }}>              
              <span style={{ fontSize: "14px", color: "#ccc" }}>
                가입일: {formatDate(creationTime)}
              </span>
              <span style={{ fontSize: "14px", color: "#ccc" }}>
                마지막 로그인: {formatDate(lastSignInTime)}
              </span>
            </div>
          </>
        )
      }
      <Tweets>
        {tweets.map((tweet) => (
          <Tweet key={tweet.id} {...tweet} />
        ))}
      </Tweets>
    </Wrapper>
  );
}