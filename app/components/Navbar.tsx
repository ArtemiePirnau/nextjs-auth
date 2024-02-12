import Link from "next/link";
function Navbar() {
  return (
    <header>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/server">Server Auth</Link>
        </li>
        <li>
          <Link href="/client">Client Auth</Link>
        </li>
        <li>
          <Link href="/api/auth/signout">Sign Out</Link>
        </li>
        <li>
          <Link href="/api/auth/signin">Sign In</Link>
        </li>
        <li>
          <Link href="/extra">Extra!</Link>
        </li>
      </ul>
    </header>
  );
}

export default Navbar;
