import React from "react";
import { Breadcrumb } from "tharikida-ui/navigation";

const BreadcrumbDocs = () => (
  <div style={{ fontFamily: "Montserrat", maxWidth: 600 }}>
    <h1>Breadcrumb</h1>
    <p>
      <b>Breadcrumb</b> displays the current navigation path and allows users to
      navigate back to previous sections. It uses your theme&apos;s primary
      color and spacing for a consistent look.
    </p>
    <h2>Basic Usage</h2>
    <Breadcrumb
      items={[
        { label: "Home", href: "/" },
        { label: "Docs", href: "/docs" },
        { label: "Components" },
        { label: "Breadcrumb" },
      ]}
    />
    <pre style={{ background: "#f6f6f6", padding: 12, borderRadius: 6 }}>
      {`<Breadcrumb
  items={[
    { label: "Home", href: "/" },
    { label: "Docs", href: "/docs" },
    { label: "Components" },
    { label: "Breadcrumb" },
  ]}
/>`}
    </pre>
    <h2>Custom Separator</h2>
    <Breadcrumb
      items={[
        { label: "Home", href: "/" },
        { label: "Section", href: "/section" },
        { label: "Page" },
      ]}
      separator={<span style={{ margin: "0 8px", color: "#bfa77a" }}>»</span>}
    />
    <pre style={{ background: "#f6f6f6", padding: 12, borderRadius: 6 }}>
      {`<Breadcrumb
  items={[
    { label: "Home", href: "/" },
    { label: "Section", href: "/section" },
    { label: "Page" },
  ]}
  separator={<span style={{ margin: '0 8px', color: '#bfa77a' }}>»</span>}
/>`}
    </pre>
    <h2>Props</h2>
    <ul>
      <li>
        <b>items</b>: Array of <code>{`{ label: string; href?: string }`}</code>{" "}
        (required)
      </li>
      <li>
        <b>separator</b>: ReactNode — Custom separator (default: <code>/</code>)
      </li>
      <li>
        <b>onNavigate</b>: <code>(href: string) =&gt; void</code> — Optional
        navigation handler
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

export default BreadcrumbDocs;
