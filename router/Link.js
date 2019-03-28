import { withRouter } from "next/router";
import Router from "./index";

const Link = ({ children, router, href }) => {
  const style = {
    color: router.pathname === href ? "red" : "black"
  };

  const handleClick = e => {
    e.preventDefault();
    Router.push(href);
  };

  return (
    <a href={href} onClick={handleClick} style={style}>
      {children}
    </a>
  );
};

export default withRouter(Link);
