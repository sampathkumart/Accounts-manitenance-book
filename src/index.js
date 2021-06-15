import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import App from './App';
import Header from './components/header';
import PageFooter from './components/pageFooter';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <Header />
    <App />
    <PageFooter />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
