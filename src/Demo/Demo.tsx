import * as React from 'react';
import GithubCorner from 'react-github-corner';
import styles from './Demo.module.scss';
import sampleImg from './yes_we_code.jpeg';

function Demo(props: any) {
  return (
    <div className={styles.root}>
      <div className="container">
        <div className="row">
          <div className="col">
            <h1>react-genie-effect</h1>
            <img src={sampleImg} width="224" />
          </div>
        </div>
      </div>
      <GithubCorner href="https://bluewings.github.io/react-genie-effect" />
    </div>
  );
}

export default Demo;
