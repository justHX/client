import { FC, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

import { registerVol } from "actions/userApi";
import { ROUTES } from "const";

const VolonteerAuth: FC = () => {
  const [district, setDistrict] = useState("");
  const [street, setStreet] = useState("");
  const [house, setHouse] = useState("");
  const [flat, setFlat] = useState("");
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [expirience, setExpirience] = useState("");
  const [phone, setPhone] = useState("");

  const navigate = useNavigate();

  const click = async () => {
    try {
      await registerVol(
        district,
        street,
        house,
        flat,
        name,
        age,
        expirience,
        phone
      );
      navigate(ROUTES.VOLONTEER_ROUTE, { replace: true });
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div>
      <h2 className="m-auto text-center">
        Введите данные для регистрации в Telegram-боте
      </h2>
      <Form className="d-flex flex-column">
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
          placeholder="Введите опыт"
          onChange={(e) => setExpirience(e.target.value)}
        />
        <Form.Control
          className="mt-3"
          placeholder="Введите телефон"
          onChange={(e) => setPhone(e.target.value)}
        />

        <Button
          style={{ width: 150 }}
          className="m-auto mt-4"
          variant={"outline-primary"}
          onClick={click}
        >
          Регистрация
        </Button>
      </Form>
    </div>
  );
};

export default VolonteerAuth;
