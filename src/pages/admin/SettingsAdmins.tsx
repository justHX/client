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
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Control
            onChange={(e) => setFormValue("name", e.target.value)}
            value={state.name}
            className="mb-3"
            placeholder="Text"
          />

          <Form.Control
            onChange={(e) => setFormValue("value", e.target.value)}
            value={state.value}
            className="mb-3"
            placeholder="Description"
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
            Delete
          </Button>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSubmit}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>

      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Value</th>
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
                <td>{item.id}</td>
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
