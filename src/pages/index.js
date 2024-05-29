import * as React from "react";
import styles from "./Home.module.scss";

const IndexPage = () => {
  return (
    <main>
      <div className={styles.hero}></div>
    </main>
  );
};

export default IndexPage;

export const Head = () => <title>Home Page</title>;
