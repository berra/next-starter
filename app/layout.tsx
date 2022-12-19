import NavLink from "./components/NavLink";

import "../ui/styles/global.scss";
import Link from "next/link";
import Avatar from "./components/Avatar/Avatar";
import Image from "next/image";
// import { CustomProperties } from "../ui/styles/customPropertiesTypes";
import AppHeader from "./components/AppHeader/AppHeader";

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html>
      <head>
        <meta content="width=device-width, initial-scale=1.0" name="viewport" />
        <title>Test</title>
      </head>
      <body>
        <AppHeader>
          <Link style={{ color: "var(--primary-color)" }} href="/">
            LOGO
          </Link>
          <nav className="cluster">
            <NavLink className="home" href="/">
              Home
            </NavLink>
            <NavLink href="/login">Log in</NavLink>
            <NavLink href="/playground">Playground</NavLink>
          </nav>
          <Avatar
            style={{ "--avatar-size": "var(--s4)" }}
            className="[ ml-auto ]"
          >
            <Image
              width={42}
              height={42}
              alt=""
              src="https://randomuser.me/api/portraits/lego/6.jpg"
            />
          </Avatar>
        </AppHeader>

        <main id="main">{children}</main>

        <footer className="p-200 mt-900 border-t-thick">
          <p>Footer &copy; 2022</p>
        </footer>
      </body>
    </html>
  );
}
