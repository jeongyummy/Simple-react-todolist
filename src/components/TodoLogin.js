import React, { useState } from "react";
import styled from "styled-components";
import { fetchLogin } from "./service";
import { BrowserRouter } from "react-router-dom";
import { useUserContext } from "./store";

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
  const { setUser } = useUserContext();

  const history = BrowserRouter();
  const [account, setAccount] = useState({
    id: "",
    password: "",
  });

  const onChangeAccount = (e) => {
    setAccount({
      ...account,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmitAccount = async () => {
    try {
      const user = await fetchLogin(account);
      setUser(user);
      history.replace("/");
    } catch (error) {
      window.alert(error);
    }
  };

  return (
    <Container>
      <Input
        id="id"
        name="id"
        placeholder="아이디를 입력하세요"
        onChange={onChangeAccount}
      />
      <Button onClick={onSubmitAccount}>LOGIN</Button>
    </Container>
  );
}

export default LoginForm;
