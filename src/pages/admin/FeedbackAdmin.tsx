import {FC, useEffect, useMemo, useState} from "react";
import {Button, Form, Modal, Table} from "react-bootstrap";

import {FeedbackAnswer, useFeedback} from "stores";
import {NavBarAdmin} from "components";
import {DateUtils} from "utils";
import {useForm} from "hooks";

const defaultValue = { text: "" };

const FeedbackAdmin: FC = () => {
  const { feedback, fetchFeedbackList, fetchFeedbackById, updateFeedback } =
    useFeedback();

  const [shownId, setShownId] = useState<string>("");
  const handleClose = () => setShownId("");
  const handleShow = (id: string) => setShownId(id);

  const shownItem = useMemo(() => {
    if (feedback.item) {
      return {
        ...feedback.item,
        answerDate: DateUtils.parseDate(feedback.item.answerDate, "yyyy-MM-dd"),
        readDate: DateUtils.parseDate(feedback.item.readDate, "yyyy-MM-dd"),
        sendDate: DateUtils.parseDate(feedback.item.sendDate, "yyyy-MM-dd"),
      };
    } else {
      return null;
    }
  }, [feedback.item]);

  useEffect(() => {
    fetchFeedbackList();
  }, [fetchFeedbackList]);

  const parsedFeedback = useMemo(
    () =>
      feedback.list.map((feedb) => ({
        ...feedb,
        sendDate: DateUtils.parseDate(feedb.sendDate),
      })),
    [feedback.list]
  );

  const { state, setFormValue } = useForm<FeedbackAnswer>(defaultValue);

  const handleSubmit = () => {
    updateFeedback(shownId, state);
    handleClose();
  };

  return (
    <div>
      <NavBarAdmin />

      <Modal show={Boolean(shownId)} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Обратная связь</Modal.Title>
        </Modal.Header>
        <Modal.Body>

          Текст обратной связи
          <Form.Control
            disabled={true}
            value={shownItem?.text}
            className="mb-3"
            placeholder="Текст обратной связи"
          />

          Дата отправки
          <Form.Control
            disabled={true}
            value={shownItem?.sendDate}
            className="mb-3"
            placeholder="Дата отправки"
          />

          <Form.Check
            disabled={true}
            checked={shownItem?.isAnswered}
            className="mb-3"
            type={"checkbox"}
            id={"default-checkbox"}
            label={"Отвечено"}
          />

          <Form.Check
              disabled={true}
              checked={shownItem?.isRead}
              className="mb-3"
              type={"checkbox"}
              id={"default-checkbox"}
              label={"Прочитано"}
          />

          Дата прочтения
          <Form.Control
            disabled={true}
            value={shownItem?.readDate}
            className="mb-3"
            placeholder="Дата чтения"
          />

          Текст ответа
          <Form.Control
            disabled={true}
            value={shownItem?.answerText}
            className="mb-3"
            placeholder="Текст ответа"
          />

          Дата ответа
          <Form.Control
            disabled={true}
            value={shownItem?.answerDate || ""}
            className="mb-3"
            placeholder="Description"
          />

          <Form.Control
            onChange={(e) => setFormValue("text", e.target.value)}
            as="textarea"
            className="mb-3 mt-5"
            placeholder="Ведите текст ответа"
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Закрыть
          </Button>
          <Button variant="primary" onClick={handleSubmit} disabled={shownItem?.isAnswered}>
            Отправить ответ
          </Button>
        </Modal.Footer>
      </Modal>

      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th className="text-center">Текст обратной связи</th>
            <th className="text-center">Дата отправки</th>
            <th className="text-center">Волонтёр</th>
            <th className="text-center">Возраст</th>
            <th className="text-center">Опыт</th>
            <th className="text-center">Прочитано</th>
            <th className="text-center">Отвечено</th>
          </tr>
        </thead>
        <tbody>
          {parsedFeedback.map((item, i) => {
            return (
              <tr
                key={i}
                onClick={() => {
                  fetchFeedbackById(item.id);
                  handleShow(item.id);
                }}
              >
                <td>{item.text}</td>
                <td>{item.sendDate}</td>

                <td>{item.botUser.name}</td>
                <td>{item.botUser.age}</td>
                <td>{item.botUser.expirience}</td>

                <td>
                  <Form.Check
                      disabled={true}
                      checked={item.isRead}
                      className="mb-3 text-center"
                      type={"checkbox"}
                      id={"default-checkbox"}
                  />
                </td>
                <td>
                  <Form.Check
                      disabled={true}
                      checked={item.isAnswered}
                      className="mb-3 text-center"
                      type={"checkbox"}
                      id={"default-checkbox"}
                  />
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
};

export default FeedbackAdmin;
