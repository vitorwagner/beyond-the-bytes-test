import React from "react";

interface address {
  id: number;
  name: string;
  phone: string;
  email: string;
}

const AddressForm: React.FC<address> = (
  address
) => {
  return (
    <div>
      <h1>AddressForm</h1>
      <h2>{address.name}</h2>
      <p>{address.id}</p>
      <p>{address.phone}</p>
      <p>{address.email}</p>
    </div>
  );
}

export default AddressForm;

