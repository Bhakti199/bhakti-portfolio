import React from "react";
import "./HomePage.css";
import { FaHeart } from "react-icons/fa";
import { SiHashnode } from "react-icons/si";
import { FiTwitter, FiGithub } from "react-icons/fi";
import { RiLinkedinLine } from "react-icons/ri";
export const HomePage = () => {
  return (
    <div className="home-page">
      <img
        className="portfolio-image"
        src="https://res.cloudinary.com/bhakti1801/image/upload/v1658061287/WhatsApp_Image_2022-03-12_at_20.43.49__1_-removebg-preview-removebg-preview_qmu99l.png"
        alt=""
      />
      <div className="intro-title">Hello, I'm Bhakti Kharatkar</div>
      <div className="intro-text">
        I'm Frontend Developer. I <FaHeart color="var(--red-color)" /> building
        projects and writing blogs.
      </div>
      <div className="social-links">
        <a
          href="https://github.com/Bhakti199"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FiGithub
            size={30}
            title="github"
            className="pointer"
            color="var(--white-color)"
          />
        </a>
        <a
          href="https://bhaktee.hashnode.dev/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <SiHashnode
            size={30}
            title="hashnode"
            className="pointer"
            color="var(--white-color)"
          />
        </a>
        <a
          href="https://twitter.com/Bhaktee_"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FiTwitter
            size={30}
            title="twitter"
            className="pointer"
            color="var(--white-color)"
          />
        </a>
        <a
          href="https://www.linkedin.com/in/bhakti-kharatkar-33178a200/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <RiLinkedinLine
            size={35}
            title="linkedin"
            className="pointer"
            color="var(--white-color)"
          />
        </a>
      </div>
    </div>
  );
};
