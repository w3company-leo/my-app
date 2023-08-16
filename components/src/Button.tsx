import useIsMobile from "@/hooks/useIsMobile";
import React from "react";
import styled from "styled-components";

type ButtonProps = {
  title: string;
  onClick: any;
  width?: any;
  small?: boolean;
};

const Button = ({ title, onClick, width, small }: ButtonProps) => {
  const { isMobile } = useIsMobile();

  return (
    <MainContainer>
      <StyledButton
        onClick={onClick}
        width={width}
        isMobile={isMobile}
        small={small}
      >
        <Text>{title}</Text>
      </StyledButton>
    </MainContainer>
  );
};

export default Button;

const MainContainer = styled.div`
  width: 100%;
  justify-content: center;
  display: flex;
`;

const StyledButton = styled.div<{
  width?: any;
  isMobile?: boolean;
  small?: boolean;
}>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  align-self: stretch;
  border-radius: 8px;
  background: var(--text-1, #051b2c);
  width: ${(props) => (props.small ? "272px" : "100%")};
  padding: 15px 36px;
  @media (max-width: 600px) {
    width: 100%;
  }
`;

const Text = styled.p`
  color: var(--white, #fff);
  text-align: center;
  font-family: Noto Sans KR;
  letter-spacing: -0.16px;
`;
