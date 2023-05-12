import Layout from "layout/Layout";
import "./Post.scss";
import imgURL from "constants/imgURL";
import { Link } from "react-router-dom";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import { Col, Row } from "react-bootstrap";
import Article from "components/Article/Article";
import InputText from "components/Input/InputText";
import TextArea from "components/Input/TextArea";
import Submit from "components/Input/Submit";

export default function Post() {
  return (
    <Layout>
      <div className="post">
        <div className="post-content">
          <div className="post-image">
            <img src={imgURL.editor2} alt="post" />
          </div>
          <h1 className="post-title">Dogs Do Their Duty for Science</h1>
          <div className="action">
            <span className="toCategory">
              <Link to={"/category/games"}>Games</Link>
            </span>
            {" / "}
            <a href="#comment-section" className="toComment">
              Leave a Comment
            </a>
          </div>

          <h3 className="big-heading">Cursus iaculis etiam in</h3>
          <p>
            In nullam donec sem sed consequat scelerisque nibh amet, massa
            egestas risus, gravida vel amet, imperdiet volutpat rutrum sociis
            quis velit, commodo enim aliquet. <br />
            <br />
            Nunc volutpat tortor libero at augue mattis neque, suspendisse
            aenean praesent sit habitant laoreet felis lorem nibh diam faucibus
            viverra penatibus donec etiam sem consectetur vestibulum purus non
            arcu suspendisse ac nibh tortor, eget elementum lacus, libero sem
            viverra elementum.
          </p>

          <h4 className="small-heading">Magna enim, convallis ornare</h4>
          <p>
            Sollicitudin bibendum nam turpis non cursus eget euismod egestas sem
            nunc amet, tellus at duis suspendisse commodo lectus accumsan id
            cursus facilisis nunc eget elementum non ut elementum et facilisi
            dui ac viverra sollicitudin lobortis luctus sociis sed massa
            accumsan amet sed massa lectus id dictum morbi ullamcorper. <br />
            <br />
            Morbi ut viverra massa mattis vitae blandit ut integer non
            vestibulum eros, diam in in et hac mauris maecenas sed sapien
            fermentum et eu.
          </p>
        </div>

        <div className="other-post">
          <div className="previous">
            <BsArrowLeft />
            {"  "}Previous Post
          </div>
          <div className="next">
            Next Post{"  "}
            <BsArrowRight />
          </div>
        </div>

        <div className="post-content">
          <h3 className="post-title-small mb-3">Must Read</h3>
          <Row>
            <Col sm={6}>
              <Article
                imgURL={imgURL.software1}
                title={
                  "A Genetic Oddity May Give Octopuses and Squids Their Smarts"
                }
              />
            </Col>
            <Col sm={6}>
              <Article
                imgURL={imgURL.read1}
                title={
                  "After Badger Buries Entire Cow Carcass, Scientists Go to the Tape"
                }
              />
            </Col>
          </Row>
        </div>

        <form className="post-content comment" id="comment-section">
          <div className="post-title-small">Leave a Comment</div>
          <div className="note">
            Your email address will not be published. Required fields are marked
            *
          </div>

          <TextArea cols="45" rows="8" placeholder="Type here..." />

          <form>
            <div className="input-group">
              <InputText type={"text"} placeholder={"Name*"} />
              <InputText type={"email"} placeholder={"Email*"} />
              <InputText type={"text"} placeholder={"Website"} />
            </div>
            <div className="separate-col">
              <div className="save-account">
                <input type="checkbox" name="save" id="save" />
                <label htmlFor="save">
                  Save my name, email, and website in this browser for the next
                  time I comment.
                </label>
              </div>
              <Submit className={"w-auto ps-3 pe-3"} value={"Post Comment"} />
            </div>
          </form>
        </form>
      </div>
    </Layout>
  );
}
