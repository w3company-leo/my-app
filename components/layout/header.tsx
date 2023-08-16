import React from "react";
import styled from "styled-components";
import Image from "next/image";
import useIsMobile from "@/hooks/useIsMobile";

const Header = () => {
  const { isMobile } = useIsMobile();
  return (
    <MainContainer>
      <Container isMobile={isMobile}>
        <Image src={"/logo/4hire_color.png"} width={48} height={48} alt="" />
        <ButtonContainer isMobile={isMobile}>
          <Text isMobile={isMobile}>개발자 등록하기</Text>
        </ButtonContainer>
      </Container>
    </MainContainer>
  );
};

export default Header;

const MainContainer = styled.div`
  width: 100%;
  justify-content: center;
  align-items: center;
  display: flex;
  border-bottom: 1px solid #e5e8eb;
`;

const Container = styled.div<{ isMobile?: boolean }>`
  background-color: white;
  display: flex;
  width: 1200px;
  height: ${(props) => (props.isMobile ? "60px" : "64px")};
  justify-content: space-between;
  align-items: center;
  flex-shrink: 0;
  @media (max-width: 1200px) {
    width: 100%;
    padding: 0px 10px;
  }
  box-sizing: border-box;
`;

const ButtonContainer = styled.div<{ isMobile?: boolean }>`
  display: flex;
  padding: 0px 16px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  background: var(--primary, #2ceaa3);
  height: 40px;
`;
const Text = styled.div<{ isMobile?: boolean }>`
  color: var(--text-1, #051b2c);
  text-align: center;
  font-family: Noto Sans KR;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  letter-spacing: -0.14px;
`;
