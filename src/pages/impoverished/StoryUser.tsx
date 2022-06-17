import React, {useEffect} from 'react';
import NavBarImpov from "../../components/NavBarImpov";
import {useImpoverishedHistory, useUser, useVolonteers} from "../../stores";
import {Table} from "react-bootstrap";

const StoryUser = () => {
    const user = useUser()

    const {impoverishedHistory, fetchList} = useImpoverishedHistory();

    useEffect(() => {
        fetchList()
    }, []);


    return (
        <div>
            <NavBarImpov/>

            <Table striped bordered hover variant="dark">
                <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Completion Date</th>
                    <th>Street</th>
                    <th>House</th>
                </tr>
                </thead>
                <tbody>
                {impoverishedHistory.list.map((item, i) => {
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

export default StoryUser;