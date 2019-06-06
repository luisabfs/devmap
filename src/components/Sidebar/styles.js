import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;

  height: 100%;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;

  background: #fff;
  width: 300px;
  height: 300px;
  margin: 30px;
  padding: 10px;
  border-radius: 5px;

  h1 {
    width: 100%;
    text-align: center;
    font-size: 36px;
    margin: 12px;
    border-bottom: 1px solid #ededed;
  }
`;
