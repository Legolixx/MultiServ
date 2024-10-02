"use client";

import {
  RiYoutubeFill,
  RiLinkedinFill,
  RiGithubFill,
  RiFacebookFill,
  RiInstagramFill,
} from "react-icons/ri";



import Link from "next/link";

const icons = [
  {
    path: "https://www.youtube.com",
    name: <RiYoutubeFill />,
  },
  {
    path: "https://br.linkedin.com",
    name: <RiLinkedinFill />,
  },
  {
    path: "https://github.com",
    name: <RiGithubFill />,
  },
  {
    path: "https://www.facebook.com",
    name: <RiFacebookFill />,
  },
  {
    path: "https://www.instagram.com",
    name: <RiInstagramFill />,
  },
];

interface SocialsProps {
  containerStyles?: string;
  iconsStyles?: string;
}

const Socials: React.FC<SocialsProps> = ({ containerStyles, iconsStyles }) => {
  return (
    <div className={`${containerStyles}`}>
      {icons.map((icon, index) => {
        return (
          <Link href={icon.path} key={index}>
            <div className={`${iconsStyles}`}>{icon.name}</div>
          </Link>
        );
      })}
    </div>
  );
};

export default Socials;
