import {NavBarAdmin} from "../../components";
import {Table} from "react-bootstrap";
import {useFeedback, useSettings} from "../../stores";
import {useEffect} from "react";

const FeedbackAdmin = () => {
    const {feedback, fetchFeedbackList} = useFeedback();

    useEffect(() => {
        fetchFeedbackList()
    }, []);

    return (
        <div>
            <NavBarAdmin/>
            <Table striped bordered hover variant="dark">
                <thead>
                <tr>
                    <th>#</th>
                    <th>Text</th>
                    <th>Send Date</th>
                    <th>
                        <tr>Id</tr>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Expirience</th>
                    </th>
                    <th>Read</th>
                    <th>Answer</th>
                </tr>
                </thead>
                <tbody>
                {feedback.list.map((item, i) => {
                    return (
                        <tr key={i}>
                            <td>{item.id}</td>
                            <td>{item.text}</td>
                            <td>{item.sendDate}</td>
                            <td>
                                <td>{item.botUser.id}</td>
                                <td>{item.botUser.name}</td>
                                <td>{item.botUser.age}</td>
                                <td>{item.botUser.expirience}</td>
                            </td>
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
