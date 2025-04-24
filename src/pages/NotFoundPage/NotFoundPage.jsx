import { Link } from 'react-router-dom';

function NotFoundPage() {
  return (
    <div>
      <h1>Page Not Found</h1>
      <p>
        Return to <Link to="/">Home</Link>
      </p>
    </div>
  );
}

export default NotFoundPage;