import { Intro, SignInButton } from "@/components/src";
import { Container, H, InnerContainer } from "@/components/styled";
import useIsMobile from "@/hooks/useIsMobile";

export default function SignIn() {
  const { isMobile } = useIsMobile();
  return (
    <Container isMobile={isMobile}>
      <Intro />
      <H h={24} />
      <SignInButton sns="google" />
      <H h={16} />
      <SignInButton sns="kakao" />
    </Container>
  );
}
