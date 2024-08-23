import { useState } from 'react';

import JobInput from './job-input/JobInput';
import JobIframe from './job-iframe/JobIframe';

import './App.css';

function App() {
  const [jobUrl, setJobUrl] = useState();

  return (
    <div className="App">
      <h1>
        Job Application Enhancer
      </h1>

      <JobInput onSubmit={setJobUrl} />
      <JobIframe url={jobUrl} />
    </div>
  );
}

export default App;
