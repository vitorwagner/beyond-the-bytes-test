import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <nav className="flex items-center justify-between p-6 lg:px-8">
        <h1 className="text-2xl font-bold">Mars Book</h1>        
        <div className="lg:flex lg:gap-x-12">
          <span className="text-sm font-semibold text-gray-900 p-2">
            <Link to="/">Home</Link>
          </span>
          <span className="text-sm font-semibold text-gray-900 p-2">
            <Link to="/create">Add Address</Link>
          </span>
        </div>
        <span className="text-xs font-semibold text-gray-400 p-2">Developed for Beyond the Bytes</span>
      </nav>
    </header>
  );
}

export default Header;