import React from 'react';
import './App.css';
import CommentsList from "./CommentsListContainer";
// import AddCommentWidget from "./AddCommentWidget";

const App = () => {
  return (
      <div className="App">
          <CommentsList/>
          {/*<AddCommentWidget/>*/}
      </div>
  );
};

export default App;
