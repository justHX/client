import { useEffect, useMemo, useState } from "react";
import { Button, Form, Modal, Table } from "react-bootstrap";

import { NavBarAdmin } from "components";
import { Command, useTelegram } from "stores";
import { useForm } from "hooks";

const defaultValue = {
  id: "",
  text: "",
  description: "",
  isActive: false,
};

const TelegramAdmin = () => {
  const { telegram, fetchCommandsList, updateCommands } = useTelegram();
  const [shownId, setShownId] = useState<string>("");
  const handleClose = () => setShownId("");
  const handleShow = (id: string) => setShownId(id);

  const shownItem = useMemo(() => {
    return telegram.list.find((item) => item.id === shownId);
  }, [telegram.list, shownId]);

  const { state, setFormValue } = useForm<Command>(shownItem || defaultValue);

  useEffect(() => {
    fetchCommandsList();
  }, [fetchCommandsList]);

  const handleSubmit = () => {
    updateCommands(state);
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
            value={state.text}
            disabled={true}
            className="mb-3"
            placeholder="Text"
          />

          <Form.Control
            onChange={(e) => setFormValue("description", e.target.value)}
            value={state.description}
            className="mb-3"
            placeholder="Description"
          />

          <Form.Check
            onChange={(e) => setFormValue("isActive", e.target.checked)}
            checked={Boolean(state.isActive)}
            className="mb-3"
            type={"checkbox"}
            id={"default-checkbox"}
            label={"Active"}
          />
        </Modal.Body>
        <Modal.Footer>
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
            <th>Text</th>
            <th>Description</th>
            <th>Active</th>
          </tr>
        </thead>
        <tbody>
          {telegram.list.map((item, i) => {
            return (
              <tr
                key={i}
                onClick={() => {
                  handleShow(item.id);
                }}
              >
                <td>{item.id}</td>
                <td>{item.text}</td>
                <td>{item.description}</td>
                <td>{item.isActive.toString()}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
};

export default TelegramAdmin;
