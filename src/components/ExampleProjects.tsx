import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import { Button } from 'react-bootstrap';

function ExampleProjects() {
    return (
        <>
        <CardGroup>
        <Card>
        <Card.Body>
          <Card.Title>GenAI Starter Code</Card.Title>
          <Card.Text>
            Some basic RAG and function calling. Spring/React/Postgres/Docker stack.
          </Card.Text>
        </Card.Body>
        <Button variant="dark" href='https://github.com/dmackay39/gen-ai-starter' target='_blank'>View repo</Button>
        </Card>
        <Card>
        <Card.Body>
          <Card.Title>Natural Language Database Querying</Card.Title>
          <Card.Text>
            Prompt engineering for querying a database with natural languages. Python/Streamlit/Docker stack.
          </Card.Text>
        </Card.Body>
        <Button variant="dark" href='https://github.com/dmackay39/gen-ai-sql' target='_blank'>View repo</Button>
        </Card>
        </CardGroup>
        </>
    )
}

export default ExampleProjects;