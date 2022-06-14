import { FC } from "react";
import { Navigate, useLocation } from "react-router-dom";

interface Props {
  isAuth: boolean;
  redirect: string;
  children: JSX.Element;
}

const SecurePage: FC<Props> = ({ isAuth, children, redirect }) => {
  const location = useLocation();

  if (!isAuth) {
    return <Navigate to={redirect} state={{ from: location }} replace />;
  }

  return children;
};

SecurePage.displayName = "SecurePage";

export default SecurePage;
