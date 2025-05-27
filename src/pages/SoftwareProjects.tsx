import { Tab, Tabs, Card, Row, Col } from "react-bootstrap";
import { BsRobot, BsCupHot, BsCodeSlash, BsBoxSeam, BsLightning } from "react-icons/bs";

// Optionally add a description field to each project for more detail
const projects = {
  "AI & ML": [
    { title: "Gen AI Starter", url: "https://github.com/dmackay39/gen-ai-starter", icon: <BsRobot /> },
    { title: "Natural Language Database Querying", url: "https://github.com/dmackay39/gen-ai-sql", icon: <BsRobot /> },
    { title: "Classification of Forest Cover", url: "https://github.com/dmackay39/Forest-Cover-Classification", icon: <BsRobot /> },
    { title: "Classification of Heart Attacks", url: "https://github.com/dmackay39/Heart-Attack-Classification", icon: <BsRobot /> },
    { title: "Linear Regression with House Prices", url: "https://github.com/dmackay39/House-Price-Linear-Regression", icon: <BsRobot /> },
  ],
  Java: [
    { title: "Gen AI Starter", url: "https://github.com/dmackay39/gen-ai-starter", icon: <BsCupHot /> },
    { title: "Simple full-stack Library App", url: "https://github.com/dmackay39/simple-library", icon: <BsCupHot /> },
    { title: "Example Spring Rest API", url: "https://github.com/dmackay39/spring-api-demo", icon: <BsCupHot /> },
    { title: "Spring Entity Inheritance Annotations", url: "https://github.com/dmackay39/spring-inheritance-strategies", icon: <BsCupHot /> },
    { title: "Spring API Capstone Project", url: "https://github.com/dmackay39/LibrarySystemCapstone", icon: <BsCupHot /> },
    { title: "Bank API Capstone Project", url: "https://github.com/dmackay39/BankCapstone", icon: <BsCupHot /> },
  ],
  Python: [
    { title: "Natural Language Database Querying", url: "https://github.com/dmackay39/gen-ai-sql", icon: <BsCodeSlash /> },
    { title: "Classification of Forest Cover", url: "https://github.com/dmackay39/Forest-Cover-Classification", icon: <BsCodeSlash /> },
    { title: "Classification of Heart Attacks", url: "https://github.com/dmackay39/Heart-Attack-Classification", icon: <BsCodeSlash /> },
    { title: "Linear Regression with House Prices", url: "https://github.com/dmackay39/House-Price-Linear-Regression", icon: <BsCodeSlash /> },
  ],
  React: [
    { title: "Gen AI Starter", url: "https://github.com/dmackay39/gen-ai-starter", icon: <BsLightning /> },
    { title: "Simple full-stack Library App", url: "https://github.com/dmackay39/simple-library", icon: <BsLightning /> },
  ],
  Docker: [
    { title: "Gen AI Starter", url: "https://github.com/dmackay39/gen-ai-starter", icon: <BsBoxSeam /> },
    { title: "Natural Language Database Querying", url: "https://github.com/dmackay39/gen-ai-sql", icon: <BsBoxSeam /> },
  ],
};

// Reusable ProjectCard component
function ProjectCard({ title, url, icon }: { title: string; url: string; icon: JSX.Element }) {
  return (
    <Card className="h-100 shadow-sm border-0 project-card-hover">
      <Card.Body>
        <Card.Title className="d-flex align-items-center mb-2">
          <span className="me-2 fs-4">{icon}</span>
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="fw-bold text-decoration-none"
            aria-label={`View project: ${title}`}
          >
            {title}
          </a>
        </Card.Title>
      </Card.Body>
    </Card>
  );
}

function SoftwareProjects() {
  return (
    <div>
      <Tabs defaultActiveKey="AI & ML" id="software-projects-tabs" className="mb-4">
        {Object.entries(projects).map(([category, items]) => (
          <Tab eventKey={category} title={category} key={category}>
            <Row xs={1} md={2} className="g-3 mt-2">
              {items.map((proj, idx) => (
                <Col key={idx}>
                  <ProjectCard {...proj} />
                </Col>
              ))}
            </Row>
          </Tab>
        ))}
      </Tabs>
      <style>
        {`
          .project-card-hover {
            transition: transform 0.15s, box-shadow 0.15s;
          }
          .project-card-hover:hover {
            transform: translateY(-4px) scale(1.02);
            box-shadow: 0 0.5rem 1rem rgba(0,0,0,0.15);
          }
        `}
      </style>
    </div>
  );
}

export default SoftwareProjects;