import { Badge, ListGroup } from "react-bootstrap"

function WorkExperience() {
    return (
        <ListGroup>
            <ListGroup.Item>
                <div className="fw-bold">Software Engineer - Barclays  <Badge bg="dark">Current</Badge></div>
            </ListGroup.Item>
            <ListGroup.Item>
                <div className="fw-bold">Leadership Development Programme - St Andrews Free Church</div>
            </ListGroup.Item>
            <ListGroup.Item>
                <div className="fw-bold">Machine Learning Intern - Origin Digital</div>
            </ListGroup.Item>
            <ListGroup.Item>
                <div className="fw-bold">Technology Developer Intern - Barclays</div>
            </ListGroup.Item>
            <ListGroup.Item>
                <div className="fw-bold">Summer Research Assistant - University of St Andrews</div>
            </ListGroup.Item>
        </ListGroup>
    )
}

export default WorkExperience;