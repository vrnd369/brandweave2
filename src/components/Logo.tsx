import { Link, useNavigate } from "react-router-dom";

export function Logo() {
  const navigate = useNavigate();

  return (
    <Link to="/" onClick={() => navigate("/")}>
      <img
        src="/images/brand wave png[1].png"
        alt="BrandWeave Logo"
        style={{ width: 200, height: 60 }}
      />
    </Link>
  );
}
