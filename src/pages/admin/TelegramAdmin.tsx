import {Table} from "react-bootstrap";
import {NavBarAdmin} from "../../components";

const TelegramAdmin = () => {


    const comm = [
        {
            id: "d76sad7",
            text: "dfsfs",
            description: "87654",
            isActive: true,
        },
        {
            id: "d76sad7",
            text: "dfsfs",
            description: "87654",
            isActive: true,
        },
    ];

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
                {comm.map((item, i) => {
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
