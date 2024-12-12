import Link from "next/link";
import React from "react";
import { Button } from "tharikida-ui";
import "./Navbar.css";

const Navbar = () => {
  const githubIcon = (
    <a
      href="https://github.com/harinarayanan-kp/tharikida-ui"
      style={{ cursor: "pointer" }}
    >
      <svg
        width="45"
        height="61"
        viewBox="0 0 62 61"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M27.6084 0.47501C13.425 2.01668 2.01669 13.425 0.475028 27.3C-1.06664 41.7917 7.25836 54.7417 19.9 59.675C20.825 59.9833 21.75 59.3667 21.75 58.1333V53.2C21.75 53.2 20.5167 53.5083 18.975 53.5083C14.6584 53.5083 12.8084 49.8083 12.5 47.65C12.1917 46.4167 11.575 45.4917 10.65 44.5667C9.72503 44.2583 9.41669 44.2583 9.41669 43.95C9.41669 43.3333 10.3417 43.3333 10.65 43.3333C12.5 43.3333 14.0417 45.4917 14.6584 46.4167C16.2 48.8833 18.05 49.5 18.975 49.5C20.2084 49.5 21.1334 49.1917 21.75 48.8833C22.0584 46.725 22.9834 44.5667 24.8334 43.3333C17.7417 41.7917 12.5 37.7833 12.5 31C12.5 27.6083 14.0417 24.2167 16.2 21.75C15.8917 21.1333 15.5834 19.5917 15.5834 17.4333C15.5834 16.2 15.5834 14.35 16.5084 12.5C16.5084 12.5 20.825 12.5 25.1417 16.5083C26.6834 15.8917 28.8417 15.5833 31 15.5833C33.1584 15.5833 35.3167 15.8917 37.1667 16.5083C41.175 12.5 45.8 12.5 45.8 12.5C46.4167 14.35 46.4167 16.2 46.4167 17.4333C46.4167 19.9 46.1084 21.1333 45.8 21.75C47.9584 24.2167 49.5 27.3 49.5 31C49.5 37.7833 44.2584 41.7917 37.1667 43.3333C39.0167 44.875 40.25 47.65 40.25 50.425V58.4417C40.25 59.3667 41.175 60.2917 42.4084 59.9833C53.8167 55.3583 61.8334 44.2583 61.8334 31.3083C61.8334 12.8083 46.1084 -1.68332 27.6084 0.47501Z"
          fill="black"
        />
      </svg>
    </a>
  );
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: "row",
        boxSizing: "border-box",
        padding: "10px 20px",
        backgroundColor: "lightgreen",
        fontFamily: "Montserrat, sans-serif",
        fontSize: "2rem",
      }}
    >
      <style>
        @import
        url(&aposhttps://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap&apos);
      </style>

      <Link
        href="/"
        style={{
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          gap: "25px",
          textDecoration: "underline",
        }}
      >
        <svg
          width="63"
          height="44"
          viewBox="0 0 63 44"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M28.1093 40.1525L27.0725 42.586L28.1093 40.1525ZM25.0359 38.0402L23.1392 39.8841L23.1392 39.8841L25.0359 38.0402ZM22.9823 34.8789L25.436 33.8908L25.436 33.8908L22.9823 34.8789ZM11.7049 38.2489C9.41703 38.2489 8.20383 37.7821 7.5258 37.2798C6.88135 36.8023 6.38879 36.0474 6.06535 34.719C5.72948 33.3395 5.63278 31.5733 5.64654 29.3384C5.65332 28.2369 5.68547 27.0783 5.7171 25.8328C5.74845 24.5984 5.77885 23.2918 5.77885 21.9471H0.488352C0.488352 23.2184 0.459603 24.466 0.428307 25.6984C0.397294 26.9198 0.363315 28.1407 0.356141 29.3059C0.341989 31.6047 0.426075 33.9212 0.925012 35.9705C1.43638 38.0708 2.43262 40.0906 4.37631 41.5307C6.28642 42.9459 8.76069 43.5394 11.7049 43.5394V38.2489ZM5.77885 21.9471C5.77885 12.9438 13.0774 5.64525 22.0807 5.64525V0.354752C10.1556 0.354752 0.488352 10.022 0.488352 21.9471H5.77885ZM57.3296 21.9471C57.3296 24.6594 57.3912 27.0246 57.3222 29.2398C57.2537 31.4386 57.0583 33.1945 56.635 34.5632C56.2269 35.883 55.6522 36.7006 54.8859 37.2335C54.091 37.7863 52.7785 38.2489 50.5013 38.2489V43.5394C53.4563 43.5394 55.944 42.9417 57.9065 41.577C59.8975 40.1923 61.0372 38.2352 61.6894 36.1263C62.3264 34.0662 62.5374 31.7393 62.6101 29.4045C62.6824 27.0861 62.6201 24.4669 62.6201 21.9471H57.3296ZM41.0278 5.64525C50.0311 5.64525 57.3296 12.9438 57.3296 21.9471H62.6201C62.6201 10.022 52.9529 0.354752 41.0278 0.354752V5.64525ZM43.673 21.9471C43.673 13.9516 39.3259 6.97447 32.8788 3.24504L30.2297 7.82453C35.1092 10.6472 38.3825 15.9164 38.3825 21.9471H43.673ZM30.2297 3.24504C23.7826 6.97447 19.4355 13.9516 19.4355 21.9471H24.7259C24.7259 15.9164 27.9993 10.6472 32.8788 7.82453L30.2297 3.24504ZM32.8788 7.82453C35.2739 6.43904 38.0541 5.64525 41.0278 5.64525V0.354752C37.0993 0.354752 33.4083 1.4063 30.2297 3.24504L32.8788 7.82453ZM22.0807 5.64525C25.0544 5.64525 27.8346 6.43904 30.2297 7.82453L32.8788 3.24504C29.7002 1.4063 26.0092 0.354752 22.0807 0.354752V5.64525ZM38.563 31.15C38.563 32.0924 38.3824 33.0239 38.0334 33.8908L42.9409 35.8671C43.544 34.3695 43.8535 32.7668 43.8535 31.15H38.563ZM38.0334 33.8908C37.6843 34.7575 37.1746 35.5403 36.5369 36.1962L40.3301 39.8841C41.4518 38.7304 42.3377 37.3648 42.9409 35.8671L38.0334 33.8908ZM36.5369 36.1962C35.8993 36.852 35.1464 37.3682 34.3232 37.7189L36.3969 42.586C37.8725 41.9574 39.2083 41.038 40.3301 39.8841L36.5369 36.1962ZM34.3232 37.7189C33.5002 38.0695 32.6209 38.2489 31.7347 38.2489V43.5394C33.3367 43.5394 34.9211 43.2148 36.3969 42.586L34.3232 37.7189ZM31.7347 38.2489C30.8485 38.2489 29.9691 38.0695 29.1461 37.7189L27.0725 42.586C28.5483 43.2148 30.1327 43.5394 31.7347 43.5394V38.2489ZM29.1461 37.7189C28.323 37.3682 27.5701 36.852 26.9325 36.1962L23.1392 39.8841C24.2611 41.038 25.5969 41.9574 27.0725 42.586L29.1461 37.7189ZM26.9325 36.1962C26.2948 35.5403 25.7851 34.7575 25.436 33.8908L20.5285 35.8671C21.1317 37.3648 22.0176 38.7304 23.1392 39.8841L26.9325 36.1962ZM25.436 33.8908C25.0869 33.0239 24.9064 32.0924 24.9064 31.15H19.6159C19.6159 32.7668 19.9254 34.3695 20.5285 35.8671L25.436 33.8908Z"
            fill="black"
          />
        </svg>
        Tharikida-ui
      </Link>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 16,
        }}
      >
        <Button className="bg-change">Home</Button>
        {githubIcon}
      </div>
    </div>
  );
};

export default Navbar;
