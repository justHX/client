import {Container, Nav, Navbar} from "react-bootstrap";
import {ROUTES} from "../const";

const NavBarAdmin = () => {

  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand>Панель администратора</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href={ROUTES.ADMIN_ROUTE_USER}>Пользователи</Nav.Link>
            <Nav.Link href={ROUTES.ADMIN_ROUTE_VOLONTEER}>Волонтеры</Nav.Link>
            <Nav.Link href={ROUTES.ADMIN_ROUTE_SETTINGS}>Админы</Nav.Link>
            <Nav.Link href={ROUTES.ADMIN_ROUTE_FEEDBACK}>Обратная связь</Nav.Link>
            <Nav.Link href={ROUTES.ADMIN_ROUTE_TELEGRAMM}>Telegram бот</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBarAdmin;
