import React from 'react';
import {NavBarAdmin} from "../../components";
import {Table} from "react-bootstrap";

const SettingsAdmins = () => {
    const comm = [
        {
            id: "d76sad7",
            email: "dfsfs",
            fullName: "87654",

        },
        {
            id: "d76sad7",
            email: "dfsfs",
            fullName: "87654",

        }
    ];
    return (
        <div>
            <NavBarAdmin/>
            <Table striped bordered hover variant="dark">
                <thead>
                <tr>
                    <th>#</th>
                    <th>Email</th>
                    <th>Full Name</th>
                </tr>
                </thead>
                <tbody>
                {comm.map((item, i) => {
                    return (
                        <tr key={i}>
                            <td>{item.id}</td>
                            <td>{item.email}</td>
                            <td>{item.fullName}</td>
                        </tr>
                    );
                })}
                </tbody>
            </Table>
        </div>
    );
};

export default SettingsAdmins;