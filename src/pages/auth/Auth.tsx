import { FC, useState } from "react";
import { Card, Container, Row } from "react-bootstrap";
import { Radio, RadioGroup } from "react-radio-group";

import ImpoverishedAuth from "./ImpoverishedAuth";
import AdminAuth from "./AdminAuth";
import VolonteerAuth from "./VolonteerAuth";

const backgroundURL =
  "https://storage.picsave.pp.ua/cluster1/origin/0af363a589ffa4f3337e99f6739fb16a.jpg";

const Auth: FC = () => {
  const [personRoles, setPersonRoles] = useState(<ImpoverishedAuth />);

  const updateRadioButton = (value: string) => {
    switch (value) {
      case "VolonteerAuth":
        setPersonRoles(<VolonteerAuth />);
        break;
      case "AdminAuth":
        setPersonRoles(<AdminAuth />);
        break;
      case "ImpoverishedAuth":
        setPersonRoles(<ImpoverishedAuth />);
        break;
      default:
        setPersonRoles(<ImpoverishedAuth />);
    }
  };

  return (
    <div style={{ backgroundImage: `url('${backgroundURL}')` }}>
      <Container
        className="d-flex justify-content-center align-items-center"
        style={{ height: window.innerHeight - 54 }}
      >
        <Card style={{ width: 600 }} className="p-5">
          {personRoles}

          <Row className="d-flex justify-content-between mt-3">
            <RadioGroup name="fruits" onChange={updateRadioButton}>
              <div className="radio-button-background d-inline-block mt-3 m-4">
                <Radio
                  value="ImpoverishedAuth"
                  className="radio-button"
                  defaultChecked
                />{" "}
                Я пользователь
              </div>
              <div className="radio-button-background d-inline-block mt-3 m-4">
                <Radio value="VolonteerAuth" className="radio-button" /> Я
                волонтёр
              </div>
              <div className="radio-button-background d-inline-block mt-3 m-4">
                <Radio value="AdminAuth" className="radio-button" /> Я админ
              </div>
            </RadioGroup>
          </Row>
        </Card>
      </Container>
    </div>
  );
};

export default Auth;
