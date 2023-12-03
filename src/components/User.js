import { useState, useEffect } from "react";

const User = () => {
  const [infoData, setInfoData] = useState([]);
  useEffect(() => {
    getInformation();
  }, []);

  const getInformation = async () => {
    const data = await fetch(
      "https://corsproxy.io/?https://api.github.com/users/Niharika-pat"
    );
    const json = await data.json();
    setInfoData(json);
    console.log(json);
  };

  return (
    <div className="user-card">
      <h3>Name - {infoData.name}</h3>
      <h3>
        {" "}
        <img src={infoData.avatar_url} />
      </h3>
    </div>
  );
};

export default User;
