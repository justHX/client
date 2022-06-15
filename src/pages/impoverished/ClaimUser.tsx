import React, {useEffect} from 'react';
import NavBarImpov from "../../components/NavBarImpov";
import {Table} from "react-bootstrap";
import {useClaim} from "../../stores/claim";

const ClaimUser = () => {

    const {claim, fetchClaimList} = useClaim();

    useEffect(() => {
        fetchClaimList()
    }, []);


    return (
        <div>
            <NavBarImpov/>
            <Table striped bordered hover variant="dark">
                <thead>
                <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Completion Date</th>
                    <th>Street</th>
                    <th>House</th>
                </tr>
                </thead>
                <tbody>
                {claim.list.map((item, i) => {
                    return (
                        <tr key={i}>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td>{item.taskCompletionDate}</td>
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

export default ClaimUser;