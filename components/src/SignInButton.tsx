import styled from "styled-components";
import React from "react";
import { color } from "@/constants/color";
import Image from "next/image";
import { useRouter } from "next/router";

type SignInButtonProps = {
  sns: "google" | "kakao";
};

const SignInButton = ({ sns }: SignInButtonProps) => {
  const router = useRouter();

  const handleClick = () => {
    router.push("/signup");
  };

  return (
    <ButtonContainer>
      <Button sns={sns} onClick={handleClick}>
        <span>
          <Image
            src={`/icon/${sns}-login.png`}
            width={24}
            height={24}
            alt={""}
            style={{ marginRight: 10 }}
          />
          {sns === "kakao" ? "카카오" : "구글"}로 계속하기
        </span>
      </Button>
    </ButtonContainer>
  );
};

export default SignInButton;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 460px;
  margin: 0 auto;
`;

const Button = styled.button<{ sns: "google" | "kakao" }>`
  background-color: ${(props) =>
    props.sns === "google" ? "white" : "#FEE500"};
  color: ${color.text2};
  font-size: 16px;
  padding: 10px 2 0px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  height: 56px;
  width: 100%;
  border-radius: 8px;
  border: 1px solid
    var(
      --line-1,
      ${(props) => (props.sns === "google" ? "#A2ADB9" : "#FEE500")}
    );
  span {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
