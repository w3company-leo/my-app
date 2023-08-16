import React from "react";
import styled from "styled-components";
import Image from "next/image";
import useIsMobile from "@/hooks/useIsMobile";

const Footer = () => {
  const { isMobile } = useIsMobile();

  return (
    <StyledFooter isMobile={isMobile}>
      <Text isMobile={isMobile}>© 2023 4hire. All rights reserved.</Text>
      <Image
        src="/logo/4hire_gray.png"
        alt={""}
        width={isMobile ? 36 : 48}
        height={isMobile ? 36 : 48}
      />
    </StyledFooter>
  );
};

export default Footer;

const StyledFooter = styled.div<{ isMobile: boolean }>`
  width: 100%;
  background-color: #fff;
  text-align: center;
  border-top: 1px solid;
  border-color: #e5e8eb;
  padding: ${(props) => (props.isMobile ? "24px" : "48px")};
`;

const Text = styled.div<{ isMobile: boolean }>`
  color: var(--text-3, #74808b);
  font-family: NEXON Lv1 Gothic;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
`;
