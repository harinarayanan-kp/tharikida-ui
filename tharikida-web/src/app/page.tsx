"use client";
import Link from "next/link";
import Navbar from "./Navbar/Navbar";
import Polikkum from "./Navbar/Polikkum";
import {
  AnimatedBox,
  ArrowButton,
  Button,
  Dropdown,
  IconButton,
  TextInput,
} from "tharikida-ui";
import "./globals.css";
import { useEffect, useState } from "react";
import Footer from "./Footer/Footer";

export default function Docs() {
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    // Update window width when the component is mounted
    setWindowWidth(window.innerWidth);

    // Optional: Add a resize event listener if dynamic resizing is needed
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
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
      <section
        className=""
        style={{
          minHeight: "100svh",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "beige",
          gap: 50,
        }}
      >
        <Polikkum />
        <AnimatedBox
          height={150}
          styles={{ zIndex: 10, position: "absolute" }}
          color="yellow"
          width={windowWidth < 800 ? windowWidth : 800}
        />
        <AnimatedBox
          height={150}
          styles={{ zIndex: 1, position: "absolute" }}
          color="black"
          width={windowWidth < 800 ? windowWidth : 800}
        />

        {/* <div
          style={{
            fontFamily: "Inter",
            fontSize: 50,
            fontStyle: "italic",
            fontWeight: "200",
          }}
        >
          “ith scene aan macha!”
        </div> */}

        <div
          style={{
            backgroundColor: "beige",
            display: "flex",
            gap: 20,
            padding: 5,
            borderRadius: 40,
            border: "1px solid black",
          }}
        >
          <Link href={"/"}>
            <div
              style={{
                fontFamily: "Montserrat",
                borderRadius: 40,
                padding: 10,
                paddingLeft: 20,
                paddingRight: 20,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "white",
                backgroundColor: "black",
                cursor: "pointer",
              }}
            >
              Home
            </div>
          </Link>
          <Link href={"/docs"}>
            <div
              style={{
                fontFamily: "Montserrat",
                borderRadius: 40,
                padding: 10,
                paddingLeft: 20,
                paddingRight: 20,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
              }}
            >
              Docs
            </div>
          </Link>
          <div
            style={{
              fontFamily: "Montserrat",
              borderRadius: 40,
              padding: 10,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
            }}
          >
            Playground
          </div>
        </div>
      </section>

      <section
        style={{
          minHeight: "100svh",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "white",
          zIndex: 10,
        }}
      >
        <div
          style={{
            border: "2px solid black ",
            boxSizing: "border-box",
            margin: 20,
          }}
        >
          <div
            style={{
              borderBottom: "2px solid black",
              fontFamily: "Montserrat",
              fontSize: "1.5rem",
              padding: 5,
            }}
          >
            About Tharikida-UI 🌟
          </div>

          <div
            className="about-text"
            style={{
              fontFamily: "Montserrat",
              fontSize: "1.5rem",
              padding: 5,
              width: "100%",
              maxWidth: 800,
            }}
          >
            Welcome to Tharikida-UI &ndash; the <span>adipoli</span> UI library
            that makes your projects look <span>kiduvee</span> and keeps you
            chill while coding! 😎 Tharikida-UI isn&rsquo;t just another boring
            library. It&apos;s your pwoli-mood development buddy, giving you
            stylish, modern components with zero <span>kachra</span> setup. With{" "}
            <span>nalla</span> flexible theming and full-on customization
            options, it&rsquo;s all about making your app look like a superstar.
            🎇 Sit back, relax with some <span>kaapi</span> ☕, and let
            Tharikida-UI handle the boring stuff while you build the next level
            project. Appo eth vibe?
          </div>
        </div>
      </section>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Button
          styles={{
            backgroundColor: "white",
            alignItems: "center",
            justifyContent: "center",
            display: "flex",
            gap: 10,
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="45"
            height="46"
            viewBox="0 0 45 46"
            fill="none"
          >
            <path
              d="M19.9743 0.660643C9.60329 1.82111 1.26139 10.4085 0.134105 20.8527C-0.993178 31.761 5.09415 41.5089 14.3379 45.2224C15.0143 45.4545 15.6906 44.9903 15.6906 44.0619V40.3484C15.6906 40.3484 14.7888 40.5805 13.6615 40.5805C10.5051 40.5805 9.15238 37.7954 8.92692 36.1708C8.70146 35.2424 8.25055 34.5461 7.57418 33.8499C6.89781 33.6178 6.67235 33.6178 6.67235 33.3857C6.67235 32.9215 7.34872 32.9215 7.57418 32.9215C8.92692 32.9215 10.0542 34.5461 10.5051 35.2424C11.6324 37.0992 12.9851 37.5633 13.6615 37.5633C14.5633 37.5633 15.2397 37.3312 15.6906 37.0991C15.9161 35.4745 16.5924 33.8499 17.9452 32.9215C12.7597 31.761 8.92692 28.7438 8.92692 23.6378C8.92692 21.0848 10.0542 18.5318 11.6324 16.675C11.4069 16.2108 11.1815 15.0504 11.1815 13.4257C11.1815 12.4974 11.1815 11.1048 11.8579 9.71225C11.8579 9.71225 15.0143 9.71225 18.1706 12.7294C19.2979 12.2653 20.8761 12.0332 22.4543 12.0332C24.0325 12.0332 25.6107 12.2653 26.9635 12.7294C29.8944 9.71225 33.2762 9.71225 33.2762 9.71225C33.7272 11.1048 33.7272 12.4974 33.7272 13.4257C33.7272 15.2825 33.5017 16.2108 33.2762 16.675C34.8544 18.5318 35.9817 20.8527 35.9817 23.6378C35.9817 28.7438 32.149 31.761 26.9635 32.9215C28.3162 34.082 29.218 36.1708 29.218 38.2596V44.294C29.218 44.9903 29.8944 45.6866 30.7962 45.4545C39.1381 41.9731 45 33.6178 45 23.8699C45 9.94434 33.5017 -0.964003 19.9743 0.660643Z"
              fill="black"
            />
          </svg>
          Show your love — Star on GitHub!
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="46"
            height="44"
            viewBox="0 0 46 44"
            fill="none"
          >
            <path
              d="M23 3.23607L27.4373 16.8926L27.6618 17.5836H28.3883H42.7477L31.1307 26.0238L30.5429 26.4508L30.7675 27.1418L35.2047 40.7984L23.5878 32.3582L23 31.9311L22.4122 32.3582L10.7953 40.7984L15.2325 27.1418L15.4571 26.4508L14.8693 26.0238L3.25233 17.5836H17.6117H18.3382L18.5627 16.8926L23 3.23607Z"
              fill="#FFE085"
              stroke="black"
              strokeWidth="2"
            />
          </svg>
        </Button>
        <a href="https://github.com/harinarayanan-kp/tharikida-ui">
          <ArrowButton />
        </a>
      </div>
      <IconButton
        icon={
          <svg
            width="30"
            height="30"
            viewBox="0 0 30 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M10 20C15.5228 20 20 15.5228 20 10C25.5228 10 30 14.4772 30 20C30 25.5228 25.5228 30 20 30C14.4772 30 10 25.5228 10 20ZM10 20C10 14.4772 14.4772 10 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20Z"
              fill="black"
            />
          </svg>
        }
      />
      <Footer />
    </div>
  );
}
