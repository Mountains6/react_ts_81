import { useContext } from "react";
import { MainCardContext } from "../MainCard/MainCard";
import { ContentComponent, DataItem } from "./styles";
import Button from "../../../../components/Button/Button";
// import { data } from "react-router-dom";
// import type { ContentProps } from "./types";

function Content() {
  // Шаг 3. Получение данных из контекста с помощью useContext#
  // В вызов хука useContext необходимо передать нужный контекст
  // const userData = useContext(MainCardContext)
  // console.log(userData);

  const {data, onDataChange} = useContext(MainCardContext);

  return (
    <ContentComponent>
      <DataItem>First Name: {data?.firstName}</DataItem>
      <DataItem>Last Name: {data?.lastName}</DataItem>
      <DataItem>Age: {data?.age}</DataItem>
      <Button name="DELETE" onButtonClick={()=>{onDataChange(undefined)}}></Button>
    </ContentComponent>
  );
}

export default Content;
