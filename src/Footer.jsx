import { Layout, Row, Col, Input, Button } from 'antd';
import './Footer.css';
import { FaFacebook, FaInstagram, FaTwitter, FaWhatsapp } from "react-icons/fa";



const { Footer: AntFooter } = Layout;

const Footer = () => {
  return (
    <div  >
      <div className="footer-top-image-container">
        <img src="./assets/Images/Footer1.png" alt="Background" className="footer-top-image" />
      </div>
      <AntFooter className="custom-footer">
        <div className="footer-content">
          <Row justify="space-between" align="top">
            <Col xs={24} sm={12} md={8} lg={4}>
              <div className="contact-info">
                <img src="./assets/Images/footerlogo.png" alt="Dham Logo" className="logos" />
                <p>Contact number: 02033074477</p>
                <div className="social-icons">
                  <FaFacebook/>
                  <FaTwitter/>
                  <FaInstagram/>
                  <FaWhatsapp/>
                  
                </div>
                <p>© 2024 Dham</p>
              </div>
            </Col>
            <Col xs={24} sm={12} md={8} lg={2}>
              <div className="company-info">
                <h3>Company</h3>
                <p>Home</p>
                <p>About us</p>
                <p>Our team</p>
              </div>
            </Col>
            <Col xs={24} sm={12} md={8} lg={2}>
              <div className="guest-info">
                <h3>Guests</h3>
                <p>Blog</p>
                <p>FAQ</p>
                <p>Career</p>
              </div>
            </Col>
            <Col xs={24} sm={12} md={8} lg={2}>
              <div className="privacy-info">
                <h3>Privacy</h3>
                <p>Terms of Service</p>
                <p>Privacy Policy</p>
              </div>
            </Col>
            <Col xs={24} sm={12} md={8} lg={8}>
              <div className="subscribe-info">
                <h3>Stay up to date</h3>
                <p>Be the first to know about our newest apartments</p>
                <Input placeholder="Email address" />
                <Button type="primary" className="subscribe-button">Subscribe</Button>
              </div>
            </Col>
          </Row>
        </div>
      </AntFooter>
    </div>
  );
};

export default Footer;
