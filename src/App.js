import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AllTrainsPage from './pages/AllTrainsPage';
import SingleTrainPage from './pages/SingleTrainPage';
import { registerCompany, authenticate, getTrainData } from './services/api';

const App = () => {
  const [accessToken, setAccessToken] = useState('');
  const [clientID, setClientID] = useState('');
  const [clientSecret, setClientSecret] = useState('');
  const [trains, setTrains] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    registerAndAuthenticateCompany();
  }, []);

  const registerAndAuthenticateCompany = async () => {
    try {
      // const registerData = {
      //   companyName: 'Train Central',
      //   ownerName: 'Danush',
      //   rollNo: '20881A05H5',
      //   ownerEmail: 'VALEDANUSH20CSE@VARDHAMAN.ORG',
      //   accessCode: 'LRmsdT',
      // };

      // const { clientID, clientSecret } = await registerCompany(registerData);
      // setClientID(clientID);
      // setClientSecret(clientSecret);

      const authData = {
        companyName: 'Train Central',
        clientID: '74501c95-1518-4616-9723-75e1b3eb3546',
        clientSecret: 'stQzxPbmXGYPZRoC',
        ownerName: 'Danush',
        ownerEmail: 'VALEDANUSH20CSE@VARDHAMAN.ORG',
        rollNo: '20881A05H5',
      };

      const token = await authenticate(authData);
      console.log(token);
      setAccessToken(token);
      

      const trainData = await getTrainData(token);
      console.log(trainData);
      setTrains(trainData);
      setLoading(false);
    } catch (error) {
      console.error('Error registering, authenticating, or fetching train data:', error);
    }
  };

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={<AllTrainsPage accessToken={accessToken} trains={trains} loading={loading} />}
        />
        {/* <Route
          path="/trains/:id"
          element={<SingleTrainPage accessToken={accessToken} trains={trains} loading={loading} />}
        /> */}
      </Routes>
    </Router>
  );
};
export default App;



