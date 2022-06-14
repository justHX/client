import { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { useLocation } from "react-router-dom";

import { adminVolonteerList } from "../../actions/adminPanelApi";

const VolonteerAdmin = () => {
  const location = useLocation();
  const isimpoverishedPage = location.pathname === "/admin#volonteer";
  const [volonteers, setVolonteers] = useState([]);

  const volL = [
    {
      id: "d76sad7",
      name: "dfsfs",
      phone: "87654",
      employedDate: "2022-06-05T18:40:43.234Z",
      isRegisterTrue: true,
    },
    {
      id: "d76sad7",
      name: "dfsfs",
      phone: "87654",
      employedDate: "2022-06-05T18:40:43.234Z",
      isRegisterTrue: true,
    },
  ];

  useEffect(() => {
    (async () => {
      try {
        let dataServer: any = await adminVolonteerList();

        setVolonteers(dataServer);
      } catch (e: any) {
        alert("Ошибка!");
      }
    })();
  }, []);
  return (
    <div>
      {!isimpoverishedPage ? (
        <Table striped bordered hover variant="dark">
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Phone</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {volL.map((item, i) => {
              return (
                <tr key={i}>
                  <td>{item.id}</td>
                  <td>{item.name}</td>
                  <td>{item.phone}</td>
                  <td>{item.employedDate}</td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      ) : (
        <div>хуй</div>
      )}
    </div>
  );
};

export default VolonteerAdmin;
