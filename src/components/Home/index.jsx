import React from "react";
import { Row, Col } from "antd";
import './home.scss';

const Home = () => (
  <Row>
    <Col xs={24}>
      <h1>Akelab Test</h1>
      <p>Code created by <b><a href="https://github.com/julianjp18">@julianjp18</a></b> on <b>GitHub</b></p>
      <p>Developer name: <b> Julian Perez</b> </p>
    </Col>
    <Col className="points-col" xs={12}>
      <p><b>Points:</b></p>
      <ul>
        <li>Access to <a href="https://github.com/julianjp18/akelab-front">the repo</a></li>
        <li>Use Sass, react-router-dom and fetch for the API call.</li>
        <li>The server side is made with NodeJS. <a href="https://github.com/julianjp18/akelab-server">Repo</a></li>
        <li>Use react Hooks</li>
        <li>Use <a href="https://ant.design/">antdesign</a></li>
        <li>Order project in folders: components, helpers, resources, utils....</li>
      </ul>
    </Col>
    <Col xs={12}>
      <p><strong>Extra info of me</strong></p>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/FpksRDzTNvc" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </Col>
  </Row>
);

export default Home;
