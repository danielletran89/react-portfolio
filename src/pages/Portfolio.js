import React from "react";
import Card from 'react-bootstrap/Card'
import CardGroup from 'react-bootstrap/CardGroup'
import Button from 'react-bootstrap/Button'
import Cheatsheet from '../components/public/image/cssCheatsheet.png'
import Klettersteig from '../components/public/image/klettersteig.JPG'
import Piano from '../components/public/image/Piano-on-the-go.gif'
import redux from '../components/public/image/redux.JPG'
import teamP from '../components/public/image/teamProfileGenerator.JPG'
import weather from '../components/public/image/weatherDashboard.JPG'
import scheduler from '../components/public/image/work-day-scheduler.png'


function Portfolio() {
  return (
    <section className="projects">
    <CardGroup>
      <Card style={{ width: '25rem' }}>
      <Card.Img variant="top" src={Piano} />
    <Card.Body>
      <Card.Title>Piano on the Go</Card.Title>
      <Card.Text>
        A piano app to record a song!
      </Card.Text>
      <Button variant="dark" href="https://github.com/danielletran89/Piano-app">Repo</Button>
  </Card.Body>
</Card>
<Card style={{ width: '25rem' }}>
  <Card.Img variant="top" src={Klettersteig} />
  <Card.Body>
    <Card.Title>Klettersteig</Card.Title>
    <Card.Text>
      An app to find a hike as well as assist you while you're hiking!
    </Card.Text>
    <Button variant="dark" href="https://github.com/danielletran89/Klettersteig">Repo</Button>
  </Card.Body>
</Card>
<Card style={{ width: '25rem' }}>
  <Card.Img variant="top" src={redux} />
  <Card.Body>
    <Card.Title>Redux Store</Card.Title>
    <Card.Text>
      Refractored code to create redux store
    </Card.Text>
    <Button variant="dark" href="https://github.com/danielletran89/redux-store">Repo</Button>
  </Card.Body>
</Card>
</CardGroup>
<CardGroup>
<Card style={{ width: '25rem' }}>
  <Card.Img variant="top" src={Cheatsheet} />
  <Card.Body>
    <Card.Title>CSS Cheatsheet</Card.Title>
    <Card.Text>
    CSS cheatsheet code to quickly copy
    </Card.Text>
    <Button variant="dark" href="https://github.com/danielletran89/miniProject02">Repo</Button>
  </Card.Body>
</Card>
<Card style={{ width: '25rem' }}>
  <Card.Img variant="top" src={teamP} />
  <Card.Body>
    <Card.Title>Team Profile Generator</Card.Title>
    <Card.Text>
    Generate a team profile with job lables and titles
    </Card.Text>
    <Button variant="dark" href="https://github.com/danielletran89/team-profile-generator">Repo</Button>
  </Card.Body>
</Card>
<Card style={{ width: '25rem' }}>
  <Card.Img variant="top" src={weather} />
  <Card.Body>
    <Card.Title>Weather Dashboard</Card.Title>
    <Card.Text>
    Check the weather in any city
    </Card.Text>
    <Button variant="dark" href="https://github.com/danielletran89/weather-dashboard">Repo</Button>
  </Card.Body>
</Card>
<Card style={{ width: '25rem' }}>
  <Card.Img variant="top" src={scheduler} />
  <Card.Body>
    <Card.Title>Workday Scheduler</Card.Title>
    <Card.Text>
    Work day scheduler to keep track of your day to day activities
    </Card.Text>
    <Button variant="dark" href="https://github.com/danielletran89/work-day-scheduler">Repo</Button>
  </Card.Body>
</Card>
</CardGroup>

            </section>
        );
    };

export default Portfolio