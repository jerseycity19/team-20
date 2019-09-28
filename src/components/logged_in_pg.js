import React from 'react';
//import ChatRoom from './ChatRoom';
import { Card } from "react-bootstrap";
import { Container, Row, Col } from 'reactstrap';
function LoggedInLand() {

     return (
      <Container>

        <Row>
        <Col ><Card className="US">
              <Card.Img src="https://www.crwflags.com/fotw/images/u/us.gif" alt="Card image" width = {500} height = {300} style = {{opacity: .5}}/>
              <Card.ImgOverlay>
                <Card.Title>Today</Card.Title>
                <Card.Text>
                  United States
                </Card.Text>
                <Card.Text>9/28/19</Card.Text>
              </Card.ImgOverlay>
            </Card> </Col>
        <Col><img src="https://www.crwflags.com/fotw/images/c/ca.gif" alt="canada" style = {{opacity: .2}} height={140} width={280}/> </Col>
        <Col> <img src="https://cdn.britannica.com/40/5340-004-FA6D2EE9/Flag-Afghanistan.jpg" alt="afghanistan" height={140} width={280}/> </Col>
        </Row>
        
        <Row>
         <Col><img src="https://www.cia.gov/library/publications/the-world-factbook/attachments/flags/SP-flag.gif" alt="spain"height={140} width={280} /> </Col>
        <Col> <img src="https://www.cia.gov/library/publications/the-world-factbook/attachments/flags/PL-flag.gif" alt="poland" style = {{opacity: .2}} height={140} width={280} /> </Col>
        <Col><img src="https://www.cia.gov/library/publications/the-world-factbook/attachments/flags/FR-flag.gif" alt="france" style = {{opacity: .2}} height={140} width={280}/> </Col>
        </Row>
        
        <Row>
          <Col><img src="https://www.crwflags.com/fotw/images/m/mx.gif" alt="mexico" height={140} width={280}/> </Col>
          <Col><img src="https://www.crwflags.com/fotw/images/s/sv.gif" alt="el salvador" height={140} width={280}/> </Col>
          <Col><img src="https://www.crwflags.com/fotw/images/a/ar.gif" alt="argentina" style = {{opacity: .2}} height={140} width={280}/> </Col>
        </Row>
        
        <Row>
        <Col><img src="https://www.crwflags.com/fotw/images/c/cn.gif" alt="china" height={140} width={280}/> </Col>
        <Col><img src="https://www.crwflags.com/fotw/images/i/in.gif" alt="india" style = {{opacity: .2}} height={140} width={280}/> </Col>
        <Col><img src="https://www.crwflags.com/fotw/images/r/ru.gif" alt="russia" style = {{opacity: .2}} height={140} width={280}/> </Col>
        </Row>
        
        <Row>
        <Col><img src="https://www.crwflags.com/fotw/images/e/eg.gif" alt="egypt" style = {{opacity: .2}} height={140} width={280}/> </Col>
        <Col><img src="https://www.crwflags.com/fotw/images/n/ng.gif" alt="niger" style = {{opacity: .2}} height={140} width={280}/> </Col>
        <Col><img src="https://www.crwflags.com/fotw/images/a/au.gif" alt="australia" height={140} width={280}/> </Col>
        </Row>
        
      </Container>
    );
}
  export default LoggedInLand