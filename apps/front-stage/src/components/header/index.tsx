import { Link } from "react-router-dom";

export default function index() {
  return (
    <header>
      Header
      <Link to={`contacts/1`}>Your Name</Link>
    </header>
  )
}
