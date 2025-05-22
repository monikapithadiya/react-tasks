import React from 'react';
import Card from 'react-bootstrap/Card';
import Footer from './Footer';

const About = () => {
  return (
    <div
      style={{
        minHeight: '80vh',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: '#f4f4f4',
      }}
    >
      {/* Main content area */}
      <div style={{ padding: '20px', flex: 1 }}>
        <h2
          style={{
            textAlign: 'center',
            marginBottom: '40px',
            fontSize: '2.5rem',
            color: '#333',
          }}
        >
          About ComicVerseHub
        </h2>

        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '30px',
          }}
        >
          {/* Card 1 */}
          <Card style={{ width: '280px', borderRadius: '10px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}>
            <Card.Img
              variant="top"
              src="https://cdn.britannica.com/30/182830-050-96F2ED76/Chris-Evans-title-character-Joe-Johnston-Captain.jpg"
              style={{ height: '300px', objectFit: 'cover' }}
            />
            <Card.Body>
              <Card.Title>Captain America</Card.Title>
              <Card.Text>
                We aim to bring you the best collection of comics across all genres and universes.
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Last updated 1 min ago</small>
            </Card.Footer>
          </Card>

          {/* Card 2 */}
          <Card style={{ width: '280px', borderRadius: '10px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}>
            <Card.Img
              variant="top"
              src="https://cdn.kobo.com/book-images/97e39cbc-ba87-4d2c-9c2e-722d11ef183b/1200/1200/False/thor-the-dark-world-junior-novel.jpg"
              style={{ height: '300px', objectFit: 'cover' }}
            />
            <Card.Body>
              <Card.Title>Thor</Card.Title>
              <Card.Text>
                Learn more about the heroes that define our favorite universes — from classic icons to modern legends.
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Last updated 5 mins ago</small>
            </Card.Footer>
          </Card>

          {/* Card 3 */}
          <Card style={{ width: '280px', borderRadius: '10px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}>
            <Card.Img
              variant="top"
              src="https://www.zbrushcentral.com/uploads/default/original/4X/4/8/d/48d8351551839d4d036e08ad26224c71807334c6.jpeg"
              style={{ height: '300px', objectFit: 'cover' }}
            />
            <Card.Body>
              <Card.Title>Hulk</Card.Title>
              <Card.Text>
                Explore thousands of comics, stories, and issues from publishers around the world — all in one place.
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Last updated 10 mins ago</small>
            </Card.Footer>
          </Card>

          {/* Card 4 */}
          <Card style={{ width: '280px', borderRadius: '10px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}>
            <Card.Img
              variant="top"
              src="https://upload.wikimedia.org/wikipedia/en/1/18/Benedict_Cumberbatch_as_Doctor_Strange.jpeg"
              style={{ height: '300px', objectFit: 'cover' }}
            />
            <Card.Body>
              <Card.Title>Doctor Strange</Card.Title>
              <Card.Text>
                Join the ComicVerseHub community! Participate in forums, fan events, and stay up to date with the latest in the comic world.
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Last updated 12 mins ago</small>
            </Card.Footer>
          </Card>
        </div>
      </div>

      {/* Sticky bottom footer */}
      <Footer />
    </div>
  );
};

export default About;
