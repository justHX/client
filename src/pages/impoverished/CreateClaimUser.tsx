import {FC, useState} from "react";
import {Button, Card, Container, Form} from "react-bootstrap";

import NavBarImpov from "components/NavBarImpov";
import {useCreateClaim, useUser, useUserInfo} from "stores";

const CreateClaimUser: FC = () => {

    const {user} = useUser();

    const {createClaimInfo} = useCreateClaim();

    const [taskCompletionDate, setTaskCompletionDate] = useState<string>("");
    const [startHour, setStartHour] = useState<number>(0);
    const [endHour, setEndHour] = useState<number>(0);
    const [description, setDescription] = useState<string>("");
    const [title, setTitle] = useState<string>("");
    const [type, setType] = useState<number>(0);

    const click = () => {

        const num = createClaimInfo(
            user.idUser,
            taskCompletionDate,
            startHour,
            endHour,
            description,
            [
                {
                    title,
                    type
                }
            ]
        )
        alert(num)
    }


    return (
        <div>
            <NavBarImpov/>

            <Container
                className="d-flex justify-content-center align-items-center"
                style={{height: window.innerHeight - 54}}
            >
                <Card style={{width: 600}} className="p-5">
                    <h2 className="m-auto text-center">Формирование заявки</h2>
                    <Form className="d-flex flex-column">
                        <Form.Control
                            className="mt-3"
                            placeholder="Введите дату"
                            type="date"
                            onChange={(e) => setTaskCompletionDate(e.target.value)}
                        />

                        <Form.Control
                            className="mt-3"
                            type="number"
                            placeholder="Введите время начала"
                            onChange={(e) => setStartHour(Number(e.target.value))}
                        />
                        <Form.Control
                            className="mt-3"
                            type="number"
                            placeholder="Введите время окончания"
                            onChange={(e) => setEndHour(Number(e.target.value))}
                        />

                        <Form.Control
                            className="mt-3"
                            placeholder="Введите название подзадачи"
                            onChange={(e) => setTitle(e.target.value)}
                        />
                        <Form.Control
                            className="mt-3"
                            placeholder="Введите описание подзадачи"
                            onChange={(e) => setDescription(e.target.value)}
                        />
                        <Form.Control
                            onChange={(e) => setType(Number(e.target.value))}
                            type="number"
                            className="mt-3"
                            placeholder="Введите тип подзадачи"
                        />

                        <Button
                            style={{width: 150}}
                            className="m-auto mt-4"
                            variant={"outline-secondary"}
                            onClick={click}
                        >
                            Отправить
                        </Button>
                    </Form>
                </Card>
            </Container>
        </div>
    );
};

export default CreateClaimUser;
