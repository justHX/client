import React, {useContext} from 'react';
import {Button, Container, Nav, Navbar} from "react-bootstrap";
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {useNavigate} from "react-router-dom";

const NavBar = observer(() => {
    const {user} = useContext(Context)
    const navigate = useNavigate()

    const logIn = () => {
        navigate("/login", { replace: true })
    }

    const logOut = () => {
        user.setUser({})
        user.setIsAuth(false)
        navigate("/", { replace: true })
    }

    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <h4 className="text-white w-25">Ⓥ    Volonteer</h4>
                {user.isAuth ?
                    <Nav className="ml-auto" style={{color: 'white'}}>
                        <Button
                            variant={"outline-light"}
                            onClick={() => logOut()}
                            className="ml-2"
                        >
                            Выйти
                        </Button>
                    </Nav>
                    :
                    <Nav className="ml-auto" style={{color: 'white'}}>
                        <Button variant={"outline-light"} onClick={logIn}>Вход/Регистрация</Button>
                    </Nav>
                }
            </Container>
        </Navbar>
    );
});

export default NavBar;