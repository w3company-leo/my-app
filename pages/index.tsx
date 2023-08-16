import { Intro, SignInButton } from "@/components/src";
import { Container, H, InnerContainer } from "@/components/styled";
import useIsMobile from "@/hooks/useIsMobile";

export default function HomePage() {
  return (
    <Container>
      <Intro />
      <H h={24} />
      <SignInButton sns="google" />
      <H h={16} />
      <SignInButton sns="kakao" />
    </Container>
  );
}
