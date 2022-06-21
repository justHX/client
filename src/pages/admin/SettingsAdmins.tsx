import { FC, useEffect, useMemo, useState } from "react";
import { Button, Form, Modal, Table } from "react-bootstrap";

import { NavBarAdmin } from "components";
import { Settings, useSettings } from "stores";
import { useForm } from "hooks";

const defaultValue = {
  id: "",
  name: "",
  value: "",
};

const SettingsAdmins: FC = () => {
  const { settings, fetchSettingsList, changeSettings, deleteSettingsById } =
    useSettings();

  const [shownId, setShownId] = useState<string>("");
  const handleClose = () => setShownId("");
  const handleShow = (id: string) => setShownId(id);

  const shownItem = useMemo(() => {
    return settings.list.find((item) => item.id === shownId);
  }, [settings.list, shownId]);

  const { state, setFormValue } = useForm<Settings>(shownItem || defaultValue);

  useEffect(() => {
    fetchSettingsList();
  }, [fetchSettingsList]);

  const handleSubmit = () => {
    changeSettings(state);
    handleClose();
  };

  return (
    <div>
      <NavBarAdmin />

      <Modal show={Boolean(shownId)} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Сообщение</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Наименование
          <Form.Control
            onChange={(e) => setFormValue("name", e.target.value)}
            disabled={true}
            value={state.name}
            className="mb-3"
            placeholder="Наименование"
          />

          Текст
          <Form.Control
            onChange={(e) => setFormValue("value", e.target.value)}
            value={state.value}
            className="mb-3"
            placeholder="Текст"
          />
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="danger"
            onClick={() => {
              deleteSettingsById(shownId);
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
            <th className="text-center">Наименование</th>
            <th className="text-center">Текст</th>
          </tr>
        </thead>
        <tbody>
          {settings.list.map((item, i) => {
            return (
              <tr
                key={i}
                onClick={() => {
                  handleShow(item.id);
                }}
              >
                <td>{item.name}</td>
                <td>{item.value}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
};

export default SettingsAdmins;
