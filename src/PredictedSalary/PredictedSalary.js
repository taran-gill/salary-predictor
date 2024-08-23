import Typography from '@mui/material/Typography';

import './PredictedSalary.css';

function PredictedSalary({ currency, salary }) {
  return (
    <div className='predicted-salary-container'>
      <Typography variant='span' className='predicted-salary'>
        Expected salary: ${salary} {currency}
      </Typography>
    </div>
  )
}

export default PredictedSalary;
