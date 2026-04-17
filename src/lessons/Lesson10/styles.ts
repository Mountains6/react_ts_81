import styled from "@emotion/styled";

export const Lesson10Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  flex: 1;
  padding: 40px;
  background: rgb(59, 107, 62);
`;

export const InputsContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  min-width: 300px;
`;

export const TodoListContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  border: 4px solid rgb(9, 65, 1);
  background-color: white;
`;

export const TodoItem = styled.div`
  display: flex;
  flex-direction: row;
  font-size: 20px;
  padding: 10px;
  border-radius: 4px;
  color: rgb(0, 0, 0);
  width: 100%;
  justify-content: space-between;
  align-items: center;
`;

export const Title = styled.h2`
  color: white;
`;
