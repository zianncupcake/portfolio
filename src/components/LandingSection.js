import React from "react";
import { Avatar, Heading, VStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";

const greeting = "hi.";
const bio1 = "welcome.";
const bio2 = "welcome!!!";

const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#af9f8c"
  >
    <VStack spacing={4} alignItems="center">
      <Avatar size="2xl" src="https://media.licdn.com/dms/image/D5603AQEJ0nyMEYpUYw/profile-displayphoto-shrink_800_800/0/1694254694485?e=1704931200&v=beta&t=kRdJHBbNzawcGE0FofQWocJBR_N0W4waska0u3HzqB4" />
      <Heading size="lg" color="white">
        {greeting}
      </Heading>

    </VStack>
  </FullScreenSection>
);

export default LandingSection;
