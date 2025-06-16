import React, { useState } from "react";
import { Tabs } from "tharikida-ui/navigation";
import Code from "./Code";
import { FaHome, FaUser, FaCog } from "react-icons/fa";

const tabItems = [
  { label: "Home", key: "home", icon: <FaHome /> },
  { label: "Profile", key: "profile", icon: <FaUser /> },
  { label: "Settings", key: "settings", icon: <FaCog /> },
  { label: "Disabled", key: "disabled", disabled: true },
];

const TabsDocs = () => {
  const [active, setActive] = useState("home");
  return (
    <div style={{ maxWidth: 700, margin: "0 auto", fontFamily: "Montserrat" }}>
      <h1>Tabs</h1>
      <p>
        <b>Tabs</b> provide a horizontal navigation bar for switching between
        content sections. Supports icons, theming, disabled state, and extra
        content.
      </p>
      <h2>Basic Usage</h2>
      <Tabs items={tabItems} activeKey={active} onChange={setActive} />
      <Code>{`
import { Tabs } from 'tharikida-ui/navigation';
import { FaHome, FaUser, FaCog } from 'react-icons/fa';

const tabItems = [
  { label: 'Home', key: 'home', icon: <FaHome /> },
  { label: 'Profile', key: 'profile', icon: <FaUser /> },
  { label: 'Settings', key: 'settings', icon: <FaCog /> },
  { label: 'Disabled', key: 'disabled', disabled: true },
];

const [active, setActive] = useState('home');

<Tabs items={tabItems} activeKey={active} onChange={setActive} />
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
              {`{ label: string; key: string; icon?: React.ReactNode; disabled?: boolean }`}
              &gt;
            </td>
            <td style={{ border: "1px solid #ccc", padding: 6 }}>Tab items</td>
          </tr>
          <tr>
            <td style={{ border: "1px solid #ccc", padding: 6 }}>activeKey</td>
            <td style={{ border: "1px solid #ccc", padding: 6 }}>string</td>
            <td style={{ border: "1px solid #ccc", padding: 6 }}>
              Currently selected tab key
            </td>
          </tr>
          <tr>
            <td style={{ border: "1px solid #ccc", padding: 6 }}>onChange</td>
            <td style={{ border: "1px solid #ccc", padding: 6 }}>
              (key: string) =&gt; void
            </td>
            <td style={{ border: "1px solid #ccc", padding: 6 }}>
              Callback when a tab is selected
            </td>
          </tr>
          <tr>
            <td style={{ border: "1px solid #ccc", padding: 6 }}>styles</td>
            <td style={{ border: "1px solid #ccc", padding: 6 }}>
              React.CSSProperties
            </td>
            <td style={{ border: "1px solid #ccc", padding: 6 }}>
              Custom styles for the root element
            </td>
          </tr>
          <tr>
            <td style={{ border: "1px solid #ccc", padding: 6 }}>className</td>
            <td style={{ border: "1px solid #ccc", padding: 6 }}>string</td>
            <td style={{ border: "1px solid #ccc", padding: 6 }}>
              Custom className for the root element
            </td>
          </tr>
          <tr>
            <td style={{ border: "1px solid #ccc", padding: 6 }}>
              tabBarExtraContent
            </td>
            <td style={{ border: "1px solid #ccc", padding: 6 }}>
              React.ReactNode
            </td>
            <td style={{ border: "1px solid #ccc", padding: 6 }}>
              Optional extra content on the right of the tab bar
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default TabsDocs;
