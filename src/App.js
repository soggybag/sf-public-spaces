import React from 'react';
import PageHeader from './PageHeader'
import PageContent from './PageContent'
import PageFooter from './PageFooter'

import './App.css';

function App() {
  return (
    <div className="App">
      <PageHeader />
      <PageContent />
      <PageFooter />
    </div>
  );
}

export default App;
