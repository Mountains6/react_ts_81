import { useContext } from "react";
import { AboutPage, PageInfo, Title } from "./styles";
import { LayoutComponentContext } from "../../components/Layout/Layout";

function About() {
const name = useContext(LayoutComponentContext);

  return (
    <AboutPage>
      <Title>About page</Title>
      <Title>{name}</Title>
      <PageInfo>About page info</PageInfo>
    </AboutPage>
  );
}

export default About;
