import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

function Courses() {
    return (
        <>
        <CardGroup>
        <Card>
        <Card.Body>
          <Card.Title>AWS</Card.Title>
          <Card.Text>
            Architecting on AWS
          </Card.Text>
        </Card.Body>
        </Card>
        <Card>
        <Card.Body>
          <Card.Title>Docker Foundations</Card.Title>
          <Card.Text>
            Docker Inc.
          </Card.Text>
        </Card.Body>
        </Card>
        <Card>
        <Card.Body>
          <Card.Title>Vector Databases</Card.Title>
          <Card.Text>
            Weaviate
          </Card.Text>
        </Card.Body>
        </Card>
        <Card>
        <Card.Body>
          <Card.Title>PluralSight and Codecademy Courses</Card.Title>
          <Card.Text>
            AWS, Machine learning, SQL
          </Card.Text>
        </Card.Body>
        </Card>
        </CardGroup>
        </>
    )
}

export default Courses;