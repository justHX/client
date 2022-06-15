import { Table } from "react-bootstrap";
import {NavBarAdmin} from "../../components";

const UsersAdmin = () => {
  const comm = [
    {
      id: "d76sad7",
      name: "dfsfs",
      taskCompletionDate: "87654",
      street: "87654",
      house: "dsafgh",
    },
    {
      id: "d76sad7",
      name: "dfsfs",
      taskCompletionDate: "87654",
      street: "87654",
      house: "dsafgh",
    },
  ];

  return (
    <div>
      <NavBarAdmin/>
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Completion Date</th>
            <th>Street</th>
            <th>House</th>
          </tr>
        </thead>
        <tbody>
          {comm.map((item, i) => {
            return (
              <tr key={i}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.taskCompletionDate}</td>
                <td>{item.street}</td>
                <td>{item.house}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
};

export default UsersAdmin;
