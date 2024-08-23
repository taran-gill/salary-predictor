import { Typography } from '@mui/material';

import './JobIframe.css';

function JobIframe({ url, error }) {


  let content;
  if (!url) {
    content = null;
  } else {
    content = error ? (<Typography variant='body1' className='job-iframe-error'>Invalid URL</Typography>) : (<iframe
        className='job-iframe'
        src={url}
        title="Job posting"
      ></iframe>);
  }

  return content;
}

export default JobIframe;
