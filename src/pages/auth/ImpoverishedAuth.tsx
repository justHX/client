import { useState } from "react";
import { Button, Form, NavLink } from "react-bootstrap";
import { useLocation, useNavigate } from "react-router-dom";

import { ROUTES } from "const";

import { useUser } from "stores";

const ImpoverishedAuth = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { authUser } = useUser();

  const isLoginPage = location.pathname === ROUTES.LOGIN_ROUTE;

  const clickUser = async () => {
    await authUser(email, password);
    navigate(ROUTES.ADMIN_ROUTE, { replace: true });
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
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        ) : (
          <div>
            <Form.Control className="mt-3" placeholder="Введите имя" />
            <Form.Control className="mt-3" placeholder="Введите возраст" />
            <Form.Control className="mt-3" placeholder="Введите район" />
            <Form.Control className="mt-3" placeholder="Введите улицу" />
            <Form.Control className="mt-3" placeholder="Введите дом" />
            <Form.Control className="mt-3" placeholder="Введите квартиру" />
          </div>
        )}

        <Button
          style={{ width: 150 }}
          className="m-auto mt-4"
          variant={"outline-primary"}
          onClick={clickUser}
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
