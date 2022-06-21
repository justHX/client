import {useEffect, useMemo, useState} from "react";
import {Button, Form, Modal, Table} from "react-bootstrap";
import {NavBarAdmin} from "components";
import {useVolonteers} from "stores";
import {DateUtils} from "utils";

const VolonteerAdmin = () => {

    const {volonteers, fetchVolunteersList, fetchVolunteerById, deleteVolunteer} = useVolonteers();

    const [shownId, setShownId] = useState<string>("");
    const handleClose = () => setShownId("");
    const handleShow = (id: string) => setShownId(id);

    const shownItem = useMemo(() => {
        return volonteers.item
    }, [volonteers.item])

    console.log(shownItem)

    useEffect(() => {
        fetchVolunteersList();
    }, [fetchVolunteersList]);

    const parsedVolunteerItem = useMemo(
        () =>

            Boolean(shownId) ?
            volonteers.item!.employedDate = DateUtils.parseDate(volonteers.item!.employedDate)
                :
                console.log(shownItem)
        ,
        [volonteers.item]
    );

    const parsedVolunteers = useMemo(
        () =>
            volonteers.list.map((volunteer) => {
                volunteer.employedDate = DateUtils.parseDate(volunteer.employedDate);
                return volunteer;
            }),
        [volonteers.list]
    );

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
                        value={shownItem?.phone}
                        className="mb-3"
                        placeholder="Description"
                    />
                    <Form.Control
                        value={shownItem?.chatId}
                        className="mb-3"
                        placeholder="Description"
                    />
                    <Form.Control
                        value={shownItem?.gender}
                        className="mb-3"
                        placeholder="Description"
                    />
                    <Form.Control
                        value={shownItem?.employedDate}
                        className="mb-3"
                        placeholder="Description"
                    />

                </Modal.Body>
                <Modal.Footer>
                    <Button variant="danger" onClick={() => {
                        deleteVolunteer(shownId)
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
                    <th>#</th>
                    <th>Name</th>
                    <th>Phone</th>
                    <th>Gender</th>
                    <th>Date</th>
                </tr>
                </thead>
                <tbody>
                {volonteers.list.map((item, i) => {
                    return (
                        <tr key={i} onClick={() => {
                            fetchVolunteerById(shownId);
                            handleShow(item.id)
                        }}>
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
