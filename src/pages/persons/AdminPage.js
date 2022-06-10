import React, {useContext} from 'react';
import NavBarAdmin from "../../components/NavBarAdmin";
import VolonteerAdmin from "../admin/VolonteerAdmin";
import {Context} from "../../index";


const AdminPage = () => {

    const {user} = useContext(Context)
    console.log(user)
    return (
        <div>
            <NavBarAdmin/>
            <VolonteerAdmin/>

        </div>
    );
};

export default AdminPage;