import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom'
import PageHeader from '../PageHeader/PageHeader'
import PageContent from '../PageContent/PageContent'
import PageFooter from '../PageFooter/PageFooter'
import PublicSpaceViewDetails from '../PageContent/PublicSpaceView/PublicSpaceViewDetails'

import Content from './Content'

import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <PageHeader />
        
        <Route exact path="/" component={PageContent} />
        <Route path="/details" component={PublicSpaceViewDetails} />

        <Route path="/a" render={() => {
          return <Content title="A"/>
        }} />
        <Route path="/b/a" render={() => <Content title="B"/>} />
        <Route path="/d" render={() => <Content title="DDDDDDDD"/>} />

        <Route path="/dashboard" render={() => <Content title="Dashboard"/>} />

        <PageFooter />
      </div>
    </Router>
  );
}

export default App;
