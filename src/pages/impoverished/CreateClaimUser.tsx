import {FC} from "react";
import {Button, Card, Container, Form} from "react-bootstrap";

import NavBarImpov from "components/NavBarImpov";
import {useUser, useClaim} from "stores";

const CreateClaimUser: FC = () => {
    const user = useUser();
    const {claim, fetchClaimsById} = useClaim();

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
                        />

                        <Form.Control className="mt-3" placeholder="Введите время начала"/>
                        <Form.Control
                            className="mt-3"
                            placeholder="Введите время окончания"
                        />

                        <Form.Control
                            className="mt-3"
                            placeholder="Введите название подзадачи"
                        />
                        <Form.Control className="mt-3" placeholder="Введите тип подзадачи"/>

                        <Button
                            style={{width: 150}}
                            className="m-auto mt-4"
                            variant={"outline-secondary"}
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
