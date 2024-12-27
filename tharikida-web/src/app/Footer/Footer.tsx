import React from "react";

type Props = {};

const Footer = (props: Props) => {
  return (
    <div
      style={{
        height: "100px",
        backgroundColor: "beige",
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginTop: "10px",
        fontFamily: "montserrat",
        gap: "10px",
      }}
    >
      built by HueShift
      <a href="/">
        <svg
          width="50"
          height="50"
          viewBox="0 0 86 86"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="86" height="86" rx="43" fill="black" />
          <path d="M52.5161 18V68.0207H68V18H52.5161Z" fill="#FFE461" />
          <path d="M18 18V68.0207H33.4839V18H18Z" fill="#CC0100" />
          <path
            d="M49.1628 54.8761V47.9566H33.473L33.473 35.271L21.6658 50.8397L33.4766 67.3649V54.8761H49.1628Z"
            fill="#FFE461"
          />
          <path
            d="M36.827 31.3551V38.2746L52.5011 38.2745V50.9602L64.324 35.3914L52.4967 18.6498V31.3748L36.827 31.3551Z"
            fill="#CC0100"
          />
        </svg>
      </a>
    </div>
  );
};

export default Footer;
