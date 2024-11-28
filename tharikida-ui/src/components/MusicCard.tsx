"use client";
import React, { useState } from "react";
import { useTheme } from "../theme/ThemeProvider";

const TopBar = (
  <div
    style={{
      width: "100%",
      backgroundColor: "beige",
      display: "flex",
      justifyContent: "flex-end",
      alignItems: "center",
      gap: "10px",
    }}
  >
    <div
      className="Line"
      style={{
        width: "24px",
        height: "3px",
        borderRadius: 5,
        margin: "5px",
        backgroundColor: "#000000",
      }}
    />
    <div
      className="Line"
      style={{
        width: "20px",
        height: "20px",
        borderRadius: 24,
        margin: "5px",
        border: "3px solid black",
      }}
    />
    <div
      style={{
        rotate: "45deg",
        height: "30px",
        width: "30px",
        margin: "5px",
        position: "relative",
      }}
    >
      <div
        style={{
          position: "absolute", // Stack the items on top of each other
          top: 15, // Start from the top of the container
          left: 0,
          rotate: "90deg",
          width: "30px",
          height: "3px",
          borderRadius: 5,
          backgroundColor: "#000000",
        }}
      />
      <div
        style={{
          position: "absolute", // Stack the items on top of each other
          top: 15, // Start from the top of the container
          left: 0,
          width: "30px",
          height: "3px",
          borderRadius: 5,
          backgroundColor: "#000000",
        }}
      />
    </div>
  </div>
);

const MusicControls = (
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
        fill-rule="evenodd"
        clip-rule="evenodd"
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
        stroke-width="1.00004"
      />
      <path
        d="M17.1882 14.1086L17.1882 4.10819"
        stroke="black"
        stroke-width="1.00004"
        stroke-linecap="round"
      />
    </svg>

    <svg
      width="35"
      height="35"
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
        stroke-width="1.00004"
      />
      <path
        d="M14.1889 11.546L24.6894 17.6085L14.1889 23.6709L14.1889 11.546Z"
        fill="url(#paint0_linear_64_24)"
        stroke="black"
        stroke-width="1.00004"
      />
      <defs>
        <linearGradient
          id="paint0_linear_64_24"
          x1="25.6895"
          y1="17.6085"
          x2="9.68874"
          y2="17.6085"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#AA5C5C" />
          <stop offset="1" stop-color="#FFCCCC" />
        </linearGradient>
      </defs>
    </svg>

    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5.94031 2.24692L18.6909 9.60846L5.94031 16.97L5.94031 2.24692Z"
        fill="#F3FE9D"
        stroke="black"
        stroke-width="1.00004"
      />
      <path
        d="M3.19019 5.10826L3.19019 15.1087"
        stroke="black"
        stroke-width="1.00004"
        stroke-linecap="round"
      />
    </svg>

    <svg
      width="26"
      height="26"
      viewBox="0 0 26 26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="1.19067"
        y="0.608437"
        width="24"
        height="24"
        rx="12"
        fill="#F3FE9D"
      />
      <rect
        x="1.19067"
        y="0.608437"
        width="24"
        height="24"
        rx="12"
        stroke="black"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M13.1907 8.18031C11.8661 6.63667 9.65275 6.15962 7.99316 7.57313C6.33356 8.98664 6.09991 11.3499 7.40321 13.0217C8.4868 14.4116 11.7661 17.3432 12.8409 18.292C12.9611 18.3982 13.0213 18.4513 13.0914 18.4721C13.1526 18.4903 13.2196 18.4903 13.2808 18.4721C13.351 18.4513 13.4111 18.3982 13.5313 18.292C14.6061 17.3432 17.8854 14.4116 18.9691 13.0217C20.2723 11.3499 20.0672 8.97177 18.3791 7.57313C16.6909 6.17449 14.5152 6.63667 13.1907 8.18031Z"
        fill="white"
        stroke="black"
        stroke-width="1.47222"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  </div>
);

const MusicCard = () => {
  const [isPlaying, setisPlaying] = useState(false);
  const theme = useTheme(); // Get the theme object

  const handlePlay = () => {
    setisPlaying(!isPlaying);
  };

  return (
    <div
      style={{
        width: "300px",
        borderRadius: "15px",
        overflow: "hidden",
        backgroundColor: theme.backgroundColor,
        border: "2px solid black",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        gap: "5px",
      }}
    >
      {TopBar}

      <div
        style={{
          display: "flex",
          width: "100%",
          padding: "20px",
          boxSizing: "border-box",
          flexDirection: "column",
          justifyContent: "space-around",
          alignItems: "center",
          gap: "10px",
        }}
      >
        <div>
          <img
            style={{
              width: "200px",
              height: "200px",
              objectFit: "cover",
              border: "3px solid black",
            }}
            src="https://cdn.pixabay.com/photo/2016/11/21/11/55/fashion-1844888_1280.jpg"
          ></img>
        </div>

        {MusicControls}

        <div
          style={{
            width: "100%",
            height: theme.spacingfactor,
            borderRadius: "10px",
            border: "2px solid black",
          }}
        >
          <div
            style={{
              width: "20%",
              height: "100%",
              backgroundColor: theme.primaryColor,
              borderRadius: theme.spacingfactor * 5,
              transition: "width 0.3s ease",
            }}
          ></div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            fontFamily: theme.fontFamily,
            paddingBottom: theme.spacingfactor * 2.5,
          }}
        >
          <div style={{fontSize: theme.fontSize }}>MUSIC NAME</div>
          <div style={{fontSize: theme.fontSize * 0.7 }}>Artist</div>
        </div>
      </div>
    </div>
  );
};

export default MusicCard;
