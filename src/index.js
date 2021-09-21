import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {             // kita tambahkan baris ke 4 sampe 10 untuk menguhubungkan client dengan react. dgn pake apollo provider ini
  ApolloProvider,
} from "@apollo/client";
import App from './App';
import reportWebVitals from './reportWebVitals';
import client from './apollo-client';



ReactDOM.render(
 <ApolloProvider client={client}>
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  </ApolloProvider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();