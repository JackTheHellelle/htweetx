import { collection, limit, onSnapshot, orderBy, query } from "firebase/firestore";
import { useRef, useEffect, useState } from "react";
import styled from "styled-components";
import { db } from "../firebase";
import Tweet from "./tweet.tsx";
import { Unsubscribe } from "firebase/auth";

export interface ITweet {
	id: string;
	photo?: string;
	tweet: string;
	userId: string;
	username: string;
	createdAt: number;
	avatar?: string;
}

const Wrapper = styled.div`
	display: flex;
	gap: 10px;
	flex-direction: column;	
`;

export default function Timeline() {
	const [tweets, setTweets] = useState<ITweet[]>([]);
	const topRef = useRef<HTMLDivElement>(null); //타겟 ref
	useEffect(() => {
		let unsubscribe: Unsubscribe | null = null;
		const fetchTweets = async () => {
			const tweetsQuery = query(
				collection(db, "tweets"),
				orderBy("createdAt", "desc"),
				limit(25),
			);			
			// const snapshot = await getDocs(tweetsQuery);
			// const tweets = snapshot.docs.map((doc) => {
			// 	const { tweet, createdAt, userId, username, photo } = doc.data();
			// 	return {
			// 		tweet, 
			// 		createdAt, 
			// 		userId, 
			// 		username, 
			// 		photo,
			// 		id: doc.id,
			// 	}
			// });
			unsubscribe = await onSnapshot(tweetsQuery, (snapshot) => {
				const tweets = snapshot.docs.map((doc) => {
					const { tweet, createdAt, userId, username, photo, avatar } = doc.data();
					return {
						tweet, 
						createdAt, 
						userId, 
						username, 
						photo,
						avatar,
						id: doc.id,
					}
				});
				setTweets(tweets);
			});
		};
		fetchTweets();
		return () => {
			unsubscribe && unsubscribe();
		};
	}, []);
	// 전역 window에서 접근할 수 있도록 (layout에서 쓸 거니까)
	useEffect(() => {
		(window as any).scrollToTimelineTop = () => {
			topRef.current?.scrollIntoView({ behavior: "smooth" });
		};
	}, []);
	return (
		<Wrapper ref={topRef}>
			{tweets.map((tweet) => (
				<Tweet key={tweet.id} {...tweet} />
			))}
		</Wrapper>		
	);
}