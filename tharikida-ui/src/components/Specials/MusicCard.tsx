"use client";
import React, { useEffect, useState } from "react";
import { useTheme } from "../../theme/ThemeProvider";

/**
 * `MusicCard` is a visual card component to display music information such as name, artist, album image, and playback controls.
 *
 * @param {object} props - The properties to customize the `MusicCard` component.
 * @param {string} [props.musicName] - The name of the music track.
 * @param {string} [props.artist] - The name of the artist.
 * @param {() => void} [props.onPlay] - Callback function triggered when play button is clicked.
 * @param {string} [props.musicUrl] - The URL of the music track.
 * @param {string} [props.image] - The URL of the image associated with the music track.
 * @param {number} [props.currentPosition] - The current playback position as a percentage (0-100).
 *
 * @returns {JSX.Element} A styled React component that renders the music card.
 */
interface MusicCardProps {
  /** The name of the music track. */
  musicName?: string;

  /** The name of the artist. */
  artist?: string;

  /** Callback function triggered when play button is clicked. */
  onPlay?: () => void;

  /** The URL of the music track. */
  musicUrl?: string;

  /** The URL of the image associated with the music track. */
  image?: string;

  /** The current playback position as a percentage (0-100). */
  currentPosition?: number;
}

/**
 * MusicCard Component
 *
 * A visual card component to display music information such as name, artist, album image,
 * and playback controls.
 *
 * @param musicName - The name of the music track.
 * @param artist - The name of the artist.
 * @param musicUrl - The URL of the music track.
 * @param image - The URL of the album image.
 * @param currentPosition - The current playback position as a percentage.
 *
 * @returns A styled React component that renders the music card.
 */

