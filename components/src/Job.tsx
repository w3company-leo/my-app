import React from "react";
import styled from "styled-components";
import Image from "next/image";
import { GrayText, H, Text } from "../styled";

const data = [
  {
    date: "2023.08.15",
    title: "솔루션 프론트엔드 개발자 모집",
    company: "(주)기업명",
    content: `
  모집부문 및 상세내용
  공통 자격요건
  ㆍ학력 : 무관
  솔루션 프론트엔드 개발기업부설연구소 0명
  주요업무 ㆍ솔루션/서비스 웹 UI/UX 설계 및 개발사용기술 ㆍVue3.js, NUXT, HTML5/CSS3, Web Socket, RESTful API자격요건 ㆍHTML, CSS, ECMA 또는 javascript 등 웹 개발 경험자 ㆍVUE, NUXT 등 Front-End framework 경험자 ㆍGit을 이용한 협업 경험자 ㆍCross Browsing 및 웹 표준/접근성 경험자우대사항 ㆍSPA, SSR, PWA 개발 경험자 ㆍBack-End 개발자와 협업 경험자 ㆍ솔루션/서비스 기획 및 설계 경험자
  
  근무조건
  ㆍ근무형태:정규직(수습기간)-3개월ㆍ근무일시:주 5일(월~금) 09:00~18:00 (유연근무 시행 출근 08~10시 ~ 퇴근 17~19시) ㆍ근무지역:(06224) 서울 강남구 역삼로 225 동훈빌딩(역삼동) - 서울 2호선 역삼 에서 800m 이내
  전형절차
  서류전형
  1차면접
  2차면접
  최종합격
  접수기간 및 방법
  ㆍ접수기간:2023년 7월 11일 (화) ~ 2023년 8월 10일 (목)ㆍ접수방법:사람인 입사지원ㆍ이력서양식:사람인 온라인 이력서
  유의사항
  ㆍ입사지원 서류에 허위사실이 발견될 경우, 채용확정 이후라도 채용이 취소될 수 있습니다.
  
  `,
    like: true,
    skill: [
      "React",
      "ReactNative",
      "Vue",
      "Javscript",
      "Typescript",
      "HTML5",
      "RubyOnRails",
    ],
  },
];

const Job = () => {
  const { date, like, title, company, content, skill } = data[0];
  return (
    <Container>
      <RowContainer>
        <Date>{date}</Date>
        <Image
          src={`/icon/${like ? "like-fill" : "like-empty"}.svg`}
          width={24}
          height={24}
          alt=""
        />
      </RowContainer>
      <Text size={20}>{title}</Text>
      <GrayText>{company}</GrayText>
      <Divider />
      <GrayText>{content}</GrayText>
      <H h={36} />

      <TechText>Tech Stack</TechText>
      <SkillsContainer>
        {skill.map((item, idx) => {
          return (
            <Skill>
              <Image
                src={`/skill/${item.toLowerCase()}.svg`}
                width={16}
                height={16}
                alt=""
              />
              <SkillText>{item}</SkillText>
            </Skill>
          );
        })}
      </SkillsContainer>

      <H h={36} />
      <SBRC>
        <RowContainer>
          <Text size={16} color="#2CEAA3">
            채용 공고 보기
          </Text>
          <Image
            src={"/icon/arrow-right-green.svg"}
            width={16}
            height={16}
            alt=""
            style={{ marginLeft: 4, marginBottom: 4 }}
          />
        </RowContainer>
        <RowContainer>
          <Image src={"/icon/eye.svg"} width={20} height={20} alt="" />
          <Number>128</Number>
          <Image src={"/icon/like.svg"} width={20} height={20} alt="" />
          <Number>17</Number>
          <Image src={"/icon/share.svg"} width={20} height={20} alt="" />
        </RowContainer>
      </SBRC>
    </Container>
  );
};

export default Job;

const Container = styled.div`
  display: flex;
  padding: 24px;
  flex-direction: column;
  align-items: flex-start;
  border-radius: 12px;
  background: var(--white, white);
  width: 100%;
  height: auto;

  @media (max-width: 1362px) {
    width: 100%;
  }

  @media (min-width: 1362px) {
    max-width: 592px;
  }
`;

const Date = styled.div`
  color: var(--primary, #2ceaa3);
  font-family: NEXON Lv1 Gothic;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: 20px; /* 142.857% */
  align-self: stretch;
`;

const RowContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Divider = styled.hr`
  width: 100%;
  height: 1px;
  background-color: #e5e8eb;
  border: none;
  margin: 20px 0;
`;

const TechText = styled.p`
  color: var(--text-2, #424d57);
  font-family: Noto Sans KR;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: 16px; /* 114.286% */
`;

const Skill = styled.div`
  display: flex;
  height: 28px;
  padding: 6px 10px;
  align-items: center;
  gap: 4px;
  border-radius: 6px;
  background: var(--bg-2, #f6f7f8);
`;

const SkillText = styled.div`
  color: var(--text-3, #74808b);
  font-family: Noto Sans KR;
  font-size: 13px;
  font-style: normal;
  font-weight: 500;
  line-height: 16px;
  letter-spacing: -0.13px;
`;

const SkillsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

const SBRC = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  justify-content: space-between;
`;

const Number = styled.div`
  color: var(--text-3, #74808b);
  font-family: Noto Sans KR;
  font-size: 13px;
  font-style: normal;
  font-weight: 500;
  line-height: 16px; /* 123.077% */
  padding-left: 4px;
  padding-right: 12px;
`;
