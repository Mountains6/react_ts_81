import { useState, type ChangeEvent } from "react";
import { v4 } from "uuid";

import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";
import type { TodoTask } from "./types";
import {
  InputsContainer,
  Lesson10Wrapper,
  Title,
  TodoItem,
  TodoListContainer,
} from "./styles";

function Lesson10() {
  const [inputValue, setInputValue] = useState<string>("");
  const [todos, setTodos] = useState<TodoTask[]>([]);

  const onInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const onAddClick = () => {
    if (inputValue.trim().length > 0) {
      const newTask: TodoTask = {
        id: v4(),
        text: inputValue,
      };
      setTodos([...todos, newTask]);
      setInputValue("");
    }
  };

  const onDeleteTask = (taskId: string) => {
    const filteredTodos = todos.filter((todo) => todo.id !== taskId);
    setTodos(filteredTodos);
  };

  const todoElements = todos.map((todo, index) => {
    return (
      <TodoItem key={todo.id}>
        {index + 1}. {todo.text}
        <Button name="УДАЛИТЬ" isDanger onButtonClick={() => onDeleteTask(todo.id)} />
      </TodoItem>
    );
  });

  return (
    <Lesson10Wrapper>
      <Title>Lesson 10 - ToDo List</Title>
      <InputsContainer>
        <Input
          name="todo"
          label="Новая задача"
          type="text"
          id="todo_input_1"
          placeholder="Введите задачу"
          value={inputValue}
          onChange={onInputChange}
        />
        <Button name="ДОБАВИТЬ" onButtonClick={onAddClick} />
      </InputsContainer>
      <TodoListContainer>{todoElements}</TodoListContainer>
    </Lesson10Wrapper>
  );
}

export default Lesson10;
