import React, { useState } from 'react';
import { UpdateProps } from '../types/addressUpdate';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';

const Update: React.FC<UpdateProps> = ({ addressArray, setAddressArray }) => {
  const [form, setForm] = useState({
    name: '',
    location: '',
    phone: '',
    email: '',
  });
  const navigate = useNavigate();

  function handleClick() {
    const newAddress = {
      id: addressArray.length + 1,
      name: form.name,
      location: form.location,
      phone: form.phone,
      email: form.email,
    };

    setAddressArray([...addressArray, newAddress]);
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
          placeholder="Name"
          required
        />
        <input
          type="text"
          value={form.location}
          onChange={(e) => setForm({ ...form, location: e.target.value })}
          placeholder="Location"
          required
        />
        <input
          type="text"
          value={form.phone}
          onChange={(e) => setForm({ ...form, phone: e.target.value })}
          placeholder="Phone"
          required
        />
        <input
          type="text"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          placeholder="Email"
          required
        />
        <button type="submit">Update</button>
      </form>
    </div>
  );
};

export default Update;
