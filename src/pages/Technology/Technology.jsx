import Layout from "layout/Layout";
import "./Technology.scss";
import Article from "components/Article/Article";
import imgURL from "constants/imgURL";
import { AiOutlineDoubleRight } from "react-icons/ai";
import { useParams } from "react-router-dom";

export default function Technology() {
  const param = useParams();

  return (
    <Layout hasSidebar={true}>
      <div className="technology-page">
        <div className="page-title">{param.category}</div>
        <div className="page-content">
          <article>
            <Article
              imgURL={imgURL.top}
              title={
                "Apple opens another megastore in China amid William Barr criticism"
              }
              desc={
                "Cursus iaculis etiam in In nullam donec sem sed consequat scelerisque nibh amet, massa egestas risus, gravida vel amet, imperdiet volutpat rutrum sociis quis velit, commodo enim aliquet. Nunc volutpat tortor libero at augue mattis neque, suspendisse aenean praesent sit habitant laoreet felis lorem nibh diam faucibus viverra penatibus donec etiam sem consectetur vestibulum purus …"
              }
            />
            <div className="read-more">
              Read more <AiOutlineDoubleRight />
            </div>
          </article>

          <article>
            <Article
              imgURL={imgURL.editor1}
              title={
                "Apple opens another megastore in China amid William Barr criticism"
              }
              desc={
                "Cursus iaculis etiam in In nullam donec sem sed consequat scelerisque nibh amet, massa egestas risus, gravida vel amet, imperdiet volutpat rutrum sociis quis velit, commodo enim aliquet. Nunc volutpat tortor libero at augue mattis neque, suspendisse aenean praesent sit habitant laoreet felis lorem nibh diam faucibus viverra penatibus donec etiam sem consectetur vestibulum purus …"
              }
            />
            <div className="read-more">
              Read more <AiOutlineDoubleRight />
            </div>
          </article>

          <article>
            <Article
              imgURL={imgURL.editor2}
              title={
                "Apple opens another megastore in China amid William Barr criticism"
              }
              desc={
                "Cursus iaculis etiam in In nullam donec sem sed consequat scelerisque nibh amet, massa egestas risus, gravida vel amet, imperdiet volutpat rutrum sociis quis velit, commodo enim aliquet. Nunc volutpat tortor libero at augue mattis neque, suspendisse aenean praesent sit habitant laoreet felis lorem nibh diam faucibus viverra penatibus donec etiam sem consectetur vestibulum purus …"
              }
            />
            <div className="read-more">
              Read more <AiOutlineDoubleRight />
            </div>
          </article>

          <article>
            <Article
              imgURL={imgURL.read2}
              title={
                "Apple opens another megastore in China amid William Barr criticism"
              }
              desc={
                "Cursus iaculis etiam in In nullam donec sem sed consequat scelerisque nibh amet, massa egestas risus, gravida vel amet, imperdiet volutpat rutrum sociis quis velit, commodo enim aliquet. Nunc volutpat tortor libero at augue mattis neque, suspendisse aenean praesent sit habitant laoreet felis lorem nibh diam faucibus viverra penatibus donec etiam sem consectetur vestibulum purus …"
              }
            />
            <div className="read-more">
              Read more <AiOutlineDoubleRight />
            </div>
          </article>

          <article>
            <Article
              imgURL={imgURL.techReviews2}
              title={
                "Apple opens another megastore in China amid William Barr criticism"
              }
              desc={
                "Cursus iaculis etiam in In nullam donec sem sed consequat scelerisque nibh amet, massa egestas risus, gravida vel amet, imperdiet volutpat rutrum sociis quis velit, commodo enim aliquet. Nunc volutpat tortor libero at augue mattis neque, suspendisse aenean praesent sit habitant laoreet felis lorem nibh diam faucibus viverra penatibus donec etiam sem consectetur vestibulum purus …"
              }
            />
            <div className="read-more">
              Read more <AiOutlineDoubleRight />
            </div>
          </article>

          <article>
            <Article
              imgURL={imgURL.techReviews3}
              title={
                "Apple opens another megastore in China amid William Barr criticism"
              }
              desc={
                "Cursus iaculis etiam in In nullam donec sem sed consequat scelerisque nibh amet, massa egestas risus, gravida vel amet, imperdiet volutpat rutrum sociis quis velit, commodo enim aliquet. Nunc volutpat tortor libero at augue mattis neque, suspendisse aenean praesent sit habitant laoreet felis lorem nibh diam faucibus viverra penatibus donec etiam sem consectetur vestibulum purus …"
              }
            />
            <div className="read-more">
              Read more <AiOutlineDoubleRight />
            </div>
          </article>

          <article>
            <Article
              imgURL={imgURL.top}
              title={
                "Apple opens another megastore in China amid William Barr criticism"
              }
              desc={
                "Cursus iaculis etiam in In nullam donec sem sed consequat scelerisque nibh amet, massa egestas risus, gravida vel amet, imperdiet volutpat rutrum sociis quis velit, commodo enim aliquet. Nunc volutpat tortor libero at augue mattis neque, suspendisse aenean praesent sit habitant laoreet felis lorem nibh diam faucibus viverra penatibus donec etiam sem consectetur vestibulum purus …"
              }
            />
            <div className="read-more">
              Read more <AiOutlineDoubleRight />
            </div>
          </article>

          <article>
            <Article
              imgURL={imgURL.sidebar}
              title={
                "Apple opens another megastore in China amid William Barr criticism"
              }
              desc={
                "Cursus iaculis etiam in In nullam donec sem sed consequat scelerisque nibh amet, massa egestas risus, gravida vel amet, imperdiet volutpat rutrum sociis quis velit, commodo enim aliquet. Nunc volutpat tortor libero at augue mattis neque, suspendisse aenean praesent sit habitant laoreet felis lorem nibh diam faucibus viverra penatibus donec etiam sem consectetur vestibulum purus …"
              }
            />
            <div className="read-more">
              Read more <AiOutlineDoubleRight />
            </div>
          </article>
        </div>
      </div>
    </Layout>
  );
}
