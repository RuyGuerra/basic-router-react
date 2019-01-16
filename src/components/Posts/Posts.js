import React from 'react';

import styles from './Posts.module.scss';

const { container } = styles;

const Posts = props => {
  return (
    <div className={container}>
      <h1>Posts</h1>
    </div>
  );
};

export default Posts;
