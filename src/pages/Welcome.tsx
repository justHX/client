import { FC } from "react";

const backgroundURL =
  "https://storage.picsave.pp.ua/cluster1/origin/0af363a589ffa4f3337e99f6739fb16a.jpg";

const Welcome: FC = () => {
  return (
    <div
      className="container-fluid d-flex h-100 justify-content-center align-items-center p-0"
      style={{ backgroundImage: `url('${backgroundURL}')` }}
    >
      <h1 style={{ height: window.innerHeight - 40 }}> </h1>
    </div>
  );
};

export default Welcome;
