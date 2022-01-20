import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 100px;
  text-align: right;
`;

const Input = styled.input`
  width: 300px;
  height: 40px;
  border-radius: 5px;
  border: solid 1px #dadada;
  background: #fff;
  box-sizing: border-box;
`;

const Button = styled.button`
  width: 70px;
  height: 30px;
  margin: 10px 10px 0 10px;
  border-radius: 20px;
  background-color: #ff8399;
  border: none;
  cursor: pointer;
`;

function LoginForm() {
  return (
    <Container>
      <Input id="id" name="id" placeholder="아이디를 입력하세요" />
      <Button>LOGIN</Button>
    </Container>
  );
}
export default LoginForm;
