import "bootstrap/dist/css/bootstrap.min.css";
import "./Home.scss";
import "App.scss";
import Layout from "layout/Layout";
import { Col, Row } from "react-bootstrap";
import ArticleInsideText from "components/ArticleInsideText/ArticleInsideText";
import { BsArrowRight } from "react-icons/bs";
import Article from "components/Article/Article";
import ArticleHorizontal from "components/ArticleHorizontal/ArticleHorizontal";
import imgURL from "constants/imgURL";
import { Link } from "react-router-dom";
import { AiOutlineMail } from "react-icons/ai";
import InputText from "components/Input/InputText";
import InputRadiusBorder from "components/Input/InputRadiusBorder";

export default function Home() {
  return (
    <Layout>
      <div className="home">
        {/* heading */}
        <Row className="section">
          <Col lg={8} className="left-section not-full-width">
            <ArticleInsideText
              size={"large"}
              imgURL={imgURL.top}
              category={"software"}
              title={"Running macOS and Windows 10 on the Same Computer"}
              desc={
                "Cursus iaculis etiam in In nullam donec sem sed consequat scelerisquenibh amet, massa egestas risus, gravida vel amet, imperdiet …"
              }
            />
          </Col>
          <Col className="right-section">
            <img src={imgURL.sidebar} alt="sidebar" />
            <ul>
              <li>
                <div className="category">
                  <Link to="/category/apps">apps</Link>
                </div>
                <div className="title">
                  Broke a Glass? Someday You Might 3-D-Print a New One
                </div>
              </li>
              <li>
                <div className="category">
                  <Link to="/category/games"> games</Link>
                </div>
                <div className="title">
                  This Is a Giant Shipworm. You May Wish It Had Stayed In Its
                  Tube.
                </div>
              </li>
              <li>
                <div className="category">
                  <Link to="/category/editors pick">editors pick</Link>
                </div>
                <div className="title">
                  For Families of Teens at Microsoft Surface
                </div>
              </li>
              <li>
                <div className="category">
                  <Link to="/category/editors pick">editors pick</Link>
                </div>
                <div className="title">Why Netflix shares are down 10%</div>
              </li>
            </ul>
          </Col>
        </Row>

        {/* Editor's Pick */}
        <Row className="section">
          <Col
            lg={8}
            className="left-section section-has-border not-full-width"
          >
            <div className="section-header">
              <div className="section-name">Editor’s Pick</div>
              <div className="page-direct">
                View All
                <BsArrowRight />
              </div>
            </div>
            <Row>
              <Col md={4}>
                <Article
                  imgURL={imgURL.editor1}
                  title={"For Families of Teens at Microsoft Surface"}
                />
              </Col>
              <Col md={4}>
                <Article
                  imgURL={imgURL.editor2}
                  title={"Why Netflix shares are down 10%"}
                />
              </Col>
              <Col md={4}>
                <Article
                  imgURL={imgURL.editor3}
                  title={
                    "6 Bots That Deliver Science and Serendipity on Twitter"
                  }
                />
              </Col>
            </Row>
          </Col>
          <Col className="right-section not-full-width">
            <div className="section-wrapper has-border">
              <div className="mail-icon">
                <AiOutlineMail />
              </div>
              <div className="title">Subscribe to Our Newsletter</div>
              <div className="text">
                gravida aliquet vulputate faucibus tristique odio.
              </div>
              <InputText
                type={"email"}
                placeholder={"Email address"}
                className={"mb-4"}
              />
              <InputRadiusBorder value={"Subscribe"} className={"w-auto"} />
            </div>
          </Col>
        </Row>

        {/* Tech Reviews */}
        <Row className="section">
          <Col
            lg={8}
            className="left-section section-has-border not-full-width"
          >
            <div className="section-header">
              <div className="section-name">Tech Reviews</div>
              <div className="page-direct">
                More in Tech Reviews <BsArrowRight />
              </div>
            </div>
            <ArticleHorizontal
              imgURL={imgURL.techReviews1}
              category={"gadget"}
              title={"iPad Pro M1 Chip: Bringing The MacBook Pro Power"}
              desc={
                "Cursus iaculis etiam in In nullam donec sem sed consequat scelerisque nibh amet, massa egestas risus, gravida vel amet, imperdiet …"
              }
            />
            <ArticleHorizontal
              imgURL={imgURL.techReviews2}
              category={"gadget"}
              title={"Dell XPS 13 2021: The best Windows laptop now with OLED"}
              desc={
                "Cursus iaculis etiam in In nullam donec sem sed consequat scelerisque nibh amet, massa egestas risus, gravida vel amet, imperdiet …"
              }
            />
            <ArticleHorizontal
              imgURL={imgURL.techReviews3}
              category={"REVIEWS"}
              title={
                "Watching Their Dust: Photographing Players in Pollination"
              }
              desc={
                "Cursus iaculis etiam in In nullam donec sem sed consequat scelerisque nibh amet, massa egestas risus, gravida vel amet, imperdiet …"
              }
            />
          </Col>
          <Col className="right-section">
            <div className="ad">
              <img src={imgURL.ad} alt="ad" />
            </div>
          </Col>
        </Row>

        {/* Must Read */}
        <Row className="section">
          <Col lg={12} className="left-section section-has-border">
            <div className="section-header">
              <div className="section-name">Must Read</div>
              <div className="page-direct">
                View All <BsArrowRight />
              </div>
            </div>

            <div className="zero-gap-article">
              <ArticleInsideText
                imgURL={imgURL.read1}
                category={"gadget"}
                title={
                  "Spend a Dollar on Upcoming iPhone 13, and How to Save More"
                }
                desc={
                  "Cursus iaculis etiam in In nullam donec sem sed consequat scelerisque nibh amet, massa egestas risus, gravida vel amet, imperdiet …"
                }
              />
              <ArticleInsideText
                imgURL={imgURL.read2}
                category={"must read"}
                title={
                  "No Longer a Dream: Silicon Valley Takes On the Flying Car"
                }
                desc={
                  "Cursus iaculis etiam in In nullam donec sem sed consequat scelerisque nibh amet, massa egestas risus, gravida vel amet, imperdiet …"
                }
              />
            </div>
          </Col>
        </Row>

        {/* Technology */}
        <Row className="section">
          <Col className="left-section section-has-border pb-4">
            <div className="section-header">
              <div className="section-name">Technology</div>
              <div className="page-direct">
                More in Technology <BsArrowRight />
              </div>
            </div>
            <Row>
              <Col md={4}>
                <Article
                  imgURL={imgURL.technology1}
                  title={
                    "A Lesson From the Henrietta Lacks Story: Science Needs Your Cells"
                  }
                  desc={
                    "Cursus iaculis etiam in In nullam donec sem sed consequat scelerisque nibh …"
                  }
                />
              </Col>
              <Col md={4}>
                <Article
                  imgURL={imgURL.technology2}
                  title={
                    "What Moves Gravel-Size Gypsum Crystals Around the Desert?"
                  }
                  desc={
                    "Cursus iaculis etiam in In nullam donec sem sed consequat scelerisque nibh …"
                  }
                />
              </Col>
              <Col md={4}>
                <Article
                  imgURL={imgURL.technology3}
                  title={
                    "Scientists, Feeling Under Siege, March Against Trump Policies"
                  }
                  desc={
                    "Cursus iaculis etiam in In nullam donec sem sed consequat scelerisque nibh …"
                  }
                />
              </Col>
            </Row>
          </Col>
        </Row>

        {/* Gadgets & Software */}
        <Row className="section section-has-border">
          <Col lg={6} className="left-section">
            <div className="section-header">
              <div className="section-name">Gadgets</div>
              <div className="page-direct">
                More in Gadgets <BsArrowRight />
              </div>
            </div>
            <Article
              imgURL={imgURL.gadgets1}
              title={"How a Gadget Drives Human Creativity"}
              desc={
                "Cursus iaculis etiam in In nullam donec sem sed consequat scelerisque nibh amet, massa egestas risus, gravida vel amet, imperdiet volutpat rutrum sociis quis velit, commodo enim aliquet. …"
              }
            />
            <div className="zero-gap-article mt-4">
              <Article
                imgURL={imgURL.gadgets2}
                title={"An IoT Failure Worst Nightmare"}
                desc={
                  "Cursus iaculis etiam in In nullam donec sem sed consequat …"
                }
              />

              <Article
                imgURL={imgURL.gadgets3}
                title={"Dogs Do Their Duty for Science"}
                desc={
                  "Cursus iaculis etiam in In nullam donec sem sed consequat …"
                }
              />
            </div>
          </Col>

          <Col lg={6} className="left-section">
            <div className="section-header">
              <div className="section-name">Software</div>
              <div className="page-direct">
                More in Software <BsArrowRight />
              </div>
            </div>

            <Article
              imgURL={imgURL.software1}
              title={
                "Scientists Fear Climate Data Gap as Trump Aims at Satellites"
              }
              desc={
                "Cursus iaculis etiam in In nullam donec sem sed consequat scelerisque nibh amet, massa egestas risus, gravida vel amet, imperdiet volutpat rutrum sociis quis velit, commodo enim aliquet. …"
              }
            />
            <div className="zero-gap-article mt-4">
              <Article
                imgURL={imgURL.software2}
                title={"Life on CAD: Get to Know the Shortcut"}
                desc={
                  "Cursus iaculis etiam in In nullam donec sem sed consequat …"
                }
              />

              <Article
                imgURL={imgURL.software3}
                title={"Why You Shouldn’t Walk on Escalators"}
                desc={
                  "Cursus iaculis etiam in In nullam donec sem sed consequat …"
                }
              />
            </div>
          </Col>
        </Row>

        {/* Games */}
        <Row className="section">
          <Col lg={12} className="left-section section-has-border">
            <div className="section-header">
              <div className="section-name">Games</div>
              <div className="page-direct">
                View in Games <BsArrowRight />
              </div>
            </div>

            <div className="zero-gap-article">
              <ArticleInsideText
                imgURL={imgURL.games1}
                title={
                  "After Badger Buries Entire Cow Carcass, Scientists Go to the Tape"
                }
                desc={
                  "Cursus iaculis etiam in In nullam donec sem sed consequat scelerisque nibh amet, massa egestas risus, gravida vel amet, imperdiet …"
                }
              />
              <ArticleInsideText
                imgURL={imgURL.games2}
                title={
                  "A Genetic Oddity May Give Octopuses and Squids Their Smarts"
                }
                desc={
                  "Cursus iaculis etiam in In nullam donec sem sed consequat scelerisque nibh amet, massa egestas risus, gravida vel amet, imperdiet …"
                }
              />
            </div>
          </Col>
        </Row>

        {/* Apps */}
        <Row className="section">
          <Col className="left-section">
            <div className="section-header">
              <div className="section-name">Apps</div>
              <div className="page-direct">
                More in Apps <BsArrowRight />
              </div>
            </div>
            <Row>
              <Col md={4}>
                <Article
                  imgURL={imgURL.app1}
                  title={
                    "Antarctic Ice Reveals Earth’s Accelerating Plant Growth"
                  }
                  desc={
                    "Cursus iaculis etiam in In nullam donec sem sed consequat scelerisque nibh …"
                  }
                />
              </Col>
              <Col md={4}>
                <Article
                  imgURL={imgURL.app2}
                  title={
                    "Photos of Jupiter From NASA Spacecraft, Both Near and Far"
                  }
                  desc={
                    "Cursus iaculis etiam in In nullam donec sem sed consequat scelerisque nibh …"
                  }
                />
              </Col>
              <Col md={4}>
                <Article
                  imgURL={imgURL.app3}
                  title={
                    "Hans Dehmelt, Nobel Laureate for Isolating Electrons, Dies at 94"
                  }
                  desc={
                    "Cursus iaculis etiam in In nullam donec sem sed consequat scelerisque nibh …"
                  }
                />
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    </Layout>
  );
}
