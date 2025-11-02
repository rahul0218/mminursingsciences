import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

const Layout = () => {
  return (
    <div className="bg-white font-sans">
      <Header />
      <main className="pt-16"> {/* Add padding-top to avoid content being hidden by sticky header */}
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
