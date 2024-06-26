import React from 'react';
import { useParams } from 'react-router-dom';
import { UpdateProps } from '../types/addressUpdate';
import Header from '../components/Header';
import Footer from '../components/Footer';
import AddressForm from '../components/AddressForm';

const Update: React.FC<UpdateProps> = ({ addressArray, setAddressArray }) => {
  const { id } = useParams();
  if (!id) return <p>Id não encontrado!</p>;
  const address = addressArray.find((address) => address.id === parseInt(id));

  return (
    <div className="flex flex-col h-screen justify-between">
      <Header />
      <AddressForm
        address={
          address || { id: 0, name: '', location: '', phone: '', email: '' }
        }
        addressArray={addressArray}
        setAddressArray={setAddressArray}
      />
      <Footer />
    </div>
  );
};

export default Update;
