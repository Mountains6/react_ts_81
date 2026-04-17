import { useState, type ChangeEvent } from "react";
import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";
import { InputsContainer, Lesson09Wrapper, Result } from "./styles";

function Lesson09() {
  // Контролируемый компонет - компонент значение которого (state)
  // и изменяем его с помощью функции изменения состояния. Эти значения мы передаём
  // в атрибуты value
  const [exampleValue, setExampleValue] = useState<string>("");
  const [resultValue, setResultValue] = useState<string>("");

  const onSendClick = () => {
    setResultValue(exampleValue)
  };

  const onInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setExampleValue(event.target.value.toUpperCase());
  };

  return (
    <Lesson09Wrapper>
      <Button name="Send" />
      <Button name="Delete" isDanger />
      <InputsContainer>
        {/* Неконтролируемый компонет - все изменения контролирует браузер */}
        <Input name="example" />
        <Input
          name="example2"
          label="Control"
          placeholder="Enter value"
          id="ex_2"
          value={exampleValue}
          onChange={onInputChange}
        />
        <Button name="Send" onButtonClick={onSendClick} />
      </InputsContainer>
      <Result>{resultValue}</Result>
    </Lesson09Wrapper>
  );
}

export default Lesson09;

