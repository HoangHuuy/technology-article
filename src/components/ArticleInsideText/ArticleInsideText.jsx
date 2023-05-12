import { Link, useNavigate } from "react-router-dom";
import "./ArticleInsideText.scss";
import textToURL from "helper/textToURL";

export default function ArticleInsideText({
  size,
  imgURL,
  title,
  desc,
  category,
}) {
  const navigate = useNavigate();
  const redirect = () => navigate(`/post/${textToURL(title)}`);

  return (
    <div
      className="article-text-inside"
      style={{
        backgroundImage: `url('${imgURL}')`,
      }}
    >
      <div className={`content ${size ?? "normal"}`}>
        <div className="category">
          {!!category && (
            <Link to={`/category/${textToURL(category)}`}>{category}</Link>
          )}
        </div>
        <div onClick={redirect} className="title">
          {title}
        </div>
        <div className="desc"> {desc}</div>
      </div>
    </div>
  );
}
