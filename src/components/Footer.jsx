import React from 'react';
import './Footer.css';
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa';
import { BsYoutube } from 'react-icons/bs';
import { PiYoutubeLogo } from 'react-icons/pi';
import { SiLeetcode } from 'react-icons/si';
import { TbBrandLeetcode } from 'react-icons/tb';
import { GiMailbox } from 'react-icons/gi';
import { MdEmail } from 'react-icons/md';

// Configuration object for social media links.
// Only add the social media platforms you use. Leave out or set an empty string for the ones you don't.
const socialLinks = {
  github: 'https://github.com/dvakar13',
  linkedin: 'https://www.linkedin.com/in/divakar-gupta/',
  twitter: '',
  instagram: '',
  leetcode: 'https://leetcode.com/u/dvakar/',
  email: 'divakargupta13@gmail.com',
};

// Mapping of social media keys to their corresponding icons.
const icons = {
  github: <FaGithub />,
  linkedin: <FaLinkedin />,
  twitter: <FaTwitter />,
  instagram: <FaInstagram />,
  leetcode : < SiLeetcode/>,
  email : < MdEmail/>,
};

function Footer() {
  return (
    <footer id = "contact" className="footer">
      <div className="social-icons">
        {Object.entries(socialLinks).map(([key, url]) => {
          // Skip rendering if no URL is provided.
          if (!url) return null;
          return (
            <a
              key={key}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
              aria-label={key}
            >
              {icons[key]}
            </a>
          );
        })}
      </div>
      <p>© {new Date().getFullYear()} My Portfolio. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
