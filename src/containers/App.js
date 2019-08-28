import React from 'react';
import {Switch, Route} from 'react-router-dom';

// 화면 layout 컨테이너 컴포넌트 불러오기
import { TopContainer, SearchContainer, NaviContainer, FooterContainer } from './layout';
import { SalesContainer } from './body';


// import styles from './App.css';
// import classNames from 'classnames/bind';
// const cx = classNames.bind(styles);

const App = () => {
  return (
      <div className="wrapper">
        <TopContainer />
        <SearchContainer />
        <NaviContainer />
        <Switch>
            <Route exact path="/" component={SalesContainer} />
        </Switch>
        <FooterContainer />
    </div>
  );
};

export default App;