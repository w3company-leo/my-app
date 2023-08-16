import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { ErrorText } from "../styled";
import Select from "react-select";
import Image from "next/image";

type TextInputProps = {
  title: string;
  placeholder: string;
  select?: boolean;
  value?: string | any;
  setValue?: React.Dispatch<React.SetStateAction<any>>;
  error: boolean;
  open?: boolean;
  close?: any;
  options?: any;
  one?: boolean;
  errText?: string;
};

const TextInput = (props: TextInputProps) => {
  const {
    title,
    placeholder,
    select = false,
    value = "",
    setValue = () => {},
    error,
    errText,
    options,
    one = true,
  } = props;

  const handleChange = (event: any) => {
    setValue(event.target.value);
  };

  const handleDelete = (index: number) => {
    const newItems = [...value];
    newItems.splice(index, 1);
    setValue(newItems);
  };

  return (
    <TextInputContainer>
      <Title>{title}</Title>
      {select ? (
        <SelectContainer>
          <Select
            defaultValue={value}
            onChange={
              !one
                ? (e) => {
                    if (!value.includes(e)) setValue([...value, e]);
                  }
                : setValue
            }
            options={options}
            styles={customStyles}
            placeholder={<PlaceHolder>{placeholder}</PlaceHolder>}
          />
          <Container>
            {!one &&
              value?.map((item: any, idx: number) => {
                return (
                  <Category key={idx}>
                    <CategoryText>{item.label}</CategoryText>
                    <Image
                      src={"/icon/IconX.svg"}
                      width={20}
                      height={20}
                      alt=""
                      onClick={() => handleDelete(idx)}
                    />
                  </Category>
                );
              })}
          </Container>
        </SelectContainer>
      ) : (
        <Input
          type="text"
          placeholder={placeholder}
          value={value}
          onChange={handleChange}
          error={error}
        />
      )}

      {error && <ErrorText>{errText}</ErrorText>}
    </TextInputContainer>
  );
};

export default TextInput;

const TextInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
`;

const Input = styled.input<{ error: boolean }>`
  width: 100%;
  border-radius: 8px;
  border: 1px solid
    ${(props) => (props.error ? "#f61067" : "var(--line-2, #cbd1d7)")};
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-top: 16px;
  padding-bottom: 16px;
  box-sizing: border-box;
  padding-left: 12px;
  color: var(--text-2, #424d57);
  font-feature-settings: "clig" off, "liga" off;
  font-family: Noto Sans KR;
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  ::placeholder {
    color: var(--text-3, #74808b);
    font-feature-settings: "clig" off, "liga" off;
    font-family: Noto Sans KR;
    font-size: 15px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px;
  }
`;

const Title = styled.div`
  color: var(--text-1, #051b2c);
  font-feature-settings: "clig" off, "liga" off;
  font-family: Noto Sans KR;
  font-size: 12px;
  font-style: normal;
  font-weight: 700;
  line-height: 16px; /* 133.333% */
  margin-bottom: 8px;
`;

const Category = styled.div`
  display: flex;
  height: 28px;
  padding: 0px 10px;
  align-items: center;
  gap: 6px;
  border-radius: 8px;
  background: var(--bg-1, #e5e8eb);
  margin-top: 8px;
  margin-right: 8px;
`;

const CategoryText = styled.p`
  color: var(--text-2, #424d57);
  font-family: Noto Sans KR;
  font-size: 13px;
  font-style: normal;
  font-weight: 500;
  line-height: 16px; /* 123.077% */
  letter-spacing: -0.13px;
`;

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
`;

const SelectContainer = styled.div`
  width: 100%;
`;

const customStyles = {
  placeholder: (provided: any, state: any) => ({
    ...provided,
    color: "var(--text-3, #74808B)",
  }),
  control: (provided: any, state: any) => ({
    ...provided,
    border: state.isFocused
      ? "1px solid var(--text-1, #051B2C)"
      : "1px solid #cbd1d7",
    boxShadow: "none",
    width: "100%",
    borderTopRightRadius: "8px",
    borderTopLeftRadius: "8px",
    borderBottomRightRadius: "8px",
    borderBottomLeftRadius: "8px",
  }),
  option: (provided: any, state: any) => ({
    ...provided,
    backgroundColor: state.isSelected ? "#3498db" : "white",
    color: state.isSelected ? "white" : "black",
    "&:hover": {
      backgroundColor: "#3498db",
      color: "white",
    },
  }),
  indicatorsContainer: (provided: any, state: any) => ({
    ...provided,
    padding: "16px",
    backgroundColor: "white",
    borderTopRightRadius: "8px",
    borderBottomRightRadius: "8px",
    cursor: "pointer",
    "&:hover": {
      backgroundColor: "#2176bd",
    },
    "&::before": {
      content: "none",
    },
  }),

  dropdownIndicator: (provided: any, state: any) => ({
    ...provided,
    color: "",
    display: "none",
  }),
};

const PlaceHolder = styled.div`
  color: var(--text-3, #74808b);
  font-feature-settings: "clig" off, "liga" off;
  font-family: Noto Sans KR;
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
`;
