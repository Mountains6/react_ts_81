import styled from "@emotion/styled";
export const InputComponent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  width: 100%;
`;

export const Label = styled.label`
  font-size: 18px;
  color: rgb(255, 255, 255);
`;

export const InputElement = styled.input`
 width: 100%;
 padding: 12px;
 border: 2px solid rgb(15, 46, 17);
 border-radius: 8px;
 font-size: 18px;
 outline: none;
 &::placeholder {
   color: rgb(0, 0, 0);
 }
`;
