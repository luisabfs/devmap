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

  width: 20%;
  background: rgba(255, 255, 255, 0.8);
  position: absolute;
  left: 2%;
  top: 3%;
  height: 92%;
  border-radius: 5px;
  overflow: auto;

  p {
    font-weight: bold;
    font-size: 18px;
    color: #000;
    text-align: center;
    padding: 15px 0;
  }

  ul {
    list-style: none;
    margin: 0;
    padding: 0;

    li {
      display: flex;
      flex-direction: row;
      border-radius: 3px;
      margin: 10px;
      padding: 5px;
      align-content: space-between;

      &:hover {
        background: #fff;
      }

      a {
        color: #333;
        font-weight: bold;
        align-self: flex-end;
        margin-right: 3px;
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

export const Button = styled.button`
  background: transparent;
  border: 0;
`;

export const ActionsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  flex: 1;
  margin-left: 10px;
`;
