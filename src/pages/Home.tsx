import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import { UpdateProps } from '../types/addressUpdate';

const Home: React.FC<UpdateProps> = ({ addressArray, setAddressArray }) => {
  const deleteAddress = (id: number) => {
    setAddressArray(addressArray.filter((address) => address.id !== id));
  };

  return (
    <div>
      <Header />
      <div className="mt-6 border-t border-gray-100 grid justify-items-center bg-slate-100">
        {addressArray.map((address) => (
          <dl className="divide-y divide-gray-100 border-2 rounded-md m-2 p-4 bg-white" key={address.id}>
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm font-medium leading-6 text-gray-900">
                Name
              </dt>
              <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                {address.name}
              </dd>
            </div>
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm font-medium leading-6 text-gray-900">
                Location
              </dt>
              <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                {address.location}
              </dd>
            </div>
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm font-medium leading-6 text-gray-900">
                Phone
              </dt>
              <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                {address.phone}
              </dd>
            </div>
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm font-medium leading-6 text-gray-900">
                Email
              </dt>
              <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                {address.email}
              </dd>
            </div>
            <img src="https://images.pexels.com/photos/269077/pexels-photo-269077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Building image"
            className='w-full h-48 object-cover object-center rounded-md mt-4'
            />
            <div className="flex justify-between p-6 lg:px-8">
              <button
                type="button"
                className="rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
              >
                <Link to={`/update/${address.id}`}>Update</Link>
              </button>
              <button
                onClick={() => deleteAddress(address.id)}
                type="button"
                className="rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
              >
                Delete
              </button>
            </div>
          </dl>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default Home;
