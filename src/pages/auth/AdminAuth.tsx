import { useState, FC } from "react";
import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

import { ROUTES } from "const";

import { useUser } from "stores";

const AdminAuth: FC = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const { authAdmin } = useUser();

  const click = async () => {
    try {
      await authAdmin(email, password);
      navigate(ROUTES.ADMIN_ROUTE, { replace: true });
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div>
      <h2 className="m-auto text-center">
        Авторизация в панель администратора
      </h2>
      <Form className="d-flex flex-column">
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

        <Button
          style={{ width: 150 }}
          className="m-auto mt-4"
          variant={"outline-primary"}
          onClick={click}
        >
          Войти
        </Button>
      </Form>
    </div>
  );
};

export default AdminAuth;
