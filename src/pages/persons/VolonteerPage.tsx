import { FC } from "react";

const backgroundURL = "https://gagadget.com/media/post_big/36.jpg";

const VolonteerPage: FC = () => {
  const wrapperStyle = { backgroundImage: `url('${backgroundURL}')` };
  const titleStyle = { height: window.innerHeight - 40 };

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
