"use client";

import React from "react";
import { Card } from "tharikida-ui/datadisplay";
import Code from "./Code";

const CardDocs = () => (
  <div
    style={{
      fontFamily: "Montserrat",
      display: "flex",
      flexDirection: "column",
      gap: 20,
    }}
  >
    <h1>Card</h1>
    <p>
      <b>Card</b> is a container component for displaying content with a title
      and custom styles.
    </p>
    <h2>Usage</h2>
    <Code>{`import { Card } from 'tharikida-ui/datadisplay';

<Card title="Welcome!">
  <p>This is a simple card component.</p>
</Card>`}</Code>
    <h2>Example</h2>
    <Card title="Welcome!">
      <p>
        This is a simple card component. You can put any content here, such as
        text, images, or even other components.
      </p>
    </Card>
    <h2>Props</h2>
    <ul>
      <li>
        <b>title</b>: <i>string</i> — Title of the card.
      </li>
      <li>
        <b>children</b>: <i>ReactNode</i> — Content inside the card.
      </li>
      <li>
        <b>styles</b>: <i>object</i> — Custom styles for the card.
      </li>
      <li>
        <b>className</b>: <i>string</i> — Additional className for the card.
      </li>
    </ul>
  </div>
);

export default CardDocs;
