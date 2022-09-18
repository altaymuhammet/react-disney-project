import React from "react";
import styled from "styled-components";

const Login = (props) => {
  return (
    <Container>
      <Content>
        <CTA>
          <CTALogoOne src="/images/cta-logo-one.svg" alt="Logo" />
          <CTAButton>GET ALL THERE</CTAButton>
          <Description>
            Get Premier Access to Raya and the Last Dragon for an additional fee
            with a Disney+ subscription. As of 03/26/21, the price of Disney+
            and The Disney Bundle will increase by $1.
          </Description>
          <CTALogoTwo src="/images/cta-logo-two.png" alt="Logo" />
        </CTA>
        <BgImage />
      </Content>
    </Container>
  );
};

const Container = styled.section`
  margin-top: 70px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  text-align: center;
  height: 100vh;
`;

const Content = styled.div`
  margin-bottom: 10vh;
  width: 100%;
  position: relative;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 80px 40px;
  height: 100%;
`;

const BgImage = styled.div`
  background-image: url("/images/login-background.jpg");
  height: 100%;
  width: 100%;
  background-position: top;
  background-size: cover;
  background-repeat: no-repeat;
  z-index: -1;
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
`;

const CTA = styled.div`
  max-width: 650px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const CTALogoOne = styled.img`
  margin-bottom: 30px;
  max-width: 600px;
  min-height: 1px;
  width: 100%;
`;

const CTAButton = styled.a`
  font-weight: bold;
  font-size: 20px;
  background-color: #0063e5;
  padding: 16.5px 0;
  max-width: 650px;
  width: 100%;
  border: 1px solid transparent;
  border-radius: 10px;
  margin-bottom: 30px;
  cursor: pointer;
  letter-spacing: 2px;

  :hover {
    background-color: #0483ee;
  }
`;

const Description = styled.p`
  width: 100%;
  letter-spacing: 1px;
  line-height: 1.5;
  text-align: center;
  opacity: 0.9;
  margin-bottom: 30px;
`;

const CTALogoTwo = styled.img`
  margin-bottom: 30px;
  max-width: 600px;
  min-height: 1px;
  width: 100%;
  vertical-align: bottom;
`;

export default Login;
