import React from 'react';
import {Container, Nav, Navbar} from "react-bootstrap";

const NavBarAdmin = () => {
    return (
        <div>

            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand>Панель администратора</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="#impoverished">Пользователи</Nav.Link>
                        <Nav.Link href="#volonteer">Волонтеры</Nav.Link>
                        <Nav.Link href="#admeens">Админы</Nav.Link>
                        <Nav.Link href="#feedback">Обратная связь</Nav.Link>
                        <Nav.Link href="#telegram">Telegram бот</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    );
};

export default NavBarAdmin;