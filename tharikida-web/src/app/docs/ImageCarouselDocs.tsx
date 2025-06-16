"use client";

import React from "react";
import { ImageCarousel } from "tharikida-ui/media";
import Code from "./Code";

const images = [
  "https://via.placeholder.com/300x200?text=Image+1",
  "https://via.placeholder.com/300x200?text=Image+2",
  "https://via.placeholder.com/300x200?text=Image+3",
];

const ImageCarouselDocs = () => (
  <div
    style={{
      fontFamily: "Montserrat",
      display: "flex",
      flexDirection: "column",
      gap: 20,
    }}
  >
    <h1>ImageCarousel</h1>
    <p>
      <b>ImageCarousel</b> displays a set of images in a carousel/slider format.
      Useful for galleries, product showcases, and more.
    </p>
    <h2>Usage</h2>
    <Code>{`import { ImageCarousel } from 'tharikida-ui';

const images = [
  "https://via.placeholder.com/300x200?text=Image+1",
  "https://via.placeholder.com/300x200?text=Image+2",
  "https://via.placeholder.com/300x200?text=Image+3"
];

<ImageCarousel images={images} />`}</Code>
    <h2>Example</h2>
    <div style={{ maxWidth: 320 }}>
      <ImageCarousel images={images} />
    </div>
    <h2>Props</h2>
    <ul>
      <li>
        <b>images</b>: <i>string[]</i> — Array of image URLs to display.
      </li>
      <li>
        <b>autoPlay</b>: <i>boolean</i> — (optional) Enable automatic sliding.
      </li>
      <li>
        <b>interval</b>: <i>number</i> — (optional) Time in ms between slides if
        autoPlay is enabled.
      </li>
      <li>
        <b>styles</b>: <i>object</i> — (optional) Custom styles for the carousel
        container.
      </li>
    </ul>
  </div>
);

export default ImageCarouselDocs;
