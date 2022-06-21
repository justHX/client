import {NavBarAdmin} from "components";
import {Button, Form, Modal, Table} from "react-bootstrap";
import {Settings, useFeedback} from "stores";
import {useEffect, useMemo, useState} from "react";
import {DateUtils} from "utils";
import {useForm} from "../../hooks";
import {FeedbackAnswer} from "../../stores/feedback/types";


const defaultValue = {
    text: ""
}

const FeedbackAdmin = () => {
    const {feedback, fetchFeedbackList,fetchFeedbackById, updateFeedback} = useFeedback();

    const [shownId, setShownId] = useState<string>("");
    const handleClose = () => setShownId("");
    const handleShow = (id : string) => setShownId(id);

    const shownItem = useMemo(()=>{

        if (feedback.item){
            return {...feedback.item,
                answerDate : DateUtils.parseDate(feedback.item.answerDate, "yyyy-MM-dd"),
                readDate : DateUtils.parseDate(feedback.item.readDate, "yyyy-MM-dd"),
                sendDate : DateUtils.parseDate(feedback.item.sendDate, "yyyy-MM-dd"),
            }
        } else {
            return null;
        }

    }, [feedback.item, shownId])

    console.log(shownItem);

    useEffect(() => {
        fetchFeedbackList()
    }, [fetchFeedbackList]);

    const parsedFeedback = useMemo(
        () =>
            feedback.list.map((feedb) =>
                ({...feedb, sendDate : DateUtils.parseDate(feedb.sendDate)})),
        [feedback.list]
    );

    const {state, setFormValue} = useForm<FeedbackAnswer>( defaultValue)

    const handleSubmit = () => {
        updateFeedback(shownId, state);
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
                    <Form.Control
                        disabled={true}
                        value={shownItem?.text}
                        className="mb-3"
                        placeholder="Text"
                    />

                    <Form.Control
                        disabled={true}
                        value={shownItem?.sendDate}
                        className="mb-3"
                        placeholder="Description"
                    />

                    <Form.Check
                        disabled={true}
                        checked={Boolean(shownItem?.volunteer.name)}
                        className="mb-3"
                        type={'checkbox'}
                        id={'default-checkbox'}
                        label={'Active'}
                    />

                    <Form.Check
                        disabled={true}
                        checked={Boolean(shownItem?.isRead)}
                        className="mb-3"
                        type={'checkbox'}
                        id={'default-checkbox'}
                        label={'Active'}
                    />

                    <Form.Control
                        disabled={true}
                        value={shownItem?.readDate}
                        className="mb-3"
                        placeholder="Description"
                    />

                    <Form.Check
                        disabled={true}
                        checked={Boolean(shownItem?.isAnswered)}
                        className="mb-3"
                        type={'checkbox'}
                        id={'default-checkbox'}
                        label={'Active'}
                    />

                    <Form.Control
                        disabled={true}
                        value={shownItem?.answerText}
                        className="mb-3"
                        placeholder="Description"
                    />
                    <Form.Control
                        disabled={true}
                        value={shownItem?.answerDate}
                        className="mb-3"
                        placeholder="Description"
                    />

                    <Form.Control
                        onChange={(e) => setFormValue("text", e.target.value)}
                        as="textarea"
                        className="mb-3 mt-5"
                        placeholder="Text"
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
                    <th>Send Date</th>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Expirience</th>
                    <th>Read</th>
                    <th>Answer</th>
                </tr>
                </thead>
                <tbody>
                {parsedFeedback.map((item, i) => {
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
