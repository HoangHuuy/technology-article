import { Col, Row } from "react-bootstrap";
import "./ArticleHorizontal.scss";
import { Link, useNavigate } from "react-router-dom";
import textToURL from "helper/textToURL";

export default function ArticleHorizontal({ imgURL, category, title, desc }) {
  const navigate = useNavigate();
  const redirect = () => navigate(`/post/${textToURL(title)}`);

  return (
    <Row className="h-article">
      <Col md={6} className="article-img">
        <div className="img-wrapper">
          <img onClick={redirect} src={imgURL} alt="article" />
        </div>
      </Col>
      <Col md={6} className="content">
        <div className="category">
          <Link to={`/category/${textToURL(category)}`}>{category}</Link>
        </div>
        <div className="title" onClick={redirect}>
          {title}
        </div>
        <div className="desc">{desc}</div>
      </Col>
    </Row>
  );
}
