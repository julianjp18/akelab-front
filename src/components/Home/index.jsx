import React from "react";
import { Row, Col } from "antd";
import './home.scss';

const Movies = () => {
  
  return (
    <Row>
      <Col xs={24}>
        <h1>Akelab test</h1>
        <p>Code created by: <b>@julianjp18</b> on GitHub</p>
        <p>Name: <b> Julian Perez</b> </p>
        <p><b>missing:</b></p>
          <ul>
            <li>Some styles in all views, but the logic is correctly.</li>
            <li>In the movies section, the search box doesn't work, I don't implemented the code for that part</li>
          </ul>
        <p><b>Points:</b></p>
        <ul>
          <li>I use Sass, react-router-dom and fetch for the API call.</li>
          <li>The server side is made with NodeJS</li>
          <li>Use react Hooks</li>
          <li>Order project in folders: components, helpers, resources, utils....</li>
        </ul>
      </Col>
    </Row>
  );
};

export default Movies;
