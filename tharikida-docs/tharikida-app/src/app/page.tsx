import styles from "./page.module.css";

export default function Docs() {
  return (
    <div className={styles.page}>
      <h1>Tharikida UI Documentation</h1>
      <p>Welcome to the official documentation for Tharikida UI!</p>

      <section>
        <h2>Installation</h2>
        <pre>
          <code>
            npm install tharikida-ui
            <br />
            or
            <br />
            yarn add tharikida-ui
          </code>
        </pre>
      </section>

      <section>
        <h2>Usage</h2>
        <p>Here’s how to use the components from Tharikida UI:</p>
        <pre>
          <code>
            {`import { Button, Modal } from 'tharikida-ui';`}
            <br />
            {`<Button type="primary" onClick={() => console.log('Clicked!')}>Click Me</Button>`}
          </code>
        </pre>
      </section>

      <section>
        <h2>Components</h2>
        <ul>
          <li>
            <strong>Button:</strong> Customizable buttons for actions.
          </li>
          <li>
            <strong>Modal:</strong> Dialog box for overlays.
          </li>
          <li>
            <strong>Card:</strong> Display content in an elegant card layout.
          </li>
          <li>
            <strong>Alert:</strong> Show notifications or warnings.
          </li>
        </ul>
      </section>

      <section>
        <h2>Customization</h2>
        <p>All components can be customized with props and styles. Example:</p>
        <pre>
          <code>
            {`<Button style={{ backgroundColor: '#F1C40F' }}>Custom Button</Button>`}
          </code>
        </pre>
      </section>
    </div>
  );
}
