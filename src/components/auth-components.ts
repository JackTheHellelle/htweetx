import { styled } from "styled-components";

export const Wrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 420px;
  padding: 50px 0px;
`;

export const Title = styled.h1`
  font-size: 50px;
  font-weight: 700;
  text-align: center;
  .sub {
    font-size: 40px;
    font-weight: 500;
    margin-top: 3vw;
    opacity: 0.5;
  }

  @media (max-width: 768px) {
    font-size: 10vw;
    letter-spacing: -0.1vw;
    .sub {
      font-size: 6vw;
    }
  }
`;

export const Form = styled.form`
  margin-top: 50px;
  margin-bottom: 10px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
`;

export const Input = styled.input`
  padding: 10px 20px;
  border-radius: 50px;
  border: none;
  width: 100%;
  font-size: 16px;
  &[type="submit"] {
    cursor: pointer;
    background-color: #FC4E00;
    color: #fff;
    &:hover {
      opacity: 0.8;
    }
  }
`;

export const Error = styled.span`
  font-weight: 600;
  color: tomato;
`;

export const Switcher = styled.span`
  margin-top: 20px;
  a {
    color: #FC4E00;
  }
  button {
    color: #FC4E00;
    text-decoration: underline;
    background-color: transparent;
    border: none;
  }
`;