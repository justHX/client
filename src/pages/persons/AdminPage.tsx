import NavBarAdmin from "components/NavBarAdmin";
import VolonteerAdmin from "../admin/VolonteerAdmin";
import TelegramAdmin from "../admin/TelegramAdmin";
import UsersAdmin from "../admin/UsersAdmin";

const AdminPage = () => {
  return (
    <div>
      <NavBarAdmin />
      <TelegramAdmin />
    </div>
  );
};

export default AdminPage;
