import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.
  return (
    <VStack
      borderRadius="lg"
      overflow="hidden"
      boxShadow="lg"
      bgColor="white"
      p={4}
    >
      <Image src={imageSrc} alt={title} />
      <Heading as="h3" fontSize="lg" mt={4}>
        {title}
      </Heading>
      {/* <Text mt={2}>{description}</Text> */}
      <HStack mt={4} spacing={2} alignSelf="flex-end">
        <a href="#">
          See more{" "}
          <FontAwesomeIcon icon={faArrowRight} size="1x" />
        </a>
      </HStack>
    </VStack>
  );
};

export default Card;

