import { Dispatch, SetStateAction } from 'react';
import { address } from './address';

export interface UpdateProps {
  addressArray: address[];
  setAddressArray: Dispatch<SetStateAction<address[]>>;
}