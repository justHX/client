import { FC, useMemo } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { useLocation } from "react-router-dom";

import { ROUTES } from "const";

interface Route {
  route: ROUTES;
  title: string;
  isActive?: boolean;
}

const routes: Route[] = [
  { route: ROUTES.ADMIN_ROUTE_USER, title: "Пользователи" },
  { route: ROUTES.ADMIN_ROUTE_VOLONTEER, title: "Волонтеры" },
  { route: ROUTES.ADMIN_ROUTE_SETTINGS, title: "Админы" },
  { route: ROUTES.ADMIN_ROUTE_FEEDBACK, title: "Обратная связь" },
  { route: ROUTES.ADMIN_ROUTE_TELEGRAMM, title: "Telegram бот" },
];

const NavBarAdmin: FC = () => {
  const { pathname } = useLocation();

  const paths = useMemo(() => {
    return routes.map((item) => ({
      ...item,
      isActive: item.route === pathname,
    }));
  }, [pathname]);

  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand>Панель администратора</Navbar.Brand>
          <Nav className="me-auto">
            {paths.map(({ route, isActive, title }) => (
              <Nav.Link
                style={isActive ? { textDecoration: "underline" } : undefined}
                href={route}
              >
                {title}
              </Nav.Link>
            ))}
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBarAdmin;
