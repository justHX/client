import { FC } from "react";
import { Card, Container, ListGroup } from "react-bootstrap";

const backgroundURL =
  "https://abrakadabra.fun/uploads/posts/2022-01/1643368202_1-abrakadabra-fun-p-oboi-na-rabochii-stol-golubi-1.jpg";

const TelegramInfo: FC = () => {
  return (
    <div style={{ backgroundImage: `url('${backgroundURL}')` }}>
      <Container
        className="d-flex justify-content-center align-items-center"
        style={{ height: window.innerHeight - 54 }}
      >
        <Card style={{ width: 900 }} className="p-5">
          <h6 className="text-center text-black-50">
            Самый добрый - проект помощи пожилым людям и нуждающимся.
            <br />
            Многие люди не могут выйти из дома, их родственники живут далеко и
            нет возможности приезжать каждый день. Именно поэтому данный проект
            должен заинтересовать неравнодушных людей. Его суть - оказание
            услуги, доставка товаров волонтером на определенный адрес.
          </h6>
          <p>Описание функций бота и как в нем работать:</p>
          <ListGroup>
            <ListGroup.Item>
              1. Выбрать новую задачу. В данном пункте сначала показываются 6
              районов города, выбираешь район и видишь список 5 первых
              приоритетных задачи.
            </ListGroup.Item>
            <ListGroup.Item>
              2. В работе. В данном пункте показываются задачи, которые ты взял
              в работу и пока ещё не выполнил.
            </ListGroup.Item>
            <ListGroup.Item>
              3. История задач. В данном пункте показываются задачи, которые ты
              взял в работу и уже выполнил.
            </ListGroup.Item>
            <ListGroup.Item>
              4. Информация о проекте - нажав на эту кнопку ты перешел сюда :)
            </ListGroup.Item>
            <ListGroup.Item>
              5. Обратная связь. Данный пункт подразумевает окончание выполнения
              задачи. Если волонтер выполнил заявку, он должен отправить код
              подтверждения, который получит от пользователя, в данный
              раздел,тем самым завершив задачу.
            </ListGroup.Item>
            <ListGroup.Item>
              6. Удалить меня. В данном пункте ты можешь удалить себя из
              системы, если не хочешь больше участвовать в проекте, но перед
              этим необходимо завершить задачи, которые находятся "В работе".
            </ListGroup.Item>
          </ListGroup>
        </Card>
      </Container>
    </div>
  );
};

export default TelegramInfo;
