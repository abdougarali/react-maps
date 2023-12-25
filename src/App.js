import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import 'bootstrap/dist/css/bootstrap.min.css';

const mapContainerStyle = {
  width: '100%',
  height: '400px',
  margin: '20px auto',
};

const center = {
  lat: 37.7749, // Latitude de San Francisco (exemple)
  lng: -122.4194, // Longitude de San Francisco (exemple)
};

const App = () => {
  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col md="8">
          <h1 className="text-center mt-5">Bienvenue sur notre Page de Destination</h1>
          <p className="text-center">Découvrez notre emplacement sur la carte ci-dessous.</p>
          <LoadScript googleMapsApiKey="VOTRE_CLE_API_GOOGLE_MAPS">
            <GoogleMap mapContainerStyle={mapContainerStyle} center={center} zoom={13}>
              <Marker position={center} />
            </GoogleMap>
          </LoadScript>
        </Col>
      </Row>
    </Container>
  );
};

export default App;