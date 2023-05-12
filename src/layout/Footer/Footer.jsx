import { Col, Row } from "react-bootstrap";
import "./Footer.scss";
import { BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs";
import InputRadiusBorder from "components/Input/InputRadiusBorder";
import InputText from "components/Input/InputText";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer id="footer">
      {/* Sign up for Newsletter */}
      <Row className="sign-up">
        <Col md={12} lg={6}>
          <div className="label">Sign up for Newsletter</div>
          <div className="text">
            Maecenas potenti ultrices, turpis eget turpis gravida.
          </div>
        </Col>

        <Col md={12} lg={6}>
          <form>
            <InputText
              type={"email"}
              placeholder={"Email address"}
              className={"sign-up-input"}
            />
            <InputRadiusBorder
              value={"Subscribe"}
              className={"sign-up-button"}
            />
          </form>
        </Col>
      </Row>

      <Row className="footer-nav">
        <Col md={6} lg={3} className="footer-nav-item">
          <div className="logo mb-4">
            <Link to={"/"}>
              <img
                src="https://websitedemos.net/tech-news-04/wp-content/uploads/sites/903/2021/07/site-logo.svg"
                alt="logo"
              />
            </Link>
          </div>
          <div className="social-network">
            <BsInstagram />
            <BsFacebook />
            <BsTwitter />
          </div>
        </Col>
        <Col md={6} lg={3} className="footer-nav-item">
          <div className="footer-title">Company</div>
          <ul>
            <li>About</li>
            <li>Contact</li>
            <li>Our Staff</li>
            <li>Advertise</li>
          </ul>
        </Col>
        <Col md={6} lg={3} className="footer-nav-item">
          <div className="footer-title">Tech News</div>
          <ul>
            <li>Technology</li>
            <li>Gadget</li>
            <li>Software</li>
            <li>Games</li>
          </ul>
        </Col>
        <Col md={6} lg={3} className="footer-nav-item">
          <div className="footer-title">Legal</div>
          <ul>
            <li>Privacy Policy</li>
            <li>Terms of Service</li>
            <li>Extra Crunch Terms</li>
            <li>Code of Conduct</li>
          </ul>
        </Col>
      </Row>
    </footer>
  );
}
