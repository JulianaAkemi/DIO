import styled from "styled-components";

export const ButtonContainer = styled.button`
  padding: 20px;
  border: 1px solid #cdcdcd;
  background-color: #00aaf0;
  color: #ffffff;
  font-size: 24px;
  font-weight: 700;
  ${({ children }) => (children === "c" ? "width: 50%;" : "flex: 1;")};

  &:hover {
    opacity: 0.6;
    cursor: pointer;
  }
`;
