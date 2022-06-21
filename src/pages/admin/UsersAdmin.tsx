import {Button, Form, Modal, Table} from "react-bootstrap";
import {useEffect, useMemo, useState} from "react";

import {NavBarAdmin} from "components";
import {UserAdminAll, useUserAdmin} from "stores/userAdmin";
import {useForm} from "hooks";

const defaultValue = {
    id: "",
    name: "",
    phone: "",
    street: "",
    house: "",
    isCreate: false,
    age: 0,
    district: 3,
    flat: "string"
}

const UsersAdmin = () => {

    const {userAdmin, fetchUserAdminList, fetchUserAdminById, changeUserAdmin, deleteUserAdminById} = useUserAdmin();

    const [shownId, setShownId] = useState<string>("");

    const handleShow = (id: string) => setShownId(id);
    const handleClose = () => setShownId("");

    const shownItem = useMemo(() => {
        return userAdmin.userAdminAll;
    }, [userAdmin.userAdminAll])

    const {state, setFormValue} = useForm<UserAdminAll>(shownItem || defaultValue)

    useEffect(() => {
        fetchUserAdminList()
    }, [fetchUserAdminList]);

    console.log(shownItem)

    const handleSubmit = () => {
        changeUserAdmin(state);
        handleClose()
    }

    return (
        <div>
            <NavBarAdmin/>

            <Modal show={Boolean(shownId)} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>

                    <Form.Check
                        onChange={(e) => setFormValue("isCreate", e.target.checked)}
                        checked={Boolean(state.isCreate)}
                        className="mb-3"
                        type={'checkbox'}
                        id={'default-checkbox'}
                        label={'Active'}
                    />
                    <Form.Control
                        onChange={(e) => setFormValue("name", e.target.value)}
                        value={state.name}
                        className="mb-3"
                        placeholder="Text"
                    />
                    <Form.Control
                        onChange={(e) => setFormValue("age", e.target.value)}
                        value={state.age}
                        className="mb-3"
                        placeholder="Description"
                    />
                    <Form.Control
                        onChange={(e) => setFormValue("phone", e.target.value)}
                        value={state.phone}
                        className="mb-3"
                        placeholder="Description"
                    />
                    <Form.Control
                        onChange={(e) => setFormValue("district", e.target.value)}
                        value={state.district}
                        className="mb-3"
                        placeholder="Description"
                    />
                    <Form.Control
                        onChange={(e) => setFormValue("street", e.target.value)}
                        value={state.street}
                        className="mb-3"
                        placeholder="Description"
                    />
                    <Form.Control
                        onChange={(e) => setFormValue("house", e.target.value)}
                        value={state.house}
                        className="mb-3"
                        placeholder="Description"
                    />
                    <Form.Control
                        onChange={(e) => setFormValue("flat", e.target.value)}
                        value={state.flat}
                        className="mb-3"
                        placeholder="Description"
                    />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="danger" onClick={() => {
                        deleteUserAdminById(shownId)
                        handleClose()
                    }}>
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
                    <th>Name</th>
                    <th>Phone</th>
                    <th>Street</th>
                    <th>House</th>
                </tr>
                </thead>
                <tbody>
                {userAdmin.list.map((item, i) => {
                    return (
                        <tr key={i} onClick={() => {
                            fetchUserAdminById(shownId);
                            handleShow(item.id)
                        }}>
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
