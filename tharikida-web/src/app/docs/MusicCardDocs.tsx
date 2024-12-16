import React from "react";
import Code from "./Code";
import { MusicCard } from "tharikida-ui"; // Adjust the import if needed

const MusicCardDocs = () => {
  return (
    <div>
      <h1>Music Card Component</h1>
      <MusicCard
        artist="Artist Name"
        currentPosition={50}
        musicName="Song Title"
        musicUrl="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
      />
      <h2>Usage</h2>
      <Code>{`<MusicCard
        artist="Artist Name"
        currentPosition={50}
        musicName="Song Title"
        musicUrl="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
      />`}</Code>
      <h2>Props</h2>
      <ul>
        <li>
          <strong>image</strong>: Image URL for the card (string).
        </li>
        <li>
          <strong>title</strong>: Title of the music (string).
        </li>
        <li>
          <strong>artist</strong>: Artist name (string).
        </li>
      </ul>
    </div>
  );
};

export default MusicCardDocs;
