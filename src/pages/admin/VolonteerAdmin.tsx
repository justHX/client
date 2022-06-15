import { useEffect, useMemo } from "react";
import { Table } from "react-bootstrap";
import { NavBarAdmin } from "components";
import { useVolonteers } from "stores";
import { DateUtils } from "utils";

const VolonteerAdmin = () => {
  const { volonteers, fetchVolunteersList } = useVolonteers();

  useEffect(() => {
    fetchVolunteersList();
  }, [fetchVolunteersList]);

  const parsedVolunteers = useMemo(
    () =>
      volonteers.list.map((volunteer) => {
        volunteer.employedDate = DateUtils.parseDate(volunteer.employedDate);
        return volunteer;
      }),
    [volonteers.list]
  );

  return (
    <div>
      <NavBarAdmin />
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Phone</th>
            <th>Gender</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {parsedVolunteers.map((item, i) => {
            return (
              <tr key={i}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.phone}</td>
                <td>{item.gender}</td>
                <td>{item.employedDate}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
};

export default VolonteerAdmin;
