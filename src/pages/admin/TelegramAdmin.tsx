import {useEffect, useMemo, useState} from "react";
import {Button, Form, Modal, Table} from "react-bootstrap";

import {NavBarAdmin} from "components";
import {Command, useTelegram} from "stores";
import {useForm} from "hooks";

const defaultValue = {
    id: "",
    text: "",
    description: "",
    isActive: false,
};

const TelegramAdmin = () => {
    const {telegram, fetchCommandsList, updateCommands} = useTelegram();
    const [shownId, setShownId] = useState<string>("");
    const handleClose = () => setShownId("");
    const handleShow = (id: string) => setShownId(id);

    const shownItem = useMemo(() => {
        return telegram.list.find((item) => item.id === shownId);
    }, [telegram.list, shownId]);

    const {state, setFormValue} = useForm<Command>(shownItem || defaultValue);

    useEffect(() => {
        fetchCommandsList();
    }, [fetchCommandsList]);

    const handleSubmit = () => {
        updateCommands(state);
        handleClose();
    };

    return (
        <div>
            <NavBarAdmin/>

            <Modal show={Boolean(shownId)} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Команда</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Текст
                    <Form.Control
                        value={state.text}
                        disabled={true}
                        className="mb-3"
                        placeholder="Текст"
                    />

                    Описание
                    <Form.Control
                        onChange={(e) => setFormValue("description", e.target.value)}
                        value={state.description}
                        className="mb-3"
                        placeholder="Описание"
                    />

                    <Form.Check
                        onChange={(e) => setFormValue("isActive", e.target.checked)}
                        checked={Boolean(state.isActive)}
                        className="mb-3"
                        type={"checkbox"}
                        id={"default-checkbox"}
                        label={"Отображение"}
                    />
                </Modal.Body>
                <Modal.Footer>
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
                    <th className="text-center">Текст</th>
                    <th className="text-center">Описание</th>
                    <th className="text-center">Отображение</th>
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
                            <td>{item.text}</td>
                            <td>{item.description}</td>
                            <td>
                                <Form.Check
                                    disabled={true}
                                    checked={Boolean(item.isActive)}
                                    className="mb-3 text-center"
                                    type={"checkbox"}
                                    id={"default-checkbox"}
                                />
                            </td>
                        </tr>
                    );
                })}
                </tbody>
            </Table>
        </div>
    );
};

export default TelegramAdmin;
