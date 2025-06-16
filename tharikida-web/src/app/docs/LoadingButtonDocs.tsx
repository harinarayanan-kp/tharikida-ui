import React from "react";
import { LoadingButton } from "tharikida-ui/button";
import { FaSave } from "react-icons/fa";

const LoadingButtonDocs = () => (
  <div style={{ fontFamily: "Montserrat", maxWidth: 600 }}>
    <h1>LoadingButton</h1>
    <p>
      <b>LoadingButton</b> is a button that shows a loading spinner and changes
      its text after a simulated async action. It supports theming, custom
      icons, and all standard button props.
    </p>
    <h2>Basic Usage</h2>
    <LoadingButton
      initialText="Save"
      loadingText="Saving..."
      doneText="Saved!"
    />
    <pre style={{ background: "#f6f6f6", padding: 12, borderRadius: 6 }}>
      {`<LoadingButton initialText="Save" loadingText="Saving..." doneText="Saved!" />`}
    </pre>
    <h2>With Icon</h2>
    <LoadingButton
      icon={<FaSave />}
      initialText="Save"
      loadingText="Saving..."
      doneText="Saved!"
      type="secondary"
    />
    <pre style={{ background: "#f6f6f6", padding: 12, borderRadius: 6 }}>
      {`<LoadingButton\n  icon={<FaSave />}\n  initialText="Save"\n  loadingText="Saving..."\n  doneText="Saved!"\n  type="secondary"\n/>`}
    </pre>
    <h2>Props</h2>
    <ul>
      <li>
        <b>icon</b>: ReactNode — Optional icon to display
      </li>
      <li>
        <b>type</b>: "primary" | "secondary" — Button style variant
      </li>
      <li>
        <b>initialText</b>: string — Text before loading
      </li>
      <li>
        <b>loadingText</b>: string — Text during loading
      </li>
      <li>
        <b>doneText</b>: string — Text after loading
      </li>
      <li>
        <b>loadingDuration</b>: number — Loading time in ms (default: 1500)
      </li>
      <li>
        <b>styles</b>: React.CSSProperties — Custom styles
      </li>
      <li>
        <b>onClick</b>: {`() => void`} — Click handler (fires before loading)
      </li>
      <li>
        <b>className</b>: string — Custom className
      </li>
      <li>
        <b>children</b>: ReactNode — Additional content
      </li>
    </ul>
  </div>
);

export default LoadingButtonDocs;
