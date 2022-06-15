import NavBarAdmin from "components/NavBarAdmin";
import VolonteerAdmin from "../admin/VolonteerAdmin";
import UsersAdmin from "../admin/UsersAdmin";
import {useLocation} from "react-router-dom";

const AdminPage = () => {

    const location = useLocation();
    const isimpoverishedPage = location.pathname === "/admin/user";

  return (
    <div>
      <NavBarAdmin />
        {isimpoverishedPage ? <UsersAdmin/> : <VolonteerAdmin/>}
    </div>
  );
};

export default AdminPage;
