import { Link } from "react-router-dom";

export function Letter({letter}) {
  return (
    <Link to={`/filtered/${letter}`}>{letter}</Link>
  );
}

