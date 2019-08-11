import * as React from 'react';
import GithubCorner from 'react-github-corner';
import styles from './Demo.module.scss';

function Demo(props: any) {
  return (
    <div className={styles.root}>
      <h1>Demo</h1>
      <GithubCorner
        href="https://bluewings.github.io/react-genie-effect"
        bannerColor="#007bff"
      />
    </div>
  );
}

export default Demo;
