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

  ul {
    list-style: none;
    margin: 0;
    padding: 0;

    li {
      display: flex;
      flex-direction: row;
      margin: 10px;
      padding: 5px;

      &:hover {
        background: #f2f2f2;
      }
    }
  }
`;

export const Avatar = styled.img`
  border-radius: 100%;
  width: 48px;
  height: 48px;
`;

export const UsernameWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 10px;
`;
