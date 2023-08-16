import React, { ReactNode } from "react";
import Footer from "./footer";
import styled from "styled-components";
import { useRouter } from "next/router";
import Header from "./header";

const Layout = ({ children }: { children: ReactNode }) => {
  const router = useRouter();

  return (
    <Centering path={router.pathname}>
      {router.pathname === "/jobBoard" && <Header />}
      {children}
      <Footer />
    </Centering>
  );
};

export default Layout;

const Centering = styled.div<{ path: string }>`
  justify-content: center;
  align-items: center;
  background-color: ${(props) =>
    props.path === "/jobBoard" ? "white" : "#e5e8eb"};
  @media (max-width: 1040px) {
    width: 100%;
  }
  height: 100vh;
  overflow-x: hidden;
  min-height: 100vh; /* 최소한 화면 높이만큼 높이 보장 */
  overflow: auto; /* 스크롤이 필요한 경우 자동 스크롤 생성 */
`;
