import React from "react";
import Code from "./Code";
import { MusicCard, ThemeProvider } from "tharikida-ui"; // Adjust the import if needed

const MusicCardDocs = () => {
  const tableRows = [
    {
      prop: "musicName",
      type: "string",
      default: '""',
      description: "The name of the music track.",
    },
    {
      prop: "artist",
      type: "string",
      default: '""',
      description: "The name of the artist.",
    },
    {
      prop: "onPlay",
      type: "() => void",
      default: "undefined",
      description: "Callback function triggered when play button is clicked.",
    },
    {
      prop: "musicUrl",
      type: "string",
      default: '""',
      description: "The URL of the music track.",
    },
    {
      prop: "image",
      type: "string",
      default: '""',
      description: "The URL of the image associated with the music track.",
    },
    {
      prop: "currentPosition",
      type: "number",
      default: "0",
      description: "The current playback position as a percentage (0-100).",
    },
  ];

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
      <h1>Music Card Component</h1>
      <MusicCard
        artist="Artist Name"
        currentPosition={50}
        musicName="Song Title"
        musicUrl="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
        image="https://via.placeholder.com/150"
      />

      <h2>Usage</h2>
      <p>
        Here&apos;s a basic example of how to use the <strong>MusicCard</strong>{" "}
        component in your application:
      </p>
      <Code>{`import { MusicCard } from 'tharikida-ui';

export default function App() {
  return (
    <div>
      <MusicCard
        artist="Artist Name"
        currentPosition={50}
        musicName="Song Title"
        musicUrl="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
        image="https://via.placeholder.com/150"
      />
    </div>
  );
}
`}</Code>
      <MusicCard
        artist="Artist Name"
        currentPosition={50}
        musicName="Song Title"
        musicUrl="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
        image="https://via.placeholder.com/150"
      />
      <p>
        In this example, a music card is displayed with the artist name, song
        title, music URL, and associated images.
      </p>

      <h2>Props</h2>
      <table
        style={{
          width: "100%",
          marginBottom: "20px",
          borderCollapse: "collapse",
          border: "2px solid black",
          borderRadius: "5px",
          overflow: "hidden",
          backgroundColor: "#f3f3f3",
        }}
      >
        <thead>
          <tr
            style={{
              backgroundColor: "#eeeeee",
              fontWeight: "bold",
            }}
          >
            <th
              style={{
                padding: "10px 15px",
                textAlign: "left",
              }}
            >
              Prop
            </th>
            <th
              style={{
                padding: "10px 15px",
                textAlign: "left",
              }}
            >
              Type
            </th>
            <th
              style={{
                padding: "10px 15px",
                textAlign: "left",
              }}
            >
              Default
            </th>
            <th
              style={{
                padding: "10px 15px",
              }}
            >
              Description
            </th>
          </tr>
        </thead>
        <tbody>
          {tableRows.map((row) => (
            <tr
              key={row.prop}
              style={{
                borderBottom: "2px solid #ddd",
              }}
            >
              <td
                style={{
                  padding: "10px 15px",
                  borderRight: "2px solid #ddd",
                }}
              >
                <strong>{row.prop}</strong>
              </td>
              <td
                style={{
                  borderRight: "2px solid #ddd",
                  padding: "10px 15px",
                }}
              >
                {row.type}
              </td>
              <td
                style={{
                  borderRight: "2px solid #ddd",
                  padding: "10px 15px",
                }}
              >
                {row.default}
              </td>
              <td
                style={{
                  padding: "10px 15px",
                }}
              >
                {row.description}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <h2>Customization</h2>
      <p>
        You can customize the music card&apos;s appearance using various props
        like <code>musicName</code>, <code>artist</code>, <code>images</code>,
        and more.
      </p>
      <Code>{`<MusicCard
  musicName="Custom Song Title"
  artist="Custom Artist"
  musicUrl="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3"
  image="https://via.placeholder.com/150"
  currentPosition={75}
/>
`}</Code>
      <MusicCard
        musicName="Custom Song Title"
        artist="Custom Artist"
        musicUrl="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3"
        image="https://via.placeholder.com/150"
        currentPosition={75}
      />

      <h2>Interactive Effects</h2>
      <p>
        The <strong>MusicCard</strong> component includes an interactive effect
        when the play button is clicked. When you press the play button, it
        triggers the <code>onPlay</code> callback function.
      </p>
      <Code>{`<MusicCard
  musicName="Interactive Song"
  artist="Interactive Artist"
  musicUrl="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3"
  image="https://via.placeholder.com/150"
  currentPosition={25}
  onPlay={() => alert("Play button clicked!")}
/>
`}</Code>
      <MusicCard
        musicName="Interactive Song"
        artist="Interactive Artist"
        musicUrl="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3"
        image="https://via.placeholder.com/150"
        currentPosition={25}
        onPlay={() => alert("Play button clicked!")}
      />

      <h2>Theming</h2>
      <p>
        The music card automatically inherits theme styles from the{" "}
        <code>ThemeProvider</code>. If a custom theme is passed to the{" "}
        <code>ThemeProvider</code>, the card will use those theme values (like
        colors, fonts, and spacing).
      </p>
      <Code>{`<ThemeProvider primaryColor="#ff5733" secondaryColor="#33c1ff">
  <MusicCard
    musicName="Themed Song"
    artist="Themed Artist"
    musicUrl="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3"
    image="https://via.placeholder.com/150"
    currentPosition={50}
  />
</ThemeProvider>
`}</Code>
      <ThemeProvider primaryColor="#ff5733" secondaryColor="#33c1ff">
        <MusicCard
          musicName="Themed Song"
          artist="Themed Artist"
          musicUrl="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3"
          image="https://via.placeholder.com/150"
          currentPosition={50}
        />
      </ThemeProvider>

      <h2>Card Variations</h2>
      <p>
        You can create different music card styles by changing the{" "}
        <code>musicName</code>, <code>artist</code>, <code>images</code>, and
        other props.
      </p>
      <Code>{`<MusicCard
  musicName="Variation Song 1"
  artist="Variation Artist 1"
  musicUrl="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3"
  image="https://via.placeholder.com/150"
  currentPosition={30}
/>
<MusicCard
  musicName="Variation Song 2"
  artist="Variation Artist 2"
  musicUrl="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-6.mp3"
  image="https://via.placeholder.com/150"
  currentPosition={60}
/>
`}</Code>
      <MusicCard
        musicName="Variation Song 1"
        artist="Variation Artist 1"
        musicUrl="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3"
        image="https://via.placeholder.com/150"
        currentPosition={30}
      />
      <MusicCard
        musicName="Variation Song 2"
        artist="Variation Artist 2"
        musicUrl="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-6.mp3"
        image="https://via.placeholder.com/150"
        currentPosition={60}
      />
    </div>
  );
};

export default MusicCardDocs;
