import React from 'react';
import './App.css';
import CommentsList from "./CommentsListContainer";
import AddCommentWidget from "./AddCommentWidgetContainer";
import DevTools from './DevTools';

const App = () => {
  return (
      <div className="App">
          <CommentsList/>
          <AddCommentWidget/>
          <DevTools />
      </div>
  );
};

export default App;
