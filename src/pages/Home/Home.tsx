import { useContext } from "react";
import { LayoutComponentContext } from "../../components/Layout/Layout";
import { HomePage, PageInfo, Title } from "./styles";

function Home() {
  const name = useContext(LayoutComponentContext);

  return (
    <HomePage>
      <Title>Welcome to the React App</Title>
      <Title>{name}</Title>
      <PageInfo>Open lecture example</PageInfo>
    </HomePage>
  );
}

export default Home;
