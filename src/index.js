import React from 'react';
import ReactDOM from 'react-dom/client';
// import { App } from 'components/App/App';
import { Profile } from 'components/Profile/Profile';
import { Statistics } from 'components/Statistics/Statistics';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    <Profile />
    <Statistics />
  </React.StrictMode>
);
