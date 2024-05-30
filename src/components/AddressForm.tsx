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
      <div className="space-y-12 mt-6 border-t border-gray-100 grid justify-items-center bg-slate-100 text-center">
        <div className="border-b border-gray-900/10 pb-12 bg-gray">
          <h2 className="mt-10 text-base font-semibold leading-7 text-gray-900">
            {address.id ? 'Update' : 'Create'} Address
          </h2>
          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8">
            <div className="sm:col-span-4">
              <input
                className="text-center w-full border-2 border-gray-900/10 rounded-md p-2"
                type="text"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                placeholder={address?.name || 'Name'}
              />
            </div>
            <div className="sm:col-span-4">
              <input
                className="text-center w-full border-2 border-gray-900/10 rounded-md p-2 align-center"
                type="text"
                value={form.location}
                onChange={(e) => setForm({ ...form, location: e.target.value })}
                placeholder={address?.location || 'Location'}
              />
            </div>
            <div className="sm:col-span-4">
              <input
                className="text-center w-full border-2 border-gray-900/10 rounded-md p-2 align-center"
                type="text"
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                placeholder={address?.phone || 'Phone'}
              />
            </div>
            <div className="sm:col-span-4">
              <input
                className="text-center w-full border-2 border-gray-900/10 rounded-md p-2 align-center"
                type="text"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                placeholder={address?.email || 'Email'}
              />
            </div>
            <div className="sm:col-span-4">
              <button
                type="submit"
                className="rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
              >
                {address.id ? 'Update' : 'Create'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default AddressForm;
