import React from "react";
import { Navbar } from "tharikida-ui/navigation";
import { FaUserCircle } from "react-icons/fa";
import Image from "next/image";

const NavbarDocs = () => (
  <div style={{ fontFamily: "Montserrat", maxWidth: 700 }}>
    <h1>Navbar</h1>
    <p>
      <b>Navbar</b> is a responsive, theme-aware navigation bar for your app. It
      supports a logo, navigation links, and right-side content.
    </p>
    <h2>Basic Usage</h2>
    <Navbar
      logo={
        <Image src="/tharikida-logo.png" alt="Logo" height={32} width={32} />
      }
      links={[
        { label: "Home", href: "/", active: true },
        { label: "Docs", href: "/docs" },
        { label: "Playground", href: "/playground" },
      ]}
      rightContent={<FaUserCircle size={28} />}
    />
    <pre style={{ background: "#f6f6f6", padding: 12, borderRadius: 6 }}>
      {`<Navbar
  logo={<Image src="/tharikida-logo.png" alt="Logo" height={32} width={32} />}
  links={[
    { label: "Home", href: "/", active: true },
    { label: "Docs", href: "/docs" },
    { label: "Playground", href: "/playground" },
  ]}
  rightContent={<FaUserCircle size={28} />}
/>`}
    </pre>
    <h2>Props</h2>
    <ul>
      <li>
        <b>logo</b>: ReactNode — Logo element (image, text, etc.)
      </li>
      <li>
        <b>links</b>: Array of{" "}
        <code>{`{ label: string; href: string; active?: boolean }`}</code> —
        Navigation links
      </li>
      <li>
        <b>rightContent</b>: ReactNode — Content on the right (profile, actions,
        etc.)
      </li>
      <li>
        <b>styles</b>: React.CSSProperties — Custom styles
      </li>
      <li>
        <b>className</b>: string — Custom className
      </li>
    </ul>
  </div>
);

export default NavbarDocs;
