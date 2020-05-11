import React from "react";
import {
  Card,
  CardText,
  CardTitle,
  CardBody,
  Row,
  Col,
  Button
} from "reactstrap";
import { random, lorem } from "faker";
import { FaCamera, FaHeart, FaUserAlt } from "react-icons/fa";
const MyCard = ({ details }) => {
  return (
    <Row>
      <Col md={6} className="offset-md-3">
        <Card className="text-center">
          <CardBody>
            <img
              src={details.picture?.large}
              height="300"
              width="150"
              alt="pict"
              className="rounded-circle img-thumbnail border-danger"
            />
            <CardTitle>
              <h1>
                <span>{details.name?.title}</span>
                <span> {details.name?.first}</span>
                <span>{details.name?.last}</span>
              </h1>
            </CardTitle>
            <CardText>
              <h6>{details.email}</h6>
              <p>{lorem.sentences(3)}</p>
              <p>
                <Row>
                  <Col>
                    <FaCamera />
                    <br />
                    {random.number()}
                  </Col>
                  <Col>
                    <FaHeart />
                    <br />
                    {random.number()}
                  </Col>
                  <Col>
                    <FaUserAlt />
                    <br />
                    {random.number()}
                  </Col>
                </Row>
              </p>
              <Button className="btn">Follow</Button>
            </CardText>
          </CardBody>
        </Card>
      </Col>
    </Row>
  );
};

export default MyCard;