const MusicCard = ({
  musicName,
  artist,
  musicUrl,
  image,
  currentPosition,
}: MusicCardProps) => {
  const [isPlaying, setisPlaying] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [audio, setAudio] = useState<HTMLAudioElement | null>(null);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const theme = useTheme();
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  useEffect(() => {
    if (musicUrl) {
      const newAudio = new Audio(musicUrl);
      setAudio(newAudio);

      // Cleanup audio when the component unmounts
      return () => {
        newAudio.pause();
        setAudio(null);
      };
    }
  }, [musicUrl]);
  const handlePlay = () => {
    if (audio) {
      if (isPlaying) {
        audio.pause();
      } else {
        audio.play();
      }
      setisPlaying(!isPlaying);
    }
  };
  const currentPositionPercentage = (currentTime / duration) * 100;
  return (
    <div
      style={{
        position: "relative",
        width: "300px",
        borderRadius: "15px",
        overflow: "hidden",
        backgroundColor: theme.backgroundColor,
        border: "2px solid black",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        gap: theme.spacingfactor,
      }}
    >
      <div
        style={{
          width: "100%",
          backgroundColor: "beige",
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "center",
          gap: "10px",
          paddingRight: theme.spacingfactor * 1.5,
          paddingBottom: theme.spacingfactor * 0.5,
          paddingTop: theme.spacingfactor * 0.5,
          borderBottom: "2px solid black",
        }}
      >
        <div
          style={{
            width: theme.spacingfactor * 4,
            height: "2px",
            borderRadius: 5,
            backgroundColor: "#000000",
          }}
        />
        <div
          style={{
            width: theme.spacingfactor * 3,
            height: theme.spacingfactor * 3,
            borderRadius: theme.spacingfactor * 3,
            border: "2px solid black",
          }}
        />
        <div
          style={{
            rotate: "45deg",
            height: theme.spacingfactor * 5,
            width: theme.spacingfactor * 5,
            position: "relative",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: theme.spacingfactor * 2.5,
              left: 0,
              rotate: "90deg",
              width: theme.spacingfactor * 5,
              height: "2px",
              borderRadius: 5,
              backgroundColor: "#000000",
            }}
          />
          <div
            style={{
              position: "absolute",
              top: theme.spacingfactor * 2.5,
              left: 0,
              width: theme.spacingfactor * 5,
              height: "2px",
              borderRadius: 5,
              backgroundColor: "#000000",
            }}
          />
        </div>
      </div>

      <div
        style={{
          display: "flex",
          width: "100%",
          padding: theme.spacingfactor * 5,
          boxSizing: "border-box",
          flexDirection: "column",
          justifyContent: "space-around",
          alignItems: "center",
          gap: theme.spacingfactor * 2,
        }}
      >
        {image ? (
          <div
            style={{
              width: "100%",
              height: "250px",
              border: "3px solid black",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              overflow: "hidden",
              borderRadius: 12,
              marginBottom: theme.spacingfactor * 2,
            }}
          >
            <img
              src={image}
              alt={musicName || "Music cover"}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                borderRadius: 10,
              }}
            />
          </div>
        ) : null}

        <div
          style={{
            paddingBottom: "5px",
            paddingTop: "5px",
            width: "100%",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
            alignItems: "center",
          }}
        >
          <svg
            width="26"
            height="26"
            viewBox="0 0 26 26"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              x="1.1875"
              y="0.608437"
              width="24"
              height="24"
              rx="12"
              fill="#F3FE9D"
            />
            <rect
              x="1.1875"
              y="0.608437"
              width="24"
              height="24"
              rx="12"
              stroke="black"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M16.9984 6.33933C17.2796 6.05815 17.7355 6.05815 18.0167 6.33933L20.1767 8.49933C20.4578 8.78051 20.4578 9.23639 20.1767 9.51757L18.0167 11.6776C17.7355 11.9587 17.2796 11.9587 16.9984 11.6776C16.7173 11.3964 16.7173 10.9405 16.9984 10.6593L17.8573 9.80045H16.884C15.78 9.80045 14.8016 10.3411 13.9268 11.1263C13.6309 11.3919 13.1757 11.3673 12.9101 11.0713C12.6445 10.7754 12.6691 10.3202 12.965 10.0546C13.9736 9.14937 15.2819 8.36045 16.884 8.36045H18.0013L16.9984 7.35757C16.7173 7.07639 16.7173 6.62051 16.9984 6.33933ZM5.98755 9.08045C5.98755 8.68281 6.30991 8.36045 6.70755 8.36045C9.46128 8.36045 11.2008 10.4813 12.6075 12.229C12.6603 12.2947 12.7127 12.3599 12.7648 12.4246C13.4429 13.2687 14.0577 14.0338 14.7221 14.6126C15.4221 15.2224 16.1065 15.5604 16.8805 15.5604H18.0013L16.9984 14.5576C16.7173 14.2764 16.7173 13.8205 16.9984 13.5393C17.2796 13.2582 17.7355 13.2582 18.0167 13.5393L20.1767 15.6993C20.4578 15.9805 20.4578 16.4364 20.1767 16.7176L18.0167 18.8776C17.7355 19.1587 17.2796 19.1587 16.9984 18.8776C16.7173 18.5964 16.7173 18.1405 16.9984 17.8593L17.8573 17.0004H16.8805C15.6339 17.0004 14.6257 16.4385 13.7761 15.6983C13.0696 15.0828 12.4243 14.2994 11.8136 13.5402C11.2096 14.2946 10.5659 15.0677 9.85959 15.68C8.99496 16.4296 7.96818 17.0004 6.71141 17.0004C6.31377 17.0004 5.99141 16.6781 5.99141 16.2804C5.99141 15.8828 6.31377 15.5604 6.71141 15.5604C7.49523 15.5604 8.19887 15.214 8.91631 14.592C9.58884 14.0089 10.2126 13.239 10.8829 12.3977C9.62133 10.9037 8.4011 9.80045 6.70755 9.80045C6.30991 9.80045 5.98755 9.4781 5.98755 9.08045Z"
              fill="#0F1729"
            />
          </svg>

          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14.4381 16.97L1.68755 9.60844L14.4381 2.2469L14.4381 16.97Z"
              fill="#F3FE9D"
              stroke="black"
              strokeWidth="1.00004"
            />
            <path
              d="M17.1882 14.1086L17.1882 4.10819"
              stroke="black"
              strokeWidth="1.00004"
              strokeLinecap="round"
            />
          </svg>

          {isPlaying ? (
            <svg
              onClick={handlePlay}
              width="34"
              height="34"
              viewBox="0 0 34 34"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="17" cy="17" r="16.5" fill="#F3FE9D" stroke="black" />
              <rect
                x="10.5"
                y="11.5"
                width="4"
                height="13"
                fill="white"
                stroke="black"
              />
              <rect
                x="19.5"
                y="11.5"
                width="4"
                height="13"
                fill="white"
                stroke="black"
              />
            </svg>
          ) : (
            <svg
              onClick={handlePlay}
              width="34"
              height="34"
              viewBox="0 0 35 35"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="17.689"
                cy="17.6084"
                r="16.5007"
                fill="#F3FE9D"
                stroke="black"
                strokeWidth="1.00004"
              />
              <path
                d="M14.1889 11.546L24.6894 17.6085L14.1889 23.6709L14.1889 11.546Z"
                fill="url(#paint0_linear_64_24)"
                stroke="black"
                strokeWidth="1.00004"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_64_24"
                  x1="25.6895"
                  y1="17.6085"
                  x2="9.68874"
                  y2="17.6085"
                  gradientUnits="userSpace"
                >
                  <stop offset="0%" stopColor="#F3FE9D" />
                  <stop offset="100%" stopColor="#D1EA8D" />
                </linearGradient>
              </defs>
            </svg>
          )}
        </div>

        <div
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: theme.spacingfactor * 0.5,
          }}
        >
          <span
            style={{
              fontSize: "18px",
              fontWeight: "bold",
              color: theme.textColor,
              textAlign: "center",
            }}
          >
            {musicName}
          </span>
          <span
            style={{
              fontSize: "14px",
              color: theme.textColor,
              textAlign: "center",
            }}
          >
            {artist}
          </span>
        </div>
      </div>
    </div>
  );
};

export default MusicCard;
