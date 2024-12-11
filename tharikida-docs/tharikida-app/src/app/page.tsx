import Navbar from "./Navbar/Navbar";
// import styles from "./page.module.css";
// import polikkumImage from "../../public/ith_polikkum.svg";
import Polikkum from "./Navbar/Polikkum";
import {
  Button,
  ArrowButton,
  MusicCard,
  AnimatedBox,
  ThemeProvider,
} from "tharikida-ui";

export default function Docs() {
  return (
    <div
      style={{
        minHeight: "100svh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Navbar />
      <div style={{ top: 100, position: "fixed", zIndex: 10 }}>
        <AnimatedBox color="yellow" width={800} />
        <AnimatedBox color="black" width={800} />
      </div>
      <Polikkum />
      <div style={{ top: 100, position: "fixed", zIndex: -5 }}>
        <AnimatedBox color="yellowgreen" width={800} />
      </div>
      <ThemeProvider>
        <Button> TEST </Button>
        <ArrowButton />
        <MusicCard />
      </ThemeProvider>
    </div>
  );
}
