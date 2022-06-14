import { useContext } from "react";
import NavBarAdmin from "../../components/NavBarAdmin";
import VolonteerAdmin from "../admin/VolonteerAdmin";
import { Context } from "../../index";
import TelegramAdmin from "../admin/TelegramAdmin";
import UsersAdmin from "../admin/UsersAdmin";

const AdminPage = () => {
  const { user } = useContext(Context);
  console.log(user);

  return (
    <div>
      <NavBarAdmin />
      <TelegramAdmin />
    </div>
  );
};

export default AdminPage;
