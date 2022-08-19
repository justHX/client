import { FC } from "react";

const backgroundURL = "https://img3.goodfon.ru/original/1920x1080/e/6e/telegram-free-telegram-is-a.jpg";

const VolonteerPage: FC = () => {
  const wrapperStyle = { backgroundImage: `url('${backgroundURL}')` };
  const titleStyle = { height: window.innerHeight - 40 };
  https://www.goodfon.ru/download/telegram-free-telegram-is-a/1920x1080/
  return (
    <div
      className="container-fluid d-flex h-100 justify-content-center align-items-center p-0"
      style={wrapperStyle}
    >
      <h1 className="text-center" style={titleStyle}>
        <br />
        Перейдите в Telegram для дальнейших действий
      </h1>
    </div>
  );
};

export default VolonteerPage;
