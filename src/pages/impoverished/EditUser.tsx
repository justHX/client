import React, {useMemo, useState} from 'react';
import NavBarImpov from "../../components/NavBarImpov";
import {Button, Card, Container, Form} from "react-bootstrap";
import {useForm} from "../../hooks";
import {UserInfo, useUserInfo} from "../../stores/userInfo";

const defaultValue = {
    id: "",
    name: "",
    age: 0,
    phone:"",
    district:0,
    street:"",
    house:"",
    flat:"",
    email:"",
    password:"",
}

const EditUser = () => {
    const {userInfo, fetchUserInfoById, updateUserInfo} = useUserInfo();
    const [shownId, setShownId] = useState<string>("");
    const shownItem = useMemo(()=>{
        return fetchUserInfoById("")
    }, [])
        //const {state, setFormValue} = useForm<UserInfo>(shownItem || defaultValue)

    return (
        <div>
            <NavBarImpov/>

            <Container
                className="d-flex justify-content-center align-items-center"
                style={{height: window.innerHeight - 54}}
            >

                <Card style={{width: 600}} className="p-5">
                    <h2 className="m-auto text-center">Редактировать информацию</h2>
                    <Form className="d-flex flex-column">

                        <Form.Control
                            className="mt-3"
                            placeholder="Имя"
                        />

                        <Form.Control
                            className="mt-3"
                            placeholder="Возраст"
                        />
                        <Form.Control
                            className="mt-3"
                            placeholder="Телефон"
                        />

                        <Form.Control
                            className="mt-3"
                            placeholder="Дистрикт"
                        />
                        <Form.Control
                            className="mt-3"
                            placeholder="Улица"
                        />
                        <Form.Control
                            className="mt-3"
                            placeholder="Дом"
                        />
                        <Form.Control
                            className="mt-3"
                            placeholder="Квартира"
                        />
                        <Form.Control
                            className="mt-3"
                            placeholder="Email"
                        />
                        <Form.Control
                            className="mt-3"
                            placeholder="Password"
                        />

                        <Button
                            style={{ width: 150 }}
                            className="m-auto mt-4"
                            variant={"outline-secondary"}

                        >
                            Отправить
                        </Button>
                    </Form>

                </Card>
            </Container>

        </div>
    );
};

export default EditUser;