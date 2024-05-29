import * as React from "react";
import { hero, technologies, work, card, cardGroup } from "./Home.module.scss";
import Layout from "../components/Layout/Layout";

const IndexPage = () => {
  const Card = ({ children }) => {
    return <div className={card}>{children}</div>;
  };

  return (
    <Layout>
      <main>
        <div className={hero}>
          <h1>Hi, I'm Sarah 👋🏽 </h1>
          <p>
            I'm a full stack web developer and senior software engineer
            passionate about making technology better for everyone. I'm
            fascinated by automation and the future of work, and I'm always
            playing with the balance of cutting-edge technology and social good.
            Day-to-day, I'm building productivity-boosting web apps, helping
            people find pathways in the tech industry, and teaching people how
            to code.
          </p>
          <div className={cardGroup}>
            <Card>
              <h3>Solution Design</h3>
            </Card>
            <Card>
              <h3>Full Stack Development</h3>
            </Card>
            <Card>
              <h3>Tech Communication</h3>
            </Card>
          </div>
        </div>

        <div className={technologies}>
          <h2>Technologies</h2>
          <div></div>
        </div>
        <div className={work}>
          <h2>Projects & Work</h2>
          <div className={cardGroup}>
            <Card>
              <h3>School of Code</h3>
            </Card>
            <Card>
              <h3>CLG's Intern Program</h3>
            </Card>
            <Card>
              <h3>Capri Theatre</h3>
            </Card>
            <Card>
              <h3>Hacktoberfest</h3>
            </Card>
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default IndexPage;

export const Head = () => <title>Home Page</title>;
