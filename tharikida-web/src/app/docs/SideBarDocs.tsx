import React, { useState } from "react";
import { SideBar } from "tharikida-ui/navigation";
import Code from "./Code";
import { FaHome, FaUser, FaCog } from "react-icons/fa";

const items = [
  { label: "Home", key: "home", icon: <FaHome /> },
  { label: "Profile", key: "profile", icon: <FaUser /> },
  { label: "Settings", key: "settings", icon: <FaCog /> },
];

const SideBarDocs = () => {
  const [active, setActive] = useState("home");
  return (
    <div style={{ maxWidth: 700, margin: "0 auto", fontFamily: "Montserrat" }}>
      <h1>SideBar</h1>
      <p>
        <b>SideBar</b> provides a vertical navigation menu, supporting icons,
        theming, pressed/active states, and custom header/footer.
      </p>
      <h2>Basic Usage</h2>
      <div
        style={{
          display: "flex",
          border: "1px solid #eee",
          borderRadius: 8,
          overflow: "hidden",
          minHeight: 220,
        }}
      >
        <SideBar
          items={items}
          activeKey={active}
          onSelect={setActive}
          header={<b>My App</b>}
          footer={<span style={{ fontSize: 12 }}>© 2025</span>}
        />
        <div style={{ flex: 1, padding: 32 }}>
          <h3>Current: {active}</h3>
        </div>
      </div>
      <Code>{`
import { SideBar } from 'tharikida-ui/navigation';
import { FaHome, FaUser, FaCog } from 'react-icons/fa';

const items = [
  { label: 'Home', key: 'home', icon: <FaHome /> },
  { label: 'Profile', key: 'profile', icon: <FaUser /> },
  { label: 'Settings', key: 'settings', icon: <FaCog /> },
];

const [active, setActive] = useState('home');

<SideBar
  items={items}
  activeKey={active}
  onSelect={setActive}
  header={<b>My App</b>}
  footer={<span style={{ fontSize: 12 }}>© 2025</span>}
/>
`}</Code>
      <h2>Props</h2>
      <table style={{ width: "100%", borderCollapse: "collapse" }}>
        <thead>
          <tr>
            <th style={{ border: "1px solid #ccc", padding: 6 }}>Prop</th>
            <th style={{ border: "1px solid #ccc", padding: 6 }}>Type</th>
            <th style={{ border: "1px solid #ccc", padding: 6 }}>
              Description
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ border: "1px solid #ccc", padding: 6 }}>items</td>
            <td style={{ border: "1px solid #ccc", padding: 6 }}>
              Array&lt;
              {`{ label: string; key: string; icon?: React.ReactNode }`}&gt;
            </td>
            <td style={{ border: "1px solid #ccc", padding: 6 }}>
              Sidebar items
            </td>
          </tr>
          <tr>
            <td style={{ border: "1px solid #ccc", padding: 6 }}>activeKey</td>
            <td style={{ border: "1px solid #ccc", padding: 6 }}>string</td>
            <td style={{ border: "1px solid #ccc", padding: 6 }}>
              Currently selected key
            </td>
          </tr>
          <tr>
            <td style={{ border: "1px solid #ccc", padding: 6 }}>onSelect</td>
            <td style={{ border: "1px solid #ccc", padding: 6 }}>
              (key: string) =&gt; void
            </td>
            <td style={{ border: "1px solid #ccc", padding: 6 }}>
              Callback when an item is selected
            </td>
          </tr>
          <tr>
            <td style={{ border: "1px solid #ccc", padding: 6 }}>styles</td>
            <td style={{ border: "1px solid #ccc", padding: 6 }}>
              React.CSSProperties
            </td>
            <td style={{ border: "1px solid #ccc", padding: 6 }}>
              Custom styles for the sidebar
            </td>
          </tr>
          <tr>
            <td style={{ border: "1px solid #ccc", padding: 6 }}>className</td>
            <td style={{ border: "1px solid #ccc", padding: 6 }}>string</td>
            <td style={{ border: "1px solid #ccc", padding: 6 }}>
              Custom className for the sidebar
            </td>
          </tr>
          <tr>
            <td style={{ border: "1px solid #ccc", padding: 6 }}>header</td>
            <td style={{ border: "1px solid #ccc", padding: 6 }}>
              React.ReactNode
            </td>
            <td style={{ border: "1px solid #ccc", padding: 6 }}>
              Optional header content
            </td>
          </tr>
          <tr>
            <td style={{ border: "1px solid #ccc", padding: 6 }}>footer</td>
            <td style={{ border: "1px solid #ccc", padding: 6 }}>
              React.ReactNode
            </td>
            <td style={{ border: "1px solid #ccc", padding: 6 }}>
              Optional footer content
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default SideBarDocs;
