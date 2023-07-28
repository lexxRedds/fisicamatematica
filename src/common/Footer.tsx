import styled from 'styled-components';

const StyledFooter = styled.footer`
  font-size: 1rem;
`;

const InfoFooter = styled.article`
`;

const AuthorFooter = styled.article`
`;

const ContactFooter = styled.section`
`;

const UsFooter = styled.section`
`;

const TutorFooter = styled.section`
`;

const CopyRight = styled.section`
`;

const SocialMedia = styled.section`
`;

const Title = styled.h2`
`;
export const Footer = () => {
  return (
    <StyledFooter>
      <InfoFooter>
        <ContactFooter>
          <Title>Contáctanos</Title>
        </ContactFooter>
        <UsFooter>
          <Title></Title>About us
        </UsFooter>
        <TutorFooter>
          <Title></Title>Become a tutor
          </TutorFooter>
      </InfoFooter>
      <AuthorFooter>
        <CopyRight></CopyRight>
        <SocialMedia></SocialMedia>
      </AuthorFooter>
    </StyledFooter>
  )
}