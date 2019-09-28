import React from "react";
import {Link} from "react-router-dom";
import "./ChatsPage.css";
import {
  Card,
  CardImg,
  CardBody,
  CardTitle,
  Button,
  Container,
  Row,
  Col,
  Badge,
} from "reactstrap";

function ChatsPage() {
  return (
    <Container>
      <br></br>
      <Row>
        <Col xs="6" sm="4">
          <Card>
            <CardImg top width="100%" src="https://s.marketwatch.com/public/resources/images/MW-HQ779_China__ZH_20190905152344.jpg" alt="" />
            <CardBody>
              <CardTitle>Chat 1<span className="span">[ 0/6 ]</span></CardTitle>
              <h5>
                <span>
                  <Badge color="info">General</Badge>
                </span>
              </h5>

              <Button href='/video'>Enter</Button>
            </CardBody>
          </Card>
        </Col>
        <Col xs="6" sm="4">
          <Card>
            <CardImg top width="100%" src="https://www.thenational.ae/image/policy:1.774492:1538032405/AC27-China.jpg?f=16x9&w=1200&$p$f$w=ed7ade9" alt="" />
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
            <CardImg top width="100%" src="https://lh3.googleusercontent.com/0khK6LQtibSVEO7UYKfvoW1zOvEhrM6G6rfUjvczd1sZUOuB-PN3QQMABh3U8tkgPCKKe8Iv=w1080-h608-p-no-v0" alt="" />
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
            <CardImg top width="100%" src="https://img.theculturetrip.com/768x432/wp-content/uploads/2017/12/chinese_plate_with_chopsticks_b.jpg" alt="" />
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
            <CardImg top width="100%" src="https://resize.hswstatic.com/w_907/gif/chinese-new-year-5.jpg" alt="" />
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
            <CardImg top width="100%" src="https://i.ytimg.com/vi/dJ0WVNrdWU0/maxresdefault.jpg" alt="" />
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
