/* eslint-disable react/no-unescaped-entities */
import React, { Component } from "react";
import styled from "styled-components";
import device from "../../../Assets/Responsive/breakpoints";

const Container = styled.section`
  height: 50vh; /* Since pageSplitTime is 1.4 */
  width: 100%;
  /* border: 1px solid blue; */
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
`;

const AboutMeDescription = styled.span`
  font-family: "AvenirRoman";
  font-size: 24px;
  text-align: center;
  @media ${device.mobileS} {
    padding: 30px;
    font-size: 20px;
  }
  @media ${device.mobileM} {
    padding: 30px;
    font-size: 23px;
  }
  @media ${device.mobileL} {
    padding: 30px;
    font-size: 24px;
  }
  @media ${device.tablet} {
    padding: 80px;
    font-size: 40px;
  }
  @media ${device.laptop} {
    padding: 90px;
    font-size: 45px;
  }
`;

class AboutMe extends Component {
  render() {
    return (
      <Container>
        <AboutMeDescription>
          A skilled Software Engineer with expertise in designing and developing
          innovative solutions, leveraging modern programming languages and
          frameworks. Passionate about optimizing performance and enhancing user
          experience through clean, efficient code.
        </AboutMeDescription>
      </Container>
    );
  }
}

export default AboutMe;
