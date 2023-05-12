import { useNavigate } from "react-router-dom";
import "./Article.scss";
import textToURL from "helper/textToURL";

export default function Article({ imgURL, title, desc }) {
  const navigate = useNavigate();
  const redirect = () => navigate(`/post/${textToURL(title)}`);

  return (
    <div className="article">
      <div className="article-img">
        <img onClick={redirect} src={imgURL} alt="article" />
      </div>
      <div onClick={redirect} className="title">
        {title}
      </div>
      <div className="desc">{desc ?? ""}</div>
    </div>
  );
}
