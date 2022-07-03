import { JumbotronContainer } from "../containers/jumbotronContainers";
import { FooterContainer } from "../containers/footerContainer";
import { FaqsContainer } from "../containers/faqs";
import { OptFormContainer } from "../containers/optformContainer";
import HeaderContainer from "../containers/headerContainer";
import OptForm from "../components/optform/optform";
import Feature from "../components/feature/feature";

export default function HomePage() {
  return (
    <>
      <HeaderContainer>
        <Feature>
          <Feature.Title>Unlimited films, TV Shows and more.</Feature.Title>
          <Feature.SubTitle>
            Watch anywhere. Cancel at any time
          </Feature.SubTitle>
          <OptFormContainer>
            <OptForm.Input placeholder="Email Address" />
            <OptForm.Button>Get Started</OptForm.Button>
            <OptForm.Text>
              Ready to watch? Enter your email to create or restart your
              membership
            </OptForm.Text>
          </OptFormContainer>
        </Feature>
      </HeaderContainer>
      <JumbotronContainer />
      <OptFormContainer />
      <FaqsContainer />
      <FooterContainer />
    </>
  );
}
