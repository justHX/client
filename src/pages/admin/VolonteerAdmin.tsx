import {useEffect, useState} from "react";
import {Table} from "react-bootstrap";
import {useLocation} from "react-router-dom";

import {adminVolonteerList} from "../../actions/adminPanelApi";
import VolonteerAuth from "../auth/VolonteerAuth";

const VolonteerAdmin = () => {

    const [volonteers, setVolonteers] = useState<Volonteer[] | null>(null);

    interface Volonteer {
        id: string,
        name: string,
        phone: string,
        employedDate: string,
        isRegisterTrue: boolean,
    }

    useEffect(() => {
        (async () => {
            try {
                const dataServer: any = await adminVolonteerList();
                const v: Volonteer[] = dataServer.data
                console.log(v)

                setVolonteers(v);
            } catch (e: any) {
                alert("Ошибка!");
            }
        })();
    }, []);

    return (
        <div>
            <Table striped bordered hover variant="dark">
                <thead>
                <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Phone</th>
                    <th>Date</th>
                </tr>
                </thead>
                <tbody>
                {volonteers?.map((item, i) => {
                    return (
                        <tr key={i}>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td>{item.phone}</td>
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
