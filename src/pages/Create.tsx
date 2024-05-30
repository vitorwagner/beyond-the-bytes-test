import React from 'react';
import { UpdateProps } from '../types/addressUpdate';
import Header from '../components/Header';
import AddressForm from '../components/AddressForm';
import Footer from '../components/Footer';

const Update: React.FC<UpdateProps> = ({ addressArray, setAddressArray }) => {
  return (
    <div>
      <Header />
      <AddressForm
        address={{
          id: 0,
          name: '',
          location: '',
          phone: '',
          email: '',
        }}
        addressArray={addressArray}
        setAddressArray={setAddressArray}
      />
      <Footer />
    </div>
  );
};

export default Update;
