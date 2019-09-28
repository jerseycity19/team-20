import React from "react";
import {Container, Button, Nav, Card, Row, Col} from 'react-bootstrap';
import './UserProfilePage.css'

function UserProfilePage() {
  return (
    <Container>
        <Row className='text-center additional-bottom-padding'>
          <Col><img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png" alt="new" width = {300} height = {300}  style={{opacity: 0.5}}/></Col>
          <Col className="text-center text-md-left">
          <Col><h1>Sarah Jang</h1><Card>
                  <Card.Header>
                    <Nav variant="tabs" defaultActiveKey="#first">
                      <Nav.Item>
                        <Nav.Link href="#first">Active</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link href="#link">Link</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link href="#disabled" disabled>
                          Disabled
                        </Nav.Link>
                      </Nav.Item>
                    </Nav>
                  </Card.Header>
                </Card>
              </Col>
          </Col>        
        </Row>
        <Row className='additional-bottom-padding pb-lg-5 pt-lg-5 pl-lg-5 pr-lg-5 row text-center'>
          <Col><Card className="bg-dark text-black">
              <Card.Img src="https://s3.amazonaws.com/media.eremedia.com/wp-content/uploads/2018/04/06122011/story.jpeg" alt="Card image" width = {500} height = {300} style = {{opacity: .5}}/>
              <Card.ImgOverlay>
                <Card.Title>Today</Card.Title>
                <Card.Text>
                  Take a look into Sarah's day.
                </Card.Text>
                <Card.Text>9/28/19</Card.Text>
              </Card.ImgOverlay>
            </Card>
          </Col>
          <Col><Card className="bg-dark text-black">
              <Card.Img src="https://img.officetimeline.com/website/Content/website/online-general/slider/graphic-built-with-online-timeline-and-Gantt-chart-app.png" alt="Card image" width = {500} height = {300} style = {{opacity: .5}}/>
              <Card.ImgOverlay>
                <Card.Title>Her Timeline</Card.Title>
                <Card.Text>
                  Take a look into Sarah's timeline, and her most special days.
                </Card.Text>
                <Card.Text>2017-2019</Card.Text>
              </Card.ImgOverlay>
            </Card>
          </Col>
        </Row>
        <Row className='additional-bottom-padding pb-lg-5 pt-lg-5 pl-lg-7 pr-lg-7 row text-center'>
          <Col><Card className="bg-dark text-black" width = {500} height = {300}>
              <Card.Img src="http://www.cmu.edu/assets/images/site/meta-image-cmu.jpg" alt="Card image"  style = {{opacity: .5}}/>
              <Card.ImgOverlay>
                <Card.Title>Her World</Card.Title>
                <Card.Text>
                  Experience what Sarah experiences everyday.
                </Card.Text>
                <Card.Text>2017-2019</Card.Text>
              </Card.ImgOverlay>
            </Card>
          </Col>
        </Row>
    </Container>
  );
}

export default UserProfilePage

  