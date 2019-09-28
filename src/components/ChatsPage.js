import React from "react";
import {Link} from "react-router-dom";
import "./ChatsPage.css";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
  Container,
  Row,
  Col,
  Badge,
  Jumbotron
} from "reactstrap";

function ChatsPage() {
  return (
    <Container>
      <br></br>
      <Row>
        <Col xs="6" sm="4">
          <Card>
            <CardImg top width="100%" src="https://www.newbirth.org/wp-content/uploads/2018/06/Purple-Blue-gradient.jpg" alt="" />
            <CardBody>
              <CardTitle>Chat 1<span className="span">[ 0/6 ]</span></CardTitle>
              <h5>
                <span>
                  <Badge color="info">General</Badge>
                </span>
              </h5>

              <Link to='/video'>Enter</Link>
            </CardBody>
          </Card>
        </Col>
        <Col xs="6" sm="4">
          <Card>
            <CardImg top width="100%" src="https://www.newbirth.org/wp-content/uploads/2018/06/Purple-Blue-gradient.jpg" alt="" />
            <CardBody>
              <CardTitle>Chat 2<span className="span">[ 2/6 ]</span></CardTitle>
              <h5>
                <span>
                  <Badge color="danger">Chinese Credit System</Badge>
                </span>
              </h5>
              <Button href="/video">Enter</Button>
            </CardBody>
          </Card>
        </Col>
        <Col sm="4">
          <Card>
            <CardImg top width="100%" src="https://www.newbirth.org/wp-content/uploads/2018/06/Purple-Blue-gradient.jpg" alt="" />
            <CardBody>
              <CardTitle>Chat 3<span className="span">[ 3/6 ]</span></CardTitle>
              <h5>
                <span>
                  <Badge color="danger">Hong Kong Protests</Badge>
                </span>{" "}
                <span>
                  <Badge color="info">Chinese Food</Badge>
                </span>
              </h5>
              <Button href="/video">Enter</Button>
            </CardBody>
          </Card>
        </Col>
      </Row>
      <br></br>
      <Row>
        <Col xs="6" sm="4">
          <Card>
            <CardImg top width="100%" src="https://www.newbirth.org/wp-content/uploads/2018/06/Purple-Blue-gradient.jpg" alt="" />
            <CardBody>
              <CardTitle>Chat 4<span className="span">[ 6/6 ]</span></CardTitle>
              <h5>
                <span>
                  <Badge color="info">Chopsticks</Badge>
                </span>
              </h5>
              <Button href="/video">Enter</Button>
            </CardBody>
          </Card>
        </Col>
        <Col xs="6" sm="4">
          <Card>
            <CardImg top width="100%" src="https://www.newbirth.org/wp-content/uploads/2018/06/Purple-Blue-gradient.jpg" alt="" />
            <CardBody>
              <CardTitle>Chat 5<span className="span">[ 2/6 ]</span></CardTitle>
              <h5>
                <span>
                  <Badge color="info">Chinese New Year</Badge>
                </span>
              </h5>
              <Button href="/video">Enter</Button>
            </CardBody>
          </Card>
        </Col>
        <Col sm="4">
          <Card>
            <CardImg top width="100%" src="https://www.newbirth.org/wp-content/uploads/2018/06/Purple-Blue-gradient.jpg" alt="" />
            <CardBody>
              <CardTitle>Chat 6<span className="span">[ 0/6 ]</span></CardTitle>
              <h5>
                <span>
                  <Badge color="danger">Censorship</Badge>
                </span>
              </h5>
              <Button href="/video">Enter</Button>
            </CardBody>
          </Card>
        </Col>
      </Row>
      <br></br>
    </Container>
  );
}

export default ChatsPage;
