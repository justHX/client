import {Container, Nav, Navbar} from "react-bootstrap";

const NavBarAdmin = () => {


  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand>Панель администратора</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/admin/user">Пользователи</Nav.Link>
            <Nav.Link href="/admin/volonteer">Волонтеры</Nav.Link>
            <Nav.Link href="/admin/settings">Админы</Nav.Link>
            <Nav.Link href="/admin/feedback">Обратная связь</Nav.Link>
            <Nav.Link href="/admin/telegram">Telegram бот</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBarAdmin;
