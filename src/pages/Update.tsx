import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
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
  if (!id) return <p>Id não encontrado!</p>;
  const address = addressArray.find((address) => address.id === parseInt(id));

  function handleUpdate(e: React.FormEvent) {
    e.preventDefault();
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
    }
    );
    
    setAddressArray(newAddressArray);
  }

  return (
    <div>
      <Header />
      <form>
        <input
          type="text"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          placeholder={address?.name}
          defaultValue={address?.name}
        />
        <input
          type="text"
          value={form.location}
          onChange={(e) => setForm({ ...form, location: e.target.value })}
          placeholder={address?.location}
          defaultValue={address?.location}
        />
        <input
          type="text"
          value={form.phone}
          onChange={(e) => setForm({ ...form, phone: e.target.value })}
          placeholder={address?.phone}
          defaultValue={address?.phone}
        />
        <input
          type="text"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          placeholder={address?.email}
          defaultValue={address?.email}
        />
        <button
          onClick={(e) => {
            handleUpdate(e);
          }}
        >
          Update
        </button>
      </form>
    </div>
  );
};

export default Update;
