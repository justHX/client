import {FC, useEffect, useMemo, useState} from "react";
import NavBarImpov from "components/NavBarImpov";
import {Button, Form, Modal, Table} from "react-bootstrap";
import {useClaim} from "stores/claim";
import {DateUtils} from "utils";
import {useUser} from "stores";

const ClaimUser: FC = () => {
  const {user} = useUser();
  const { claim, fetchClaimList, fetchClaimsById } = useClaim();

  useEffect(() => {
    fetchClaimList(user.idUser);
  }, [fetchClaimList]);

  const [shownId, setShownId] = useState<string>("");
  const handleClose = () => setShownId("");
  const handleShow = (id: string) => setShownId(id);

  const shownItem = useMemo(() => {
    const { item } = claim;

    if (item) {
      const newDate = DateUtils.parseDate(
        item.taskCompletionDate,
        "yyyy-MM-dd"
      );

      return { ...claim.item, taskCompletionDate: newDate };
    } else {
      return null;
    }
  }, [claim]);

  const parsedClaimList = useMemo(
    () =>
      claim.list.map((cl) => ({
        ...cl,
        taskCompletionDate: DateUtils.parseDate(cl.taskCompletionDate),
      })),
    [claim.list]
  );

  return (
    <div>
      <NavBarImpov />

      <Modal show={Boolean(shownId)} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Информация о заявке</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Имя
          <Form.Control
            disabled={true}
            value={shownItem?.name}
            className="mb-3"
            placeholder="Text"
          />

          Возраст
          <Form.Control
            disabled={true}
            value={shownItem?.age}
            className="mb-3"
            placeholder="Text"
          />

          Телефон
          <Form.Control
            disabled={true}
            value={shownItem?.phone}
            className="mb-3"
            placeholder="Text"
          />

          Улица
          <Form.Control
            disabled={true}
            value={shownItem?.street}
            className="mb-3"
            placeholder="Text"
          />
          Дом
          <Form.Control
            disabled={true}
            value={shownItem?.house}
            className="mb-3"
            placeholder="Text"
          />
          Квартира
          <Form.Control
            disabled={true}
            value={shownItem?.flat}
            className="mb-3"
            placeholder="Text"
          />
          Волонтёр
          <Form.Control
            disabled={true}
            value={shownItem?.volunteerName}
            className="mb-3"
            placeholder="Description"
          />
          Возраст волонтёра
          <Form.Control
            disabled={true}
            value={shownItem?.volunteerAge}
            className="mb-3"
            placeholder="Description"
          />

          Телефон волонтёра
          <Form.Control
            disabled={true}
            value={shownItem?.volunteerPhone}
            className="mb-3"
            placeholder="Description"
          />

          <Form.Check
            disabled={true}
            checked={Boolean(shownItem?.isReady)}
            className="mb-3"
            type={"checkbox"}
            id={"default-checkbox"}
            label={"Заявка завершена"}
          />

          <Form.Check
            disabled={true}
            checked={Boolean(shownItem?.inProcess)}
            className="mb-3"
            type={"checkbox"}
            id={"default-checkbox"}
            label={"В процессе"}
          />

          Дата завершения
          <Form.Control
            disabled={true}
            value={shownItem?.taskCompletionDate}
            className="mb-3"
            placeholder="Description"
          />

          Час начала периода помощи
          <Form.Control
            disabled={true}
            value={shownItem?.startHour}
            className="mb-3"
            placeholder="Description"
          />

          Час окончания периода помощи
          <Form.Control
            disabled={true}
            value={shownItem?.endHour}
            className="mb-3"
            placeholder="Description"
          />

          Комментарий
          <Form.Control
            disabled={true}
            value={shownItem?.description}
            className="mb-3"
            placeholder="Description"
          />

          {shownItem?.subTasks?.map((item, i) => {
            return (
              <div>
                Подзадача {++i}
                <Form.Control
                  disabled={true}
                  value={item.title}
                  className="mb-3"
                  placeholder="Description"
                />
                <Form.Control
                  disabled={true}
                  value={item.type}
                  className="mb-3"
                  placeholder="Description"
                />
              </div>
            );
          })}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Закрыть
          </Button>
        </Modal.Footer>
      </Modal>

      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th className="text-center">ФИО</th>
            <th className="text-center">Дата завершения</th>
            <th className="text-center">Улица</th>
            <th className="text-center">Дом</th>
          </tr>
        </thead>
        <tbody>
          {parsedClaimList.map((item, i) => {
            return (
              <tr
                key={i}
                onClick={() => {
                  fetchClaimsById(item.id);
                  handleShow(item.id);
                }}
              >
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

export default ClaimUser;
