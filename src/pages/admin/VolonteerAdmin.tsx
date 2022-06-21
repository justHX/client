import { FC, useEffect, useMemo, useState } from "react";
import { Button, Form, Modal, Table } from "react-bootstrap";

import { NavBarAdmin } from "components";
import { useVolonteers, VolunteerDetail } from "stores";
import { DateUtils } from "utils";
import { useForm } from "hooks";

const defaultValue = {
  id: "",
  name: "",
  phone: "",
  gender: "",
  employedDate: "",
  chatId: "",
  isCreate: false,
};

const VolonteerAdmin: FC = () => {
  const {
    volonteers,
    fetchVolunteersList,
    fetchVolunteerById,
    updateVolunteer,
    deleteVolunteer,
  } = useVolonteers();

  const [shownId, setShownId] = useState<string>("");
  const handleClose = () => setShownId("");
  const handleShow = (id: string) => setShownId(id);

  const shownItem = useMemo(() => {
    if (volonteers.item) {
      return {
        ...volonteers.item,
        employedDate: DateUtils.parseDate(
          volonteers.item.employedDate,
          "yyyy-MM-dd"
        ),
      };
    } else {
      return null;
    }
  }, [volonteers.item]);

  const { state, setFormValue } = useForm<VolunteerDetail>(
    shownItem || defaultValue
  );

  useEffect(() => {
    fetchVolunteersList();
  }, [fetchVolunteersList]);

  const parsedVolunteers = useMemo(
    () =>
      volonteers.list.map((volunteer) => ({
        ...volunteer,
        employedDate: DateUtils.parseDate(volunteer.employedDate),
      })),
    [volonteers.list]
  );

  const handleSubmit = () => {
    const parsedState = {
      ...state,
      employedDate: DateUtils.formatDate(state.employedDate, "yyyy-MM-dd"),
    };
    updateVolunteer(parsedState);
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
          <Form.Check
            onChange={(e) => setFormValue("isCreate", e.target.checked)}
            checked={Boolean(state.isCreate)}
            className="mb-3"
            type={"checkbox"}
            id={"default-checkbox"}
            label={"Active"}
          />

          <Form.Control
            onChange={(e) => setFormValue("name", e.target.value)}
            value={state.name}
            className="mb-3"
            placeholder="Text"
          />

          <Form.Control
            onChange={(e) => setFormValue("phone", e.target.value)}
            value={state.phone}
            className="mb-3"
            placeholder="Description"
          />
          <Form.Control
            onChange={(e) => setFormValue("chatId", e.target.value)}
            value={state.chatId}
            className="mb-3"
            placeholder="Description"
          />
          <Form.Control
            onChange={(e) => setFormValue("gender", e.target.value)}
            value={state.gender}
            className="mb-3"
            placeholder="Description"
          />
          <Form.Control
            onChange={(e) => setFormValue("employedDate", e.target.value)}
            value={DateUtils.parseDate(state.employedDate, "yyyy-MM-dd")}
            className="mb-3"
            placeholder="Description"
            type="date"
          />
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="danger"
            onClick={() => {
              deleteVolunteer(shownId);
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
            <th>Phone</th>
            <th>Gender</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {parsedVolunteers.map((item, i) => {
            return (
              <tr
                key={i}
                onClick={() => {
                  fetchVolunteerById(shownId);
                  handleShow(item.id);
                }}
              >
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.phone}</td>
                <td>{item.gender}</td>
                <td>{item.employedDate}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
};

export default VolonteerAdmin;
