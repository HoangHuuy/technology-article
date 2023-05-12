import { BsSearch } from "react-icons/bs";
import { Link, useParams } from "react-router-dom";
import "./Header.scss";
import imgURL from "constants/imgURL";
import categoryList from "constants/categoryList";

export default function Header() {
  const param = useParams();

  return (
    <header
      id="web-header"
      className={`${(param.category || param.post) && "w-b-header"}`}
    >
      {/* Main nav */}
      <ul className="main-nav">
        <li>
          <Link to={"/"}>
            <img src={imgURL.logo} alt="logo" />
          </Link>
        </li>
        {categoryList.map((category) => (
          <li className={param.category === category.id ? "active-nav" : ""}>
            <Link to={`/category/${category.id}`}>{category.name}</Link>
          </li>
        ))}
      </ul>

      {/* Side nav */}
      <ul className="side-nav">
        <li>subscribe</li>
        <li>sign in</li>
        <li>
          <BsSearch />
        </li>
      </ul>

      {/* side nav */}
    </header>
  );
}
