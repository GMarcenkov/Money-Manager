import React from 'react';
import NavBar from '../../layout/header/Header';
import YearlyContainer from '../../modules/stats/yearlyContainer/YearlyContainer';

const YearlyPage = (): JSX.Element => {
  return (
    <>
      <NavBar />
      <YearlyContainer />
    </>
  );
};

export default YearlyPage;
