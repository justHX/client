import {Button, Form, Modal, Table} from "react-bootstrap";
import {NavBarAdmin} from "../../components";
import {useEffect, useMemo, useState} from "react";
import {useUserAdmin} from "../../stores/userAdmin";

const UsersAdmin = () => {

    const {userAdmin, fetchUserAdminList, fetchUserAdminById, deleteUserAdminById} = useUserAdmin();

    const [shownId, setShownId] = useState<string>("");
    const handleClose = () => setShownId("");
    const handleShow = (id : string) => setShownId(id);

    const shownItem = useMemo(()=>{
        return userAdmin.userAdminAll;
    }, [userAdmin.userAdminAll])

    useEffect(() => {
        fetchUserAdminList()
    }, [fetchUserAdminList]);

    console.log(shownItem)

    return (
        <div>
            <NavBarAdmin/>

            <Modal show={Boolean(shownId)} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>

                    <Form.Check
                        checked={Boolean(shownItem?.isCreate)}
                        className="mb-3"
                        type={'checkbox'}
                        id={'default-checkbox'}
                        label={'Active'}
                    />
                    <Form.Control
                        value={shownItem?.name}
                        className="mb-3"
                        placeholder="Text"
                    />
                    <Form.Control
                        value={shownItem?.age}
                        className="mb-3"
                        placeholder="Description"
                    />
                    <Form.Control
                        value={shownItem?.phone}
                        className="mb-3"
                        placeholder="Description"
                    />
                    <Form.Control
                        value={shownItem?.district}
                        className="mb-3"
                        placeholder="Description"
                    />
                    <Form.Control
                        value={shownItem?.street}
                        className="mb-3"
                        placeholder="Description"
                    />
                    <Form.Control
                        value={shownItem?.house}
                        className="mb-3"
                        placeholder="Description"
                    />
                    <Form.Control
                        value={shownItem?.flat}
                        className="mb-3"
                        placeholder="Description"
                    />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="danger" onClick={()=>{
                        deleteUserAdminById(shownId)
                        handleClose()
                    }}>
                        Delete
                    </Button>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
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
                        <tr key={i} onClick={()=>{
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
