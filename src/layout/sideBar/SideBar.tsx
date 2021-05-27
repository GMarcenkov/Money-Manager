import React, {useCallback, useState} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faChevronRight, faBook, faChartBar, faFileDownload, faChevronLeft} from '@fortawesome/free-solid-svg-icons';
import {Link, useLocation} from 'react-router-dom';
import classes from './SideBarStyle.module.css';
import languageWords from '../../helpers/LanguageConsts';
import {TransactionPage} from '../../models/Transaction';

const SideBar = (): JSX.Element => {
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);
  const closeSideBar = useCallback(() => {
    setIsSideBarOpen(!isSideBarOpen);
  }, [isSideBarOpen]);

  const location = useLocation();

  return (
    <nav className={isSideBarOpen ? classes.wrapper : classes.wrapper_back}>
      <div className={classes.sidebar_header}>{isSideBarOpen ? 'Budget Tracker' : 'BT'}</div>
      <div className={isSideBarOpen ? classes.close_button_open_sidebar : classes.close_button}>
        <FontAwesomeIcon icon={isSideBarOpen ? faChevronLeft : faChevronRight} onClick={closeSideBar} />
      </div>

      {isSideBarOpen ? (
        <ul className={classes.content}>
          <Link
            to="/transaction/monthly"
            className={location.pathname.includes(TransactionPage.TRANSACTION) ? classes.title_select : classes.title}
          >
            <FontAwesomeIcon icon={faBook} /> {languageWords.TRANSACTIONS}
          </Link>

          <Link
            to="/stats/monthly"
            className={location.pathname.includes(TransactionPage.STATS) ? classes.title_select : classes.title}
          >
            <FontAwesomeIcon icon={faChartBar} /> {languageWords.STATS}
          </Link>

          <Link
            to="/export"
            className={location.pathname.includes(TransactionPage.EXPORT) ? classes.title_select : classes.title}
          >
            <FontAwesomeIcon icon={faFileDownload} /> {languageWords.EXPORT}
          </Link>
        </ul>
      ) : (
        <ul className={classes.content}>
          <Link
            to="/transaction/monthly"
            className={
              location.pathname.includes(TransactionPage.TRANSACTION)
                ? classes.select_menu_icon
                : classes.menu_icon_container
            }
          >
            <FontAwesomeIcon icon={faBook} />
          </Link>{' '}
          <Link
            to="/stats/monthly"
            className={
              location.pathname.includes(TransactionPage.STATS) ? classes.select_menu_icon : classes.menu_icon_container
            }
          >
            <FontAwesomeIcon icon={faChartBar} />
          </Link>{' '}
          <Link
            to="/export"
            className={
              location.pathname.includes(TransactionPage.EXPORT)
                ? classes.select_menu_icon
                : classes.menu_icon_container
            }
          >
            <FontAwesomeIcon icon={faFileDownload} />
          </Link>{' '}
        </ul>
      )}
    </nav>
  );
};

export default SideBar;
