import React from 'react';
//import ChatRoom from './ChatRoom';
import { Card, Button } from "react-bootstrap";
import { Container, Row, Col } from 'reactstrap';
import {Link } from "react-router-dom";

function LoggedInLand() {

     return (
      <Container>
      <br/>
        <Row>
        <Col ><Card style={{ width: '22rem' }}>
    <Card.Img variant="top" src="https://www.crwflags.com/fotw/images/u/us.gif" width={140} height={200} />
    <Card.Body>
    <Card.Title>United States</Card.Title>
    <Card.Text>
      3 Americans Online
    </Card.Text>
    
    <Button variant="primary">Go to America</Button>
   
    </Card.Body>
    </Card>
     </Col>
        <Col>
        <Card style={{ width: '22rem' }}>
    <Card.Img variant="top" src="https://www.crwflags.com/fotw/images/c/ca.gif" width={140} height={200} style={{opacity: .3}}/>
    <Card.Body>
    <Card.Title style={{opacity: .3}}>Canada</Card.Title>
    <Card.Text style={{opacity: .3}}>
      0 Canadians Online
    </Card.Text>
    <Button disabled = {true} variant="primary" style={{opacity: .3}}>Go to Canada</Button>
    </Card.Body>
    </Card>
      </Col>
        <Col> 
        <Card style={{ width: '22rem' }}>
    <Card.Img variant="top" src="https://www.crwflags.com/fotw/images/r/ro.gif" width={140} height={200} style={{opacity: .3}}/>
    <Card.Body>
    <Card.Title style={{opacity: .3}}>Romania</Card.Title>
    <Card.Text style={{opacity: .3}}>
      0 Romanians Online
    </Card.Text>
    <Button disabled = {true} variant="primary" style={{opacity: .3}}>Go to Romania</Button>
    </Card.Body>
    </Card>
         </Col>
         </Row>
        <br></br>



        <Row>
        <Col> 
        <Card style={{ width: '22rem' }}>
  <Card.Img variant="top" src="https://www.crwflags.com/fotw/images/a/af.gif"width={140} height={200} />
  <Card.Body>
    <Card.Title>Afghanistan</Card.Title>
    <Card.Text>
      4 Afghanistanis Online
    </Card.Text>
    <Button variant="primary">Go to Afghanistan</Button>
  </Card.Body>
</Card>
</Col>
        <Col> 
        <Card style={{ width: '22rem' }}>
    <Card.Img variant="top" src="https://www.crwflags.com/fotw/images/z/za.gif" width={140} height={200} style={{opacity: .3}}/>
    <Card.Body>
    <Card.Title style={{opacity: .3}}>South Africa</Card.Title>
    <Card.Text style={{opacity: .3}}>
      0 South Africans Online
    </Card.Text>
    <Button disabled = {true} variant="primary" style={{opacity: .3}}>Go to South Africa</Button>
    </Card.Body>
    </Card>
</Col>
<Col>
<Card style={{ width: '22rem' }}>
    <Card.Img variant="top" src="https://www.crwflags.com/fotw/images/m/mx.gif"width={140} height={200} />
    <Card.Body>
    <Card.Title >Mexico</Card.Title>
    <Card.Text>
      4 Mexicans Online
    </Card.Text>
    <Button variant="primary">Go to Mexico</Button>
    </Card.Body>
    </Card>
</Col>
</Row>
<br></br>
<Row>
        <Col ><Card style={{ width: '22rem' }}>
    <Card.Img variant="top" src="https://www.crwflags.com/fotw/images/c/cn.gif" width={140} height={200}/>
    <Card.Body>
    <Card.Title>China</Card.Title>
    <Card.Text>
      5 Chinese Online
    </Card.Text>
    <Link to="/chat">
    <Button variant="primary" /*onClick = {}*/>Go to China</Button>
    </Link>
    </Card.Body>
    </Card>
     </Col>

        <Col>

        <Card style={{ width: '22rem' }}>
    <Card.Img variant="top" src="https://www.crwflags.com/fotw/images/t/tr.gif" width={140} height={200}/>
    <Card.Body>
    <Card.Title >Turkey</Card.Title>
    <Card.Text>
      5 Turkish People Online
    </Card.Text>
    <Button variant="primary">Go to Turkey</Button>
    </Card.Body>
    </Card>
      </Col>
        <Col> 

        <Card style={{ width: '22rem' }}>
    <Card.Img variant="top" src="https://www.crwflags.com/fotw/images/r/ro.gif" width={140} height={200} style={{opacity: .3}}/>
    <Card.Body>
    <Card.Title style={{opacity: .3}}>Romania</Card.Title>
    <Card.Text style={{opacity: .3}}>
      0 Romanians Online
    </Card.Text>
    <Button disabled = {true} variant="primary" style={{opacity: .3}}>Go to Romania</Button>
    </Card.Body>
    </Card>
         </Col>
         </Row>
         <br></br>
         <Row>
        <Col ><Card style={{ width: '22rem' }}>
    <Card.Img variant="top" src="https://www.crwflags.com/fotw/images/u/ua.gif" width={140} height={200}/>
    <Card.Body>
    <Card.Title>United States</Card.Title>
    <Card.Text>
      3 Ukrainians Online
    </Card.Text>
    <Button variant="primary">Go to Ukraine</Button>
    </Card.Body>
    </Card>
     </Col>
        <Col>

        <Card style={{ width: '22rem' }}>
    <Card.Img variant="top" src="https://www.crwflags.com/fotw/images/t/th.gif" width={140} height={200} style={{opacity: .3}}/>
    <Card.Body>
    <Card.Title style={{opacity: .3}}>Thailand</Card.Title>
    <Card.Text style={{opacity: .3}}>
      0 Thai people Online
    </Card.Text>
    <Button disabled = {true} variant="primary" style={{opacity: .3}}>Go to Thailand</Button>
    </Card.Body>
    </Card>
      </Col>
        <Col> 

        <Card style={{ width: '22rem' }}>
    <Card.Img variant="top" src="https://www.crwflags.com/fotw/images/s/se.gif"width={140} height={200} />
    <Card.Body>
    <Card.Title>Sweden</Card.Title>
    <Card.Text >
      2 Swedish people Online
    </Card.Text>
    <Button variant="primary" >Go to Sweden</Button>
    </Card.Body>
    </Card>
         </Col>
         </Row>
         <br></br>
      </Container>
    );
}
  export default LoggedInLand