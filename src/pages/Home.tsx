import React from 'react';
import Header from '../components/Header';
import { Link } from 'react-router-dom';
import { UpdateProps } from '../types/addressUpdate';

const Home: React.FC<UpdateProps> = ({ addressArray, setAddressArray }) => {
  const deleteAddress = (id: number) => {
    setAddressArray(addressArray.filter((address) => address.id !== id));
  }

  return (
    <div>
      <Header />
      <h1 className="text-3xl font-bold underline">Home</h1>

      <ul>
        {addressArray.map((address) => (
          <li key={address.id}>
            <h2>{address.name}</h2>
            <p>{address.location}</p>
            <p>{address.phone}</p>
            <p>{address.email}</p>
            <Link to={`/update/${address.id}`}>Update</Link>
            <button onClick={() => deleteAddress(address.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
