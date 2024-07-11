import { Container, Nav, Navbar } from "react-bootstrap";

const TopBar = () => {
  return (
    <Navbar bg="primary" data-bs-theme="dark">
      <Container className="d-flex justify-content-center">
        <Navbar.Brand href="#home">SpaceFlight</Navbar.Brand>
      </Container>
    </Navbar>
  );
};

export default TopBar;
