import React from 'react';
import {Button, Form, NavLink} from "react-bootstrap";
import {LOGIN_ROUTE, REGISTRATION_ROUTE} from "../../utils/Consts";
import {useLocation} from "react-router-dom";

const ImpoverishedAuth = () => {
    const location = useLocation()
    const isLoginPage = location.pathname === LOGIN_ROUTE


    return (
        <div>
            <h2 className="m-auto text-center">{isLoginPage ? 'Авторизация' : 'Регистрация'}</h2>
            <Form className="d-flex flex-column">
                {isLoginPage ?
                    <div>
                        <Form.Control className="mt-3" placeholder="Введите логин"/>
                        <Form.Control className="mt-3" placeholder="Введите пароль"/>
                    </div>
                    :
                    <div>
                        <Form.Control className="mt-3" placeholder="Введите имя"/>
                        <Form.Control className="mt-3" placeholder="Введите возраст"/>
                        <Form.Control className="mt-3" placeholder="Введите район"/>
                        <Form.Control className="mt-3" placeholder="Введите улицу"/>
                        <Form.Control className="mt-3" placeholder="Введите дом"/>
                        <Form.Control className="mt-3" placeholder="Введите квартиру"/>
                    </div>
                }

                <Button style={{width: 150}} className="m-auto mt-4" variant={"outline-primary"}>
                    {isLoginPage ? 'Войти' : 'Регистрация'}
                </Button>
                {isLoginPage ?
                    <div className="btn mt-3">
                        Нет аккаунта? <NavLink href={REGISTRATION_ROUTE}>Зарегистрируйся!</NavLink>
                    </div>
                    :
                    <div className="btn mt-3">
                        Есть аккаунт? <NavLink href={LOGIN_ROUTE}>Войдите!</NavLink>
                    </div>
                }

            </Form>

        </div>
    );
};

export default ImpoverishedAuth;