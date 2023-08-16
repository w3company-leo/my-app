import { Intro, TextInput } from "@/components/src";
import Button from "@/components/src/Button";
import CheckBox from "@/components/src/CheckBox";
import { Container, ErrorText, H, InnerContainer } from "@/components/styled";
import { category } from "@/constants/category";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { career as careers } from "@/constants/career";
import { useRouter } from "next/router";

const SignUp = () => {
  const router = useRouter();
  const [nickname, setNickname] = useState<string>("");
  const [type, setType] = useState([]);
  const [career, setCareer] = useState(null);
  const [service, setService] = useState(false);
  const [privacy, setPrivacy] = useState(false);
  const [nicknameErr, setNicknameErr] = useState(false);
  const [typeErr, setTypeErr] = useState(false);
  const [carrerErr, setCareerErr] = useState(false);
  const [agreeErr, setAgreeErr] = useState(false);

  const onClickSignUp = () => {
    if (nickname === "") setNicknameErr(true);
    if (!type.length) setTypeErr(true);
    if (!career) setCareerErr(true);
    if (!service || !privacy) setAgreeErr(true);

    if (nickname && type.length && career && service && privacy)
      router.push("/signup/skill");
  };

  useEffect(() => {
    if (nicknameErr && nickname.length) setNicknameErr(false);
    if (service && privacy) setAgreeErr(false);
    if (type.length) setTypeErr(false);
    if (career) setCareerErr(false);
  }, [nickname, service, privacy, type, career]);

  return (
    <Container width={780}>
      <InnerContainer>
        <Intro />
        <H h={48} />
        <TextInput
          title="닉네임"
          placeholder="닉네임을 입력하세요"
          value={nickname}
          setValue={setNickname}
          error={nicknameErr}
          errText="닉네임을 입력하세요"
        />
        <H h={24} />
        <TextInput
          title="개발자 직무"
          placeholder="직무 선택 (최대 3개)"
          select
          error={typeErr}
          options={category}
          value={type}
          setValue={setType}
          one={false}
          errText="개발자 직무를 선택하세요"
        />
        <H h={24} />
        <TextInput
          title="개발 경력"
          placeholder="개발 경력 선택"
          select
          error={carrerErr}
          options={careers}
          value={career}
          setValue={setCareer}
          errText="개발 경력을 선택하세요"
        />

        <CheckBoxContainer>
          <FlexRow>
            <CheckBox checked={service} setChecked={setService} />
            <AgreeText>서비스 이용약관 동의</AgreeText>
            <AgreeText color={"#2CEAA3"}>(필수)</AgreeText>
          </FlexRow>
          <FlexRow>
            <CheckBox checked={privacy} setChecked={setPrivacy} />
            <AgreeText>개인정보 수집·이용 동의 </AgreeText>
            <AgreeText color={"#2CEAA3"}>(필수)</AgreeText>
          </FlexRow>
          {agreeErr && <ErrorText>필수사항에 동의가 필요합니다.</ErrorText>}
        </CheckBoxContainer>
        <Button title="회원가입" onClick={() => onClickSignUp()} />
      </InnerContainer>
    </Container>
  );
};

export default SignUp;

const AgreeText = styled.div<{ color?: string }>`
  color: ${(props) => props.color || "var(--text-3, #74808b)"};
  font-feature-settings: "clig" off, "liga" off;
  font-family: Noto Sans KR;
  font-size: 15px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px; /* 160% */
  letter-spacing: -0.15px;
  text-decoration-line: underline;
  padding: 8px 0px;
  padding-left: 8px;
`;

const FlexRow = styled.div`
  display: flex;
  align-items: center;
`;

const CheckBoxContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 24px 0px;
`;
