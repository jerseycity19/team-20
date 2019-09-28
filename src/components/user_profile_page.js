import React from "react";
import {Container, Row, Col} from 'reactstrap';
import './UserProfilePage.css'

function UserProfilePage() {
  return (
    <Container>
        <Row className='text-center additional-bottom-padding'>
          <Col>Sarah Jang</Col>
          <Col>United States</Col>
          <Col>Korean</Col>
        </Row>
        <Row>
          <Col><img src="https://miro.medium.com/max/3431/1*b1T9PtMK3bxboKvnSctNmg.jpeg" alt="new" width = {500} height = {300}  style={{opacity: 0.5}}/></Col>
          <Col><img src="https://upload.wikimedia.org/wikipedia/commons/1/1e/A_New_Chart_of_History_color.jpg" alt="new" width = {500} height = {300}  style={{opacity: 0.5}}/></Col>
        </Row>
        <Row>
          <Col><img src="https://thumbor.forbes.com/thumbor/711x474/http://specials-images.forbesimg.com/imageserve/596041379/960x0.jpg?fit=scale" alt="new" style={{opacity: 0.5}}/></Col>
        </Row>
    </Container>
  );
}

export default UserProfilePage

  