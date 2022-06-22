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
  { route: ROUTES.IMPROVERISHED_ROUTE_STORY, title: "История" },
  { route: ROUTES.IMPROVERISHED_ROUTE_CLAIM, title: "Новая заявка" },
  { route: ROUTES.IMPROVERISHED_ROUTE_EDIT, title: "Редактировать информацию" },
];

const NavBarImpov: FC = () => {
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
          <Navbar.Brand>Панель пользователя</Navbar.Brand>
          <Nav className="me-auto">
            {paths.map(({ route, isActive, title }) => (
              <Nav.Link
                key={route}
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

export default NavBarImpov;
