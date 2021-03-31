import React from "react";
import NavBar from "../../layout/header/Header";
import DailyContainer from "../../modules/stats/dailyContainer/DailyContainer";

const DailyPage = () => {
  return (
    <div>
      <NavBar />
      <DailyContainer />
    </div>
  );
};

export default DailyPage;