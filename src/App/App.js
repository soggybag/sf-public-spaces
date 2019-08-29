import React from 'react';
import PageHeader from '../PageHeader/PageHeader'
import PageContent from '../PageContent/PageContent'
import PageFooter from '../PageFooter/PageFooter'

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
