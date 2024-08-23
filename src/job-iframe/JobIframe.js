import './JobIframe.css';

function JobIframe({ url }) {
  return (
    <iframe
      className='job-iframe'
      src={url}
      title="Job posting"
    ></iframe>
  );
}

export default JobIframe;
