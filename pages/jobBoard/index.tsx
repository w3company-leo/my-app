import { ErrorText, GrayText, H, Text36, Text } from "@/components/styled";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import styled from "styled-components";
import { Button, DragDrop, TextInput } from "@/components/src";
import Job from "@/components/src/Job";

const index = () => {
  const [url, setUrl] = useState("");
  const [urlErr, setUrlErr] = useState(false);
  const [pdf, setPdf] = useState(null);
  const [pdfErr, setPdfErr] = useState(false);

  const onSubmit = () => {
    if (!url.includes("notion")) setUrlErr(true);
  };

  useEffect(() => {
    if (url.includes("notion")) setUrlErr(false);
  }, [url]);

  return (
    <MainContainer>
      <Container>
        <H h={60} />
        <ImageContainer>
          <Image src={"/icon/notion.svg"} width={60} height={60} alt="" />
          <Image
            src={"/icon/arrow-right.svg"}
            width={36}
            height={36}
            alt=""
            style={{ margin: "0px 8px" }}
          />
          <Image src={"/icon/bag.svg"} width={60} height={60} alt="" />
        </ImageContainer>
        <H h={36} />
        <Text36>
          노션 이력서 링크를 주시면, <br />
          당신에게 <span style={{ color: "#2CEAA3" }}>딱 맞는 회사</span>를
          추천할게요!
        </Text36>
        <H h={12} />
        <GrayText>세상의 모든 회사를 뒤져서 딱 맞는 정보를 드립니다.</GrayText>
        <H h={48} />
        <TextInput
          title="이력서 URL"
          placeholder="노션 이력서 URL 입력해주세요."
          error={urlErr}
          errText="올바른 노션 URL을 입력하세요"
          value={url}
          setValue={setUrl}
        />
        <H h={24} />
        <DragDrop file={pdf} setFile={setPdf} />
        <H h={24} />
        <Button
          small={true}
          title="⚡️ 맞춤형 AI 공고 추천 받기"
          onClick={() => onSubmit()}
        />
        {pdfErr && <ErrorText>5MB 이하의 PDF 파일만 업로드 가능해요</ErrorText>}
        <H h={24} />
      </Container>
      <JobContainer>
        <RowContaienr>
          <Text>
            <span style={{ color: "#2CEAA3", fontSize: 32 }}>27</span>개
            채용공고 검색
          </Text>
          <Text>최신순</Text>
        </RowContaienr>
        <JobBox>
          <Job />
          <Job />
        </JobBox>
        <H h={24} />
      </JobContainer>
    </MainContainer>
  );
};

export default index;

const Container = styled.div`
  width: 600px;
  @media (max-width: 600px) {
    width: 100%;
  }
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  @media (max-width: 600px) {
    padding: 0px 16px;
  }
`;

const ImageContainer = styled.div`
  display: flex;
  align-items: center;
`;

const JobContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 16px;
  background-color: #e5e8eb;
  padding: 0 10px;
  justify-content: center;
  width: 100%;
`;

const RowContaienr = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 1280px;
  justify-content: space-between;
  gap: 16px;
  margin-top: 24px;
  padding: 0px 10px;
`;

const MainContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: auto;
  min-height: 100vh; /* 최소한 화면 높이만큼 높이 보장 */
  overflow: auto; /* 스크롤이 필요한 경우 자동 스크롤 생성 */
`;

const JobBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 16px;
  background-color: #e5e8eb;
  padding: 0 10px;
  justify-content: center;
  width: 100%;
  max-width: 1300px;
`;
