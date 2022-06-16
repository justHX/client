import {Table} from "react-bootstrap";
import {NavBarAdmin} from "../../components";
import {useEffect} from "react";
import {useUserAdmin} from "../../stores/userAdmin";

const UsersAdmin = () => {

    const {userAdmin, fetchUserAdminList} = useUserAdmin();

    useEffect(() => {
        fetchUserAdminList()
    }, [fetchUserAdminList]);

    return (
        <div>
            <NavBarAdmin/>
            <Table striped bordered hover variant="dark">
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Phone</th>
                    <th>Street</th>
                    <th>House</th>
                </tr>
                </thead>
                <tbody>
                {userAdmin.list.map((item, i) => {
                    return (
                        <tr key={i}>
                            <td>{item.name}</td>
                            <td>{item.phone}</td>
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

export default UsersAdmin;
