import { Container, Nav, Navbar } from "react-bootstrap";

const NavBarImpov = () => {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand>Панель пользователя</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/impoverished/claim">Подать заявку</Nav.Link>
            <Nav.Link href="/impoverished/story">История</Nav.Link>
            <Nav.Link href="/impoverished/edit">Редактировать информацию</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBarImpov;
