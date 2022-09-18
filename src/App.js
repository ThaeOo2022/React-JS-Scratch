import {faker} from '@faker-js/faker';

function App() {
  return (
    <div >
     <div className=" ui container comments">
      <div className="comment">
        <a href="/" className="avatar">
          <img alt="avatar" src={faker.image.avatar()}/>
        </a>
        <div className="content">
          <a href="/" className="author">
            Thae
          </a>
          <div className="metadata">
            <span className="date">Today is 17 Sep 2022.</span>
          </div>
          <div className="text">Nice comment</div>
        </div>
      </div>
     </div>
    
     </div>
  );
}

export default App;
