import Input from '@mui/material/Input';

import './JobInput.css'

function JobInput({ onSubmit }) {
  const PLACEHOLDER = 'Enter job URL';

  const onKeyDown = (event) => {
    if (event.key === 'Enter') {
      onBlur(event);
    }
  }

  const onBlur = (event) => {
    onSubmit(event.target.value)
  }

  return (
    <div className='job-input'>
      <Input
        fullWidth={true}
        autoFocus={true}
        placeholder={PLACEHOLDER}
        type='url'
        onBlur={onBlur}
        onKeyDown={onKeyDown}
      />
    </div>
  );
}

export default JobInput;
