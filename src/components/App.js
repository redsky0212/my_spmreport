import React from 'react';
import {Switch, Route} from 'react-router-dom';

// 화면 layout 컨테이너 컴포넌트 불러오기
import { TopContainer, SearchContainer, FooterContainer } from '../containers/layout';
// router에 의해서 불러온 화면 컨테이너 컴포넌트 불러오기.
import { SalesContainer, MarketContainer } from '../containers/body';
// Layout 컴포넌트 불러오기.
import {LayoutWrapper, Navi} from './layout';  


const App = () => {
  return (
    <LayoutWrapper>
        <TopContainer />
        <SearchContainer />
        <Navi />
        <Switch>
            <Route exact path="/" component={SalesContainer} />
            <Route exact path="/market" component={MarketContainer} />
        </Switch>
        <FooterContainer />
    </LayoutWrapper>
  );
};

export default App;