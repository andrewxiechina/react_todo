import React from 'react';
import {Link} from 'react-router';

// Since this component is simple and static, there's no parent container for it.
const Vocabulary = () => {
  return (
    <div className="page">
      <div className="page-header">
        <h1>vocabulary</h1>
        <div>
          <span className="muted">英 [vəˈkæbjələri]</span>
          <span className="muted">美 [vəˈkæbjəleri]</span>
        </div>
        <div>
          <span className="muted">考研  /  CET6  /  CET4  /  IELTS</span>
        </div>
      </div>
      <div className="page-content">

        <div>n.（某一语言的）词汇； （尤指外语教科书中附有释义的）词汇表；</div>
      </div>
    </div>
  );
};

export default Vocabulary;
