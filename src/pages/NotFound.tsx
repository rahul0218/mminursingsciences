import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="container mx-auto px-4 py-24 text-center min-h-[60vh] flex flex-col justify-center items-center">
      <h1 className="text-6xl font-bold text-primary">404</h1>
      <h2 className="text-3xl font-bold mt-4">Page Not Found</h2>
      <p className="mt-4 text-slate-gray">Sorry, the page you are looking for does not exist.</p>
      <Link to="/" className="mt-8 inline-block bg-primary text-white text-base font-bold py-3 px-6 rounded-lg hover:bg-opacity-90 transition-colors">
        Go to Homepage
      </Link>
    </div>
  );
};

export default NotFound;
