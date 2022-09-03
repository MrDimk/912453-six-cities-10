import { Link } from 'react-router-dom';

function Message404() {
  return (
    <>
      <h1>Ups... looks like 404 error! (we are working on the design of this page)</h1>
      <Link to='/'>Click here to go on homepage</Link>
    </>
  );
}

export default Message404;
