import {NavBarAdmin} from "../../components";
import {Button, Form, Modal, Table} from "react-bootstrap";
import {useFeedback} from "../../stores";
import {useEffect, useMemo, useState} from "react";
import {DateUtils} from "utils";

const FeedbackAdmin = () => {
    const {feedback, fetchFeedbackList,fetchFeedbackById, updateFeedback} = useFeedback();

    const [shownId, setShownId] = useState<string>("");
    const handleClose = () => setShownId("");
    const handleShow = (id : string) => setShownId(id);

    const shownItem = useMemo(()=>{
        return feedback.item
    }, [feedback.item, shownId])

    console.log(shownItem);

    useEffect(() => {
        fetchFeedbackList()
    }, [fetchFeedbackList]);

    const parsedFeedbackItem = useMemo(
        () =>
            Boolean(shownId) ?
                () => {
                    feedback.item!.readDate = DateUtils.parseDate(feedback.item!.readDate);
                    feedback.item!.answerDate = DateUtils.parseDate(feedback.item!.answerDate);
                    feedback.item!.sendDate = DateUtils.parseDate(feedback.item!.sendDate)
                }

                :
                console.log(shownItem),
        [feedback.list]
    );

    const parsedFeedback = useMemo(
        () =>
            feedback.list.map((feedb) => {
                feedb.sendDate = DateUtils.parseDate(feedb.sendDate);
                return feedb;
            }),
        [feedback.list]
    );
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
                        value={shownItem?.sendDate}
                        className="mb-3"
                        placeholder="Description"
                    />

                    <Form.Check
                        checked={Boolean(shownItem?.volunteer.name)}
                        className="mb-3"
                        type={'checkbox'}
                        id={'default-checkbox'}
                        label={'Active'}
                    />

                    <Form.Check
                        checked={Boolean(shownItem?.isRead)}
                        className="mb-3"
                        type={'checkbox'}
                        id={'default-checkbox'}
                        label={'Active'}
                    />

                    <Form.Control
                        value={shownItem?.readDate}
                        className="mb-3"
                        placeholder="Description"
                    />

                    <Form.Check
                        checked={Boolean(shownItem?.isAnswered)}
                        className="mb-3"
                        type={'checkbox'}
                        id={'default-checkbox'}
                        label={'Active'}
                    />

                    <Form.Control
                        value={shownItem?.answerText}
                        className="mb-3"
                        placeholder="Description"
                    />
                    <Form.Control
                        value={shownItem?.answerDate}
                        className="mb-3"
                        placeholder="Description"
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
                    <th>Send Date</th>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Expirience</th>
                    <th>Read</th>
                    <th>Answer</th>
                </tr>
                </thead>
                <tbody>
                {feedback.list.map((item, i) => {
                    return (
                        <tr key={i} onClick={()=>{
                            fetchFeedbackById(item.id);
                            handleShow(item.id)
                        }}>
                            <td>{item.id}</td>
                            <td>{item.text}</td>
                            <td>{item.sendDate}</td>

                            <td>{item.botUser.name}</td>
                            <td>{item.botUser.age}</td>
                            <td>{item.botUser.expirience}</td>

                            <td>{item.isRead.toString()}</td>
                            <td>{item.isAnswered.toString()}</td>
                        </tr>
                    );
                })}
                </tbody>
            </Table>
        </div>);
};

export default FeedbackAdmin;
