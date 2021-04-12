import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { CardGroup, Card} from 'react-bootstrap';


const Projects = () =>{
    return (
        <div className="container">
          <CardGroup>
            <Card>
              <Card.Img variant="top" src="https://miro.medium.com/max/2674/1*o5JioPIf2Y7fwXWvhLf_CA.png" />
              <Card.Body>
                <Card.Title>React project</Card.Title>
                <Card.Text>
                React is a popular JavaScript library developed by Facebook for building web application user interfaces.
        </Card.Text>
              </Card.Body>
              {/* <Card.Footer>
                <small className="text-muted">Last updated 3 mins ago</small>
              </Card.Footer> */}
            </Card>
            <Card>
              <Card.Img variant="top" src="https://www.wpblog.com/wp-content/uploads/2018/04/Tools-You-Can-Use-to-Visualize-Data-in-WordPress.jpg" />
              <Card.Body>
                <Card.Title>Wordpress project </Card.Title>
                <Card.Text>
                Sharing all the right data with your followers is great, but it’s even better if you can provide it in a way which is easily digestible and visually potent. With these WordPress tools, you will establish yourself as the source of information which they will turn to first, and once that happens, you will also be the first on their list when they decide to make a purchase.{''}
                </Card.Text>
              </Card.Body>
              {/* <Card.Footer>
                <small className="text-muted">Last updated 3 mins ago</small>
              </Card.Footer> */}
            </Card>
            
          </CardGroup>
        </div>
  
  )
}
export default Projects
  
    
  