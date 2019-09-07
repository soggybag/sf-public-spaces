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
        
        <Route path="/" exact render={() => <PageContent />} />
        <Route path="/details" component={PublicSpaceViewDetails} />
        <Route path="/a" render={() => <Content title="A"/>} />
        <Route path="/b" render={() => <Content title="B"/>} />
        <Route path="/c" render={() => <Content title="C"/>} />

        <PageFooter />
      </div>
    </Router>
  );
}

export default App;
