import { FC, useState } from "react";
import { Button, Form, NavLink } from "react-bootstrap";
import { useLocation, useNavigate } from "react-router-dom";

import { ROUTES } from "const";

import { useUser } from "stores";
import { registerImpov } from "actions/userApi";

const ImpoverishedAuth: FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [phone, setPhone] = useState("");
  const [district, setDistrict] = useState("");
  const [street, setStreet] = useState("");
  const [house, setHouse] = useState("");
  const [flat, setFlat] = useState("");
  const [loginReg, setLoginReg] = useState("");
  const [passwordReg, setPasswordReg] = useState("");

  const { authUser } = useUser();

  const isLoginPage = location.pathname === ROUTES.LOGIN_ROUTE;

  const loginUser = async () => {
    await authUser(email, password);

    navigate(ROUTES.IMPROVERISHED_ROUTE_STORY, { replace: true });
  };

  const registerUser = async () => {
    await registerImpov(
      name,
      age,
      phone,
      district,
      street,
      house,
      flat,
      loginReg,
      passwordReg
    );
    navigate(ROUTES.LOGIN_ROUTE, { replace: true });
  };

  return (
    <div>
      <h2 className="m-auto text-center">
        {isLoginPage ? "Авторизация" : "Регистрация"}
      </h2>
      <Form className="d-flex flex-column">
        {isLoginPage ? (
          <div>
            <Form.Control
              className="mt-3"
              placeholder="Введите логин"
              onChange={(e) => setEmail(e.target.value)}
            />
            <Form.Control
              className="mt-3"
              placeholder="Введите пароль"
              type="password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        ) : (
          <div>
            <Form.Control
              className="mt-3"
              placeholder="Введите имя"
              onChange={(e) => setName(e.target.value)}
            />
            <Form.Control
              className="mt-3"
              placeholder="Введите возраст"
              onChange={(e) => setAge(e.target.value)}
            />
            <Form.Control
              className="mt-3"
              placeholder="Введите телефон"
              onChange={(e) => setPhone(e.target.value)}
            />
            <Form.Control
              className="mt-3"
              placeholder="Введите район"
              onChange={(e) => setDistrict(e.target.value)}
            />
            <Form.Control
              className="mt-3"
              placeholder="Введите улицу"
              onChange={(e) => setStreet(e.target.value)}
            />
            <Form.Control
              className="mt-3"
              placeholder="Введите дом"
              onChange={(e) => setHouse(e.target.value)}
            />
            <Form.Control
              className="mt-3"
              placeholder="Введите квартиру"
              onChange={(e) => setFlat(e.target.value)}
            />
            <Form.Control
              className="mt-3"
              placeholder="Введите логин"
              onChange={(e) => setLoginReg(e.target.value)}
            />
            <Form.Control
              className="mt-3"
              placeholder="Введите пароль"
              onChange={(e) => setPasswordReg(e.target.value)}
            />
          </div>
        )}

        <Button
          style={{ width: 150 }}
          className="m-auto mt-4"
          variant={"outline-primary"}
          onClick={isLoginPage ? loginUser : registerUser}
        >
          {isLoginPage ? "Войти" : "Регистрация"}
        </Button>
        {isLoginPage ? (
          <div className="btn mt-3">
            Нет аккаунта?{" "}
            <NavLink href={ROUTES.REGISTRATION_ROUTE}>Зарегистрируйся!</NavLink>
          </div>
        ) : (
          <div className="btn mt-3">
            Есть аккаунт? <NavLink href={ROUTES.LOGIN_ROUTE}>Войдите!</NavLink>
          </div>
        )}
      </Form>
    </div>
  );
};

export default ImpoverishedAuth;
