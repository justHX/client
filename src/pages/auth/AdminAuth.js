import React, {useContext, useState} from 'react';
import {Button, Form} from "react-bootstrap";
import {loginAdmin} from "../../actions/userApi";
import {Context} from "../../index";
import {Redirect, useNavigate} from "react-router-dom";


const AdminAuth = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const {user} = useContext(Context)

    const navigate = useNavigate()


    const click = async () => {
        try {

            let dataServer = await loginAdmin(email, password);

            if ("id" in dataServer.data) {
                user.setUser(dataServer)
                user.setIsAuth(true)
                navigate('/admin', { replace: true })
                console.log(user)
            } else {
                alert(dataServer.data.text)
            }

        } catch (e) {
            alert(e.response.data.message)
        }

    }

    return (
        <div>
            <h2 className="m-auto text-center">Авторизация в панель администратора</h2>
            <Form className="d-flex flex-column">
                <Form.Control className="mt-3" placeholder="Введите логин"
                              onChange={e => setEmail(e.target.value)}/>
                <Form.Control className="mt-3" placeholder="Введите пароль" type="password"
                              onChange={e => setPassword(e.target.value)}/>

                <Button style={{width: 150}} className="m-auto mt-4" variant={"outline-primary"} onClick={click}>
                    Войти
                </Button>
            </Form>
        </div>
    );
};

export default AdminAuth;