import React from 'react';
import { Link } from 'react-router-dom';
import { address } from '../types/address';

interface HomeProps {
  addressArray: address[];
}

const Home: React.FC<HomeProps> = ({ addressArray }) => {
  return (
    <div>
      <h1>Home</h1>
      <ul>
        {addressArray.map((address) => (
          <li key={address.id}>
            <h2>{address.name}</h2>
            <p>{address.location}</p>
            <p>{address.phone}</p>
            <p>{address.email}</p>
            <Link to={`/update/${address.id}`}>Update</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
