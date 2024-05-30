import { useState } from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import Update from './pages/Update';
import Create from './pages/Create';
import { address } from './types/address';

function App() {
  const [addressArray, setAddressArray] = useState<address[]>([
    { id: 1, location: '1234', name: 'John Doe', phone: '555-555-5555', email: 'test@test.com' },
    { id: 2, location: '2345', name: 'Jane Doe', phone: '555-555-5555', email: 'test@test.com' },
  ]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home addressArray={addressArray} />} />
        <Route
          path="/update/:id"
          element={
            <Update
              addressArray={addressArray}
              setAddressArray={setAddressArray}
            />
          }
        />
        <Route
          path="/create"
          element={
            <Create
              addressArray={addressArray}
              setAddressArray={setAddressArray}
            />
          }
        />
        <Route path="*" element={<h1>Not Found</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
