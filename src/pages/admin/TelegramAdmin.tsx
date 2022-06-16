import {Table} from "react-bootstrap";
import {NavBarAdmin} from "../../components";
import {useFeedback} from "../../stores";
import {useEffect} from "react";
import {useTelegram} from "../../stores/telegram";

const TelegramAdmin = () => {

    const {telegram, fetchCommandsList} = useTelegram();

    useEffect(() => {
        fetchCommandsList()
    }, [fetchCommandsList]);

    return (
        <div>
            <NavBarAdmin/>
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
                        <tr key={i}>
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
