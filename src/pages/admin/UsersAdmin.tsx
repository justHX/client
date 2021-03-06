import { FC, useEffect, useMemo, useState } from "react";
import { Button, Form, Modal, Table } from "react-bootstrap";

import { NavBarAdmin } from "components";
import { UserAdminAll, useUserAdmin } from "stores";
import { useForm } from "hooks";

const defaultValue = {
  id: "",
  name: "",
  phone: "",
  street: "",
  house: "",
  isCreate: false,
  age: 0,
  district: 3,
  flat: "string",
};

const UsersAdmin: FC = () => {
  const {
    userAdmin,
    fetchUserAdminList,
    fetchUserAdminById,
    changeUserAdmin,
    deleteUserAdminById,
  } = useUserAdmin();

  const [shownId, setShownId] = useState<string>("");

  const handleShow = (id: string) => setShownId(id);
  const handleClose = () => setShownId("");

  const shownItem = useMemo(() => {
    return userAdmin.userAdminAll;
  }, [userAdmin.userAdminAll]);

  const { state, setFormValue } = useForm<UserAdminAll>(
    shownItem || defaultValue
  );

  useEffect(() => {
    fetchUserAdminList();
  }, [fetchUserAdminList]);

  const handleSubmit = () => {
    changeUserAdmin(state);
    handleClose();
  };

  return (
    <div>
      <NavBarAdmin />

      <Modal show={Boolean(shownId)} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Пользователь</Modal.Title>
        </Modal.Header>
        <Modal.Body>

          ФИО
          <Form.Control
            onChange={(e) => {
              setFormValue("name", e.target.value);
              setFormValue("id",shownId);
            }}
            value={state.name}
            className="mb-3"
            placeholder="Имя"
          />
          Возраст
          <Form.Control
            onChange={(e) => setFormValue("age", e.target.value)}
            value={state.age}
            className="mb-3"
            placeholder="Возраст"
          />
          Телефон
          <Form.Control
            onChange={(e) => setFormValue("phone", e.target.value)}
            value={state.phone}
            className="mb-3"
            placeholder="Телефон"
          />

          Район
          <Form.Select
              className="mt-3"
              onChange={(e) => setFormValue("district", e.target.value)}
              value={state.district}
          >
            <option value="1">Железнодорожный</option>
            <option value="2">Коминтерновский</option>
            <option value="3">Левобережный</option>
            <option value="4">Ленинский</option>
            <option value="5">Советский</option>
            <option value="6">Центральный</option>
          </Form.Select>

          Улица
          <Form.Control
            onChange={(e) => setFormValue("street", e.target.value)}
            value={state.street}
            className="mb-3"
            placeholder="Улица"
          />
          Дом
          <Form.Control
            onChange={(e) => setFormValue("house", e.target.value)}
            value={state.house}
            className="mb-3"
            placeholder="Дом"
          />
          Квартира
          <Form.Control
            onChange={(e) => setFormValue("flat", e.target.value)}
            value={state.flat}
            className="mb-3"
            placeholder="Квартира"
          />
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="danger"
            onClick={() => {
              deleteUserAdminById(shownId);
              handleClose();
            }}
          >
            Удалить
          </Button>
          <Button variant="secondary" onClick={handleClose}>
            Закрыть
          </Button>
          <Button variant="primary" onClick={handleSubmit}>
            Сохранить изменения
          </Button>
        </Modal.Footer>
      </Modal>

      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th className="text-center">Имя</th>
            <th className="text-center">Телефон</th>
            <th className="text-center">Улица</th>
            <th className="text-center">Дом</th>
          </tr>
        </thead>
        <tbody>
          {userAdmin.list.map((item, i) => {
            return (
              <tr
                key={i}
                onClick={() => {
                  fetchUserAdminById(item.id);
                  handleShow(item.id);
                }}
              >
                <td>{item.name}</td>
                <td>{item.phone}</td>
                <td>{item.street}</td>
                <td>{item.house}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
};

export default UsersAdmin;
