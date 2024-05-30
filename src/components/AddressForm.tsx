import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { address } from '../types/address';

interface FormProps {
  address: address;
  addressArray: address[];
  setAddressArray: React.Dispatch<React.SetStateAction<address[]>>;
}

const AddressForm: React.FC<FormProps> = ({
  address,
  addressArray,
  setAddressArray,
}) => {
  const [form, setForm] = useState({
    name: '',
    location: '',
    phone: '',
    email: '',
  });
  const navigate = useNavigate();

  function handleClickCreate() {
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

  const { id } = useParams();
  function handleClickUpdate() {
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
    <form
      onSubmit={(e) => {
        e.preventDefault();
        address.id ? handleClickUpdate() : handleClickCreate();
      }}
    >
      <input
        type="text"
        value={form.name}
        onChange={(e) => setForm({ ...form, name: e.target.value })}
        placeholder={address?.name || 'Name'}
      />
      <input
        type="text"
        value={form.location}
        onChange={(e) => setForm({ ...form, location: e.target.value })}
        placeholder={address?.location || 'Location'}
      />
      <input
        type="text"
        value={form.phone}
        onChange={(e) => setForm({ ...form, phone: e.target.value })}
        placeholder={address?.phone || 'Phone'}
      />
      <input
        type="text"
        value={form.email}
        onChange={(e) => setForm({ ...form, email: e.target.value })}
        placeholder={address?.email || 'Email'}
      />
      <button type="submit">{address.id ? 'Update' : 'Create'}</button>
    </form>
  );
};

export default AddressForm;
