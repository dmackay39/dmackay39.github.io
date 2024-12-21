import { Tab, Tabs } from "react-bootstrap";

function SoftwareProjects(){
    return (
    <div>
    <Tabs
        defaultActiveKey="AI & ML"
        id="uncontrolled-tab-example"
        className="mb-3"
      >
        <Tab eventKey="AI & ML" title="AI & ML">
          <ul>
            <li><a href="https://github.com/dmackay39/gen-ai-starter" target="_blank">Gen AI Starter</a></li>
            <li><a href="https://github.com/dmackay39/gen-ai-sql" target="_blank">Natural Language Database Querying</a></li>
            <li><a href="https://github.com/dmackay39/Forest-Cover-Classification" target="_blank">Classification of Forest Cover</a></li>
            <li><a href="https://github.com/dmackay39/Heart-Attack-Classification" target="_blank">Classification of Heart Attacks</a></li>
            <li><a href="https://github.com/dmackay39/House-Price-Linear-Regression" target="_blank">Linear Regression with House Prices</a></li>
          </ul>
        </Tab>
        <Tab eventKey="Java" title="Java">
          <ul>
          <li><a href="https://github.com/dmackay39/gen-ai-starter" target="_blank">Gen AI Starter</a></li>
          <li><a href="https://github.com/dmackay39/simple-library" target="_blank">Simple full-stack Library App</a></li>
          <li><a href="https://github.com/dmackay39/spring-api-demo" target="_blank">Example Spring Rest API</a></li>
          <li><a href="https://github.com/dmackay39/spring-inheritance-strategies" target="_blank">Spring Entity Inheritance Annotations</a></li>
          <li><a href="https://github.com/dmackay39/LibrarySystemCapstone" target="_blank">Spring API Capstone Project</a></li>
          <li><a href="https://github.com/dmackay39/BankCapstone" target="_blank">Bank API Capstone Project</a></li>
          </ul>
        </Tab>
        <Tab eventKey="Python" title="Python">
          <ul>
            <li><a href="https://github.com/dmackay39/gen-ai-sql" target="_blank">Natural Language Database Querying</a></li>
            <li><a href="https://github.com/dmackay39/Forest-Cover-Classification" target="_blank">Classification of Forest Cover</a></li>
            <li><a href="https://github.com/dmackay39/Heart-Attack-Classification" target="_blank">Classification of Heart Attacks</a></li>
            <li><a href="https://github.com/dmackay39/House-Price-Linear-Regression" target="_blank">Linear Regression with House Prices</a></li>
          </ul>
        </Tab>
        <Tab eventKey="React" title="React">
        <ul>
          <li><a href="https://github.com/dmackay39/gen-ai-starter" target="_blank">Gen AI Starter</a></li>
          <li><a href="https://github.com/dmackay39/simple-library" target="_blank">Simple full-stack Library App</a></li>
          </ul>
        </Tab>
        <Tab eventKey="Docker" title="Docker">
        <ul>
          <li><a href="https://github.com/dmackay39/gen-ai-starter" target="_blank">Gen AI Starter</a></li>
          <li><a href="https://github.com/dmackay39/gen-ai-sql" target="_blank">Natural Language Database Querying</a></li>
        </ul>
        </Tab>
    </Tabs>
    </div>
    )
}

export default SoftwareProjects;