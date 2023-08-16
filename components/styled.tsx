import styled from "styled-components";

export const Container = styled.div<{ width?: number }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: ${(props) => (props.width ? props.width + "px" : "600px")};
  background-color: white;
  height: 100vh;
  box-sizing: border-box;
  padding: 0px 16px;
  @media (max-width: ${(props) =>
      props.width ? props.width + "px" : "600px"}) {
    width: 100%;
  }

  @media (min-width: ${(props) =>
      props.width ? props.width + "px" : "600px"}) {
    margin: 0 auto;
  }
`;

export const InnerContainer = styled.div<{ width?: number }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 420px;
  height: 100%;
  @media (max-width: 420px) {
    width: 100%;
  }
`;

export const ErrorText = styled.div`
  color: var(--error, #f61067);
  font-family: Noto Sans KR;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-left: 10px;
  margin-top: 3px;
`;

export const BigText = styled.p`
  color: var(--text-1, #051b2c);
  text-align: center;
  font-feature-settings: "clig" off, "liga" off;
  font-family: NEXON Lv1 Gothic;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 32px; /* 133.333% */
`;

export const Text36 = styled.p`
  color: "var(--text-2, #424d57)";
  text-align: center;
  font-family: NEXON Lv1 Gothic;
  font-size: 32px;
  font-style: normal;
  font-weight: 700;
  line-height: 48px; /* 150% */
  letter-spacing: -0.32px;
`;

export const Text = styled.div<{ size?: number; color?: string }>`
  color: var(--text-2, ${(props) => (props.color ? props.color : "424d57")});
  text-align: center;
  font-family: NEXON Lv1 Gothic;
  size: ${(props) => (props.size ? props.size : "16px")};
  font-style: normal;
  font-weight: 700;
  line-height: 48px; /* 150% */
  letter-spacing: -0.32px;
`;

export const GrayText = styled.div<{ size?: number }>`
  color: var(--text-3, #74808b);
  text-align: center;
  font-feature-settings: "clig" off, "liga" off;
  font-family: Noto Sans KR;
  font-size: ${(props) => (props.size ? props.size : "16px")};
  font-style: normal;
  font-weight: 500;
`;

export const H = styled.div<{ h: number }>`
  height: ${(props) => props.h + "px"};
`;
