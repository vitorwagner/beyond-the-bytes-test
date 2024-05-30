import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { UpdateProps } from '../types/addressUpdate';
import Header from '../components/Header';

const Update: React.FC<UpdateProps> = ({ addressArray, setAddressArray }) => {
  const { id } = useParams();
  const [form, setForm] = useState({
    name: '',
    location: '',
    phone: '',
    email: '',
  });
  const navigate = useNavigate();
  if (!id) return <p>Id não encontrado!</p>;
  const address = addressArray.find((address) => address.id === parseInt(id));

  function handleClick() {
    if (!id) return;

    const newAddressArray = addressArray.map((address) => {
      if (address.id === parseInt(id)) {
        return {
          ...address,
          name: form.name || address.name,
          location: form.location || address.location,
          phone: form.phone || address.phone,
          email: form.email || address.email,
        };
      }
      return address;
    });

    setAddressArray(newAddressArray);
    navigate('/');
  }

  return (
    <div>
      <Header />
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleClick();
        }}
      >
        <input
          type="text"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          placeholder={address?.name}
        />
        <input
          type="text"
          value={form.location}
          onChange={(e) => setForm({ ...form, location: e.target.value })}
          placeholder={address?.location}
        />
        <input
          type="text"
          value={form.phone}
          onChange={(e) => setForm({ ...form, phone: e.target.value })}
          placeholder={address?.phone}
        />
        <input
          type="text"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          placeholder={address?.email}
        />
        <button type="submit">Update</button>
      </form>
    </div>
  );
};

export default Update;
