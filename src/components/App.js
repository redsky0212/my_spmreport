import React from 'react';
import {Switch, Route} from 'react-router-dom';

// 화면 layout 컨테이너 컴포넌트 불러오기
import { TopContainer, SearchContainer, NaviContainer, FooterContainer } from '../containers/layout';
// router에 의해서 불러온 화면 컨테이너 컴포넌트 불러오기.
import { SalesContainer } from '../containers/body';
// BodyWrapper 컴포넌트 불러오기.
import BodyWrapper from './BodyWrapper';  


const App = () => {
  return (
    <BodyWrapper>
        <TopContainer />
        <SearchContainer />
        <NaviContainer />
        <Switch>
            <Route exact path="/" component={SalesContainer} />
        </Switch>
        <FooterContainer />
    </BodyWrapper>
  );
};

export default App;