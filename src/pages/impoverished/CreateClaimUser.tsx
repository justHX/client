import {FC, useState} from "react";
import {Alert, Button, Card, Container, Form} from "react-bootstrap";

import NavBarImpov from "components/NavBarImpov";
import {useCreateClaim, useUser, useUserInfo} from "stores";
import {useNavigate} from "react-router-dom";
import {ROUTES} from "../../const";

const CreateClaimUser: FC = () => {

    const {user} = useUser();
    const navigate = useNavigate();

    const {createClaimInfo} = useCreateClaim();

    const [taskCompletionDate, setTaskCompletionDate] = useState<string>("");
    const [startHour, setStartHour] = useState<number>(0);
    const [endHour, setEndHour] = useState<number>(0);
    const [description, setDescription] = useState<string>("");
    const [foodstuff, setFoodstuff] = useState<string>("");
    const [medicine, setMedicine] = useState<string>("");
    const [essentials, setEssentials] = useState<string>("");

    const click = () => {

        createClaimInfo(
            user.idUser,
            taskCompletionDate,
            startHour,
            endHour,
            description,
            foodstuff,
            medicine,
            essentials
        );

        navigate(ROUTES.IMPROVERISHED_ROUTE_STORY, { replace: true });
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
                            placeholder="Введите описание задачи"
                            onChange={(e) => setDescription(e.target.value)}
                        />

                        <Form.Control
                            className="mt-3"
                            placeholder="Введите название продуктов питания (через запятую)"
                            onChange={(e) => setFoodstuff(e.target.value)}
                        />
                        <Form.Control
                            onChange={(e) => setMedicine(e.target.value)}
                            className="mt-3"
                            placeholder="Введите название медикаментов (через запятую)"
                        />

                        <Form.Control
                            onChange={(e) => setEssentials(e.target.value)}
                            className="mt-3"
                            placeholder="Введите предметы первой необходимости (через запятую)"
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
