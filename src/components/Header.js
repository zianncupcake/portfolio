import React, { useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { Box, HStack } from "@chakra-ui/react";

const socials = [
  {
    icon: faGithub,
    url: "https://github.com/zianncupcake/",
  },
  {
    icon: faLinkedin,
    url: "https://www.linkedin.com/in/zi-ann-cheong-b44800110/",
  },
];

const Header = () => {
  const handleClick = (anchor) => () => {
    const id = `${anchor}-section`;
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <Box
      position="fixed"
      top={0}
      left={0}
      right={0}
      translateY={0}
      transitionProperty="transform"
      transitionDuration=".3s"
      transitionTimingFunction="ease-in-out"
      backgroundColor="#7f867b"
      zIndex={1}
    >
      <Box color="white" maxWidth="1280px" margin="0 auto">
        <HStack
          px={16}
          py={4}
          alignItems="center"
          justifyContent="center"
        >
          <nav>
            {/* Add social media links based on the `socials` data.map function is used to iterate through each social media entry in the socials array. For each entry, an anchor (<a>) tag is generated with the href attribute pointing to the corresponding social media URL. The target="_blank" and rel="noopener noreferrer" attributes are used to open the link in a new tab securely. */}
            <HStack spacing={8}>
              {socials.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={social.icon} size="2x" />
                </a>
              ))}
              <a
                href="/portfolio/#films-section"
                onClick={handleClick("films")}
              >
                My Film Photography
              </a>
              <a
                href="/portfolio/#contactme-section"
                onClick={handleClick("contactme")}
              >
                Contact Me
              </a>
            </HStack>
          </nav>
        </HStack>
      </Box>
    </Box>
  );
};

export default Header;
