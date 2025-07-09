import Link from "next/link";

export default function Menu() {
  return (
    <nav className="menu">
      <div className="list-menu-item">
        <Link href="/" className="menu-item">
          Home
        </Link>
        <Link href="/users" className="menu-item">
          Users
        </Link>
        <Link href="/foods" className="menu-item">
          Foods
        </Link>
      </div>
      <div className="list-menu-item">
        <Link href="/login" className="menu-item">
          Login
        </Link>
      </div>
    </nav>
  );
}