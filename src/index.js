import React from 'react';
import ReactDOM from 'react-dom/client';
import CommentDetail from './CommentDetail';
import { faker } from '@faker-js/faker';
import ApproveCard from './ApproveCard';


const App = () => {
  return (
    <div >
      <div className=" ui container comments">
        <ApproveCard>
          <div>
            <h5>Warning!</h5>
            Are you sure for this comment?
          </div>
        </ApproveCard>
        <ApproveCard>
          Are you sure?
        </ApproveCard>

        <ApproveCard>
          <CommentDetail author="Thae" timeAgo="Today at 7 am" pimg={faker.image.avatar()} />
        </ApproveCard>
        <ApproveCard>
          <CommentDetail author="Oo" timeAgo="Today at 5 am" pimg={faker.image.avatar()} />
        </ApproveCard>

        <ApproveCard>
          <CommentDetail author="Nge" timeAgo="Today at 9 am" pimg={faker.image.avatar()} />
        </ApproveCard>

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
