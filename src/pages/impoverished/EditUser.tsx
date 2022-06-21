import { FC, useEffect } from "react";
import { Button, Card, Container, Form } from "react-bootstrap";

import NavBarImpov from "components/NavBarImpov";

import { useForm } from "hooks";
import {UserInfo, useUser, useUserInfo} from "stores";

const defaultValue = {
  id: "",
  name: "",
  age: 0,
  phone: "",
  district: 0,
  street: "",
  house: "",
  flat: "",
  email: "",
  password: "",
};

const EditUser: FC = () => {
  const { user } = useUser();
  const { userInfo, fetchUserInfoById, updateUserInfo } = useUserInfo();

  useEffect(() => {
    fetchUserInfoById(user.idUser);
  }, [fetchUserInfoById, user]);

  const { state, setFormValue } = useForm<UserInfo>(
    userInfo.item || defaultValue
  );

  const handleSubmit = () => {
    const newState = { ...state, id: user.idUser };
    updateUserInfo(newState);
  };

  return (
    <div>
      <NavBarImpov />

      <Container
        className="d-flex justify-content-center align-items-center"
        style={{ height: window.innerHeight - 54 }}
      >
        <Card style={{ width: 600 }} className="p-5">
          <h2 className="m-auto text-center">Редактировать контактные данные</h2>
          <Form className="d-flex flex-column">
            <Form.Control
              onChange={(e) => setFormValue("name", e.target.value)}
              value={state.name}
              className="mt-3"
              placeholder="Имя"
            />

            <Form.Control
              onChange={(e) => setFormValue("age", e.target.value)}
              value={state.age}
              className="mt-3"
              placeholder="Возраст"
            />
            <Form.Control
              onChange={(e) => setFormValue("phone", e.target.value)}
              value={state.phone}
              className="mt-3"
              placeholder="Телефон"
            />

            <Form.Control
              onChange={(e) => setFormValue("district", e.target.value)}
              value={state.district}
              className="mt-3"
              placeholder="Район"
            />
            <Form.Control
              onChange={(e) => setFormValue("street", e.target.value)}
              value={state.street}
              className="mt-3"
              placeholder="Улица"
            />
            <Form.Control
              onChange={(e) => setFormValue("house", e.target.value)}
              value={state.house}
              className="mt-3"
              placeholder="Дом"
            />
            <Form.Control
              onChange={(e) => setFormValue("flat", e.target.value)}
              value={state.flat}
              className="mt-3"
              placeholder="Квартира"
            />
            <Form.Control
              onChange={(e) => setFormValue("email", e.target.value)}
              value={state.email}
              className="mt-3"
              placeholder="Email"
            />
            <Form.Control
              onChange={(e) => setFormValue("password", e.target.value)}
              value={state.password}
              className="mt-3"
              placeholder="Password"
            />

            <Button
              onClick={handleSubmit}
              style={{ width: 150 }}
              className="m-auto mt-4"
              variant={"outline-secondary"}
            >
              Отправить
            </Button>
          </Form>
        </Card>
      </Container>
    </div>
  );
};

export default EditUser;
