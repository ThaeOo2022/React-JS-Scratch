import React from 'react';
import ReactDOM from 'react-dom/client';
import CommentDetail from './CommentDetail';
import {faker} from '@faker-js/faker';


const App = () => {
  return (
    <div >
      <div className=" ui container comments">
        <CommentDetail author="Thae" timeAgo="Today at 7 am" pimg={faker.image.avatar()}/>
        <CommentDetail author="Oo" timeAgo="Today at 5 am" pimg={faker.image.avatar()}/>
        <CommentDetail author="Nge" timeAgo="Today at 9 am" pimg={faker.image.avatar()}/>
      </div>

    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
