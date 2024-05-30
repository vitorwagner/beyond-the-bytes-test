import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div>
      <h1>Address Book</h1>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;