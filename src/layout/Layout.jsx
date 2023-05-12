import { Col, Container, Row } from "react-bootstrap";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import "./Layout.scss";
import Sidebar from "./Sidebar/Sidebar";
import MobileHeader from "./Header/MobileHeader";

export default function Layout({ children, hasSidebar = false }) {
  return (
    <div className="layout">
      <Header />
      <MobileHeader />

      <Container fluid="md">
        <Row>
          {/* This is where main content is  */}
          <Col>
            <main>{children}</main>
          </Col>

          {/* This is sidebar */}
          {hasSidebar && (
            <Col lg={4}>
              <Sidebar />
            </Col>
          )}
        </Row>
      </Container>

      <Footer />
    </div>
  );
}
