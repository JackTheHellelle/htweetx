import styled from "styled-components";
import PostTweetForm from "../components/post-tweet-form";
import Timeline from "../components/timeline";

const Wrapper = styled.div`
  display: grid;
  grid-template-rows: 1fr 5fr;
  gap: 50px;
  overflow-y: scroll;
  /* Scrollbar styling */
  scrollbar-width: thin; /* For Firefox */
  scrollbar-color: #888 transparent; /* For Firefox */

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #888;
    border-radius: 4px;
    border: 2px solid transparent;
    background-clip: content-box;
  }

  &::-webkit-scrollbar-thumb:hover {
    background-color: #555;
  }
`;

export default function Home() {
  
  return (
    <Wrapper>
      <PostTweetForm />
      <Timeline />
    </Wrapper>
  );
}