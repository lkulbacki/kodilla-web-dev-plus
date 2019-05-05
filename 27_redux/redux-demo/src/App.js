import React from 'react';
import './App.css';
import CommentsList from "./CommentsListContainer";
import AddCommentWidget from "./AddCommentWidgetContainer";

const App = () => {
  return (
      <div className="App">
          <CommentsList/>
          <AddCommentWidget/>
      </div>
  );
};

export default App;
