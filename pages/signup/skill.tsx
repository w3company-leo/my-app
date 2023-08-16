import { Button, TextInput } from "@/components/src";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { BigText, Container, H, InnerContainer } from "@/components/styled";
import { skill as skills } from "@/constants/skill";
import { useRouter } from "next/router";

const Skill = () => {
  const [skill, setSkill] = useState([]);
  const [error, setError] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (skill.length) setError(false);
  }, [skill]);

  const onSubmit = () => {
    if (!skill.length) setError(true);
    // 가입 api
    else router.push("/jobBoard");
  };

  return (
    <Container>
      <InnerContainer>
        <Image src="/icon/developer.png" width={60} height={60} alt="" />
        <H h={20} />
        <BigText>활용 가능한 기술 스택을 모두 선택하세요.</BigText>
        <H h={48} />
        <TextInput
          title="기술 스택"
          placeholder={"기술 스택 선택"}
          error={error}
          select
          options={skills}
          one={false}
          value={skill}
          setValue={setSkill}
          errText="기술 스택 한개 이상 선택하세요."
        />
        <div style={{ height: 48 }} />
        <Button title="완료" onClick={() => onSubmit()} />
      </InnerContainer>
    </Container>
  );
};

export default Skill;
