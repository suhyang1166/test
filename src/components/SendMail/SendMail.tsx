import React, { ChangeEvent, FormEvent, useState } from "react";
import { Article, Button, Form, Input } from "./SendMail.styled";
import ICON from "../../assets/icon/sendIcon.png";

// email형식 확인
const validateEmail = (email: string): boolean => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
};

const SendMail: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState<string>("");

  // input 유효성 검사
  const handleEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
    const userEmail = event.target.value;
    setEmail(userEmail);
    setErrorMessage(
      validateEmail(userEmail) ? "" : "Please enter a valid email!"
    );
  };

  // form submit
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (validateEmail(email)) {
      alert("뉴스레터를 구독하셨습니다.");
      setEmail("");
    } else {
      alert("이메일 주소를 입력해 주세요.");
    }
  };

  return (
    <Article>
      <h3>Subscribe to our newsletter</h3>
      <Form onSubmit={handleSubmit}>
        <Input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={handleEmailChange}
          hasError={!!errorMessage}
        />
        <Button type="submit" hasError={!!errorMessage} isEmpty={email === ""}>
          <img src={ICON} alt="sendImg" />
        </Button>
        {errorMessage && email !== "" && <p>{errorMessage}</p>}
      </Form>
    </Article>
  );
};

export default SendMail;
