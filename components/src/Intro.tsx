import React from "react";
import Image from "next/image";
import { BigText, GrayText, H } from "../styled";

const Intro = () => {
  return (
    <>
      <Image src={"/logo/4hire_color.png"} width={60} height={60} alt={""} />
      <H h={20} />
      <BigText>주니어 개발자 커리어의 첫 시작</BigText>
      <H h={4} />
      <GrayText>지금 4hire에 가입하세요</GrayText>
    </>
  );
};

export default Intro;
