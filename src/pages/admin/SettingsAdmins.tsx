import React, {useEffect} from 'react';
import {NavBarAdmin} from "../../components";
import {Table} from "react-bootstrap";
import {useSettings} from "../../stores";

const SettingsAdmins = () => {

    const {settings, fetchSettingsList} = useSettings();

    useEffect(() => {
        fetchSettingsList()
    }, [fetchSettingsList]);

    return (
        <div>
            <NavBarAdmin/>
            <Table striped bordered hover variant="dark">
                <thead>
                <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Value</th>
                </tr>
                </thead>
                <tbody>
                {settings.list.map((item, i) => {
                    return (
                        <tr key={i}>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td>{item.value}</td>
                        </tr>
                    );
                })}
                </tbody>
            </Table>
        </div>
    );
};

export default SettingsAdmins;