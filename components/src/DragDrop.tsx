import React from "react";
import { FileUploader } from "react-drag-drop-files";
import styled from "styled-components";
import Image from "next/image";
import { GrayText, H } from "../styled";

type DragDropfile = {
  file: any;
  setFile: any;
};

const fileTypes = ["PDF"];

const DragDrop = ({ file, setFile }: DragDropfile) => {
  const handleChange = (file: any) => {
    setFile(file);
  };

  return (
    <Container>
      <FileUploader
        handleChange={handleChange}
        name="file"
        types={fileTypes}
        hoverTitle=""
      >
        <Custom>
          <Image
            src={"/icon/upload-cloud.svg"}
            width={37.5}
            height={36}
            alt=""
          />
          <GrayText>PDF 최대 5MB 파일 첨부 가능</GrayText>
          <UplaodBtn>
            <GrayText>이력서 업로드</GrayText>
          </UplaodBtn>
        </Custom>
      </FileUploader>
    </Container>
  );
};

export default DragDrop;

const Container = styled.div`
  width: 100%;
`;

const Custom = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  align-self: stretch;
  border-radius: 12px;
  border: 2px dashed var(--line-2, #cbd1d7);
  background: var(--bg-2, #f6f7f8);
  width: 100%;
  padding: 24px 0px;
`;

const UplaodBtn = styled.div`
  display: flex;
  padding: 10px 16px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 8px;
  background: var(--bg-1, #e5e8eb);
`;
