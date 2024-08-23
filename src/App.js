import { useEffect, useState } from 'react';

import GeminiClient from './gemini/GeminiClient';

import JobInput from './JobInput/JobInput';
import JobIframe from './JobIframe/JobIframe';

import './App.css';
import PredictedSalary from './PredictedSalary/PredictedSalary';
import { Typography } from '@mui/material';

const geminiClient = new GeminiClient(process.env.REACT_APP_GEMINI_KEY);

function App() {
  const [jobUrl, setJobUrl] = useState('');
  const [predictedSalary, setPredictedSalary] = useState(null);
  const [hasUrlError, setHasUrlError] = useState(true);

  // Check if valid URL with a dummy request
  useEffect(() => {
    if (jobUrl !== '') {
      (async () => {
        try {
          if (!jobUrl.startsWith('https://')) {
            throw new Error();
          }

          await fetch(jobUrl, { mode: 'no-cors' });
          setHasUrlError(false);
        } catch {
          setHasUrlError(true);
        }
      })();
    }
  }, [jobUrl])

  useEffect(() => {
    if (jobUrl !== '' && !hasUrlError) {
      (async () => {
        const salary = await geminiClient.predictSalary(
          'CAD',
          jobUrl
        );
  
        setPredictedSalary(salary);
      })();
    }
  }, [jobUrl, hasUrlError]);

  

  return (
    <div className="App">
      <Typography variant='h1'>
        Salary Predictor
      </Typography>

      <JobInput onSubmit={setJobUrl} setHasUrlError={setHasUrlError} />

      {predictedSalary !== null && <PredictedSalary currency='CAD' salary={predictedSalary} />}
      {jobUrl !== '' && <JobIframe url={jobUrl} error={hasUrlError}/>}
    </div>
  );
}

export default App;
