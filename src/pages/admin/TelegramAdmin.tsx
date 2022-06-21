import {Button, Form, Modal, Table} from "react-bootstrap";
import {NavBarAdmin} from "../../components";
import {useEffect, useMemo, useState} from "react";
import {useTelegram} from "../../stores/telegram";

const TelegramAdmin = () => {

    const {telegram, fetchCommandsList} = useTelegram();
    const [shownId, setShownId] = useState<string>("");
    const handleClose = () => setShownId("");
    const handleShow = (id : string) => setShownId(id);

    const shownItem = useMemo(()=>{
        return telegram.list.find((item)=>item.id === shownId)
    }, [telegram.list, shownId])

    useEffect(() => {
        fetchCommandsList()
    }, [fetchCommandsList]);

    console.log(shownItem)

    return (
        <div>
            <NavBarAdmin/>

            <Modal show={Boolean(shownId)} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form.Control
                        value={shownItem?.text}
                        className="mb-3"
                        placeholder="Text"
                    />

                    <Form.Control
                        value={shownItem?.description}
                        className="mb-3"
                        placeholder="Description"
                    />

                    <Form.Check
                        checked={Boolean(shownItem?.isActive)}
                        className="mb-3"
                        type={'checkbox'}
                        id={'default-checkbox'}
                        label={'Active'}
                    />

                </Modal.Body>
                <Modal.Footer>
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
                    <th>Text</th>
                    <th>Description</th>
                    <th>Active</th>
                </tr>
                </thead>
                <tbody>
                {telegram.list.map((item, i) => {
                    return (
                        <tr key={i} onClick={()=>{
                            handleShow(item.id)
                        }}>
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
