import {useEffect} from "react";
import {Table} from "react-bootstrap";
import {NavBarAdmin} from "components";
import {useVolonteers} from "stores";

const VolonteerAdmin = () => {

    const {volonteers, fetchVolonteersList} = useVolonteers();

    useEffect(() => {
        fetchVolonteersList()
    }, []);

    return (
        <div>
            <NavBarAdmin/>
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
                        <tr key={i}>
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
