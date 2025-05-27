import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const courses = [
  { title: 'AWS', text: 'Architecting on AWS' },
  { title: 'Docker Foundations', text: 'Docker Inc.' },
  { title: 'Vector Databases', text: 'Weaviate' },
  { title: 'PluralSight and Codecademy Courses', text: 'AWS, Machine learning, SQL' },
];

function Courses() {
  return (
    <div className="my-4">
      <Row xs={1} md={2} className="g-4">
        {courses.map((course, idx) => (
          <Col key={idx}>
            <Card className="h-100 shadow-sm">
              <Card.Body>
                <Card.Title>{course.title}</Card.Title>
                <Card.Text>{course.text}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default Courses;