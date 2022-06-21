import React, {useEffect, useMemo, useState} from 'react';
import NavBarImpov from "../../components/NavBarImpov";
import {Button, Form, Modal, Table} from "react-bootstrap";
import {useClaim} from "../../stores/claim";
import {DateUtils} from "utils";

const ClaimUser = () => {

    const {claim, fetchClaimList, fetchClaimsById} = useClaim();

    useEffect(() => {
        fetchClaimList()
    }, []);

    const [shownId, setShownId] = useState<string>("");
    const handleClose = () => setShownId("");
    const handleShow = (id: string) => setShownId(id);

    const shownItem = useMemo(() => {
        return claim.item
    }, [claim.item])

    const parsedClaimItem = useMemo(
        () =>

            Boolean(shownId) ?
                claim.item!.taskCompletionDate = DateUtils.parseDate(claim.item!.taskCompletionDate)
                :
                console.log(shownItem)
        ,
        [claim.item]
    );

    const parsedClaimList = useMemo(
        () =>
            claim.list.map((cl) => {
                cl.taskCompletionDate = DateUtils.parseDate(cl.taskCompletionDate);
                return cl;
            }),
        [claim.list]
    );

    return (
        <div>
            <NavBarImpov/>

            <Modal show={Boolean(shownId)} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form.Control
                        disabled={true}
                        value={shownItem?.name}
                        className="mb-3"
                        placeholder="Text"
                    />

                    <Form.Control
                        disabled={true}
                        value={shownItem?.age}
                        className="mb-3"
                        placeholder="Text"
                    />

                    <Form.Control
                        disabled={true}
                        value={shownItem?.phone}
                        className="mb-3"
                        placeholder="Text"
                    />
                    <Form.Control
                        disabled={true}
                        value={shownItem?.street}
                        className="mb-3"
                        placeholder="Text"
                    />
                    <Form.Control
                        disabled={true}
                        value={shownItem?.house}
                        className="mb-3"
                        placeholder="Text"
                    />
                    <Form.Control
                        disabled={true}
                        value={shownItem?.flat}
                        className="mb-3"
                        placeholder="Text"
                    />

                    <Form.Control
                        disabled={true}
                        value={shownItem?.volonteerName}
                        className="mb-3"
                        placeholder="Description"
                    />

                    <Form.Control
                        disabled={true}
                        value={shownItem?.volonteerAge}
                        className="mb-3"
                        placeholder="Description"
                    />

                    <Form.Control
                        disabled={true}
                        value={shownItem?.volonteerPhone}
                        className="mb-3"
                        placeholder="Description"
                    />

                    <Form.Check
                        disabled={true}
                        checked={Boolean(shownItem?.isReady)}
                        className="mb-3"
                        type={'checkbox'}
                        id={'default-checkbox'}
                        label={'Active'}
                    />

                    <Form.Check
                        disabled={true}
                        checked={Boolean(shownItem?.inProcess)}
                        className="mb-3"
                        type={'checkbox'}
                        id={'default-checkbox'}
                        label={'Active'}
                    />

                    <Form.Control
                        disabled={true}
                        value={shownItem?.taskCompletionDate}
                        className="mb-3"
                        placeholder="Description"
                    />

                    <Form.Control
                        disabled={true}
                        value={shownItem?.startHour}
                        className="mb-3"
                        placeholder="Description"
                    />

                    <Form.Control
                        disabled={true}
                        value={shownItem?.endHour}
                        className="mb-3"
                        placeholder="Description"
                    />

                    <Form.Control
                        disabled={true}
                        value={shownItem?.description}
                        className="mb-3"
                        placeholder="Description"
                    />

                    {shownItem?.subTasks.map((item, i) => {
                        return (

                            <div>
                                SubTasks
                                <Form.Control
                                    disabled={true}
                                    value={item.title}
                                    className="mb-3"
                                    placeholder="Description"
                                />

                                <Form.Control
                                    disabled={true}
                                    value={item.type}
                                    className="mb-3"
                                    placeholder="Description"
                                />
                            </div>

                        );
                    })}

                </Modal.Body>
                <Modal.Footer>

                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>

            <Table striped bordered hover variant="dark">
                <thead>
                <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Completion Date</th>
                    <th>Street</th>
                    <th>House</th>
                </tr>
                </thead>
                <tbody>
                {claim.list.map((item, i) => {
                    return (
                        <tr key={i} onClick={() => {
                            fetchClaimsById(shownId);
                            handleShow(item.id)
                        }}>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td>{item.taskCompletionDate}</td>
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

export default ClaimUser;