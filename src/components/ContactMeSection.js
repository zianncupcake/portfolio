import React, { useState } from "react";
import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  Select,
  Textarea,
  VStack,
} from "@chakra-ui/react";
import * as Yup from 'yup';
import FullScreenSection from "./FullScreenSection";
import useSubmit from "../hooks/useSubmit";
import { useAlertContext } from "../context/alertContext";
import { useForm, ValidationError } from '@formspree/react';
import { Form } from "react-router-dom";


const ContactMeSection = () => {
  const { isLoading, submit } = useSubmit();
  const alertContext = useAlertContext();
  const [state, handleSubmit] = useForm("xbjverab");
  const [formValues, setFormValues] = useState({
    firstName: "",
    email: "",
    type: "Job Opportunity",
    comment: "",
  });

  const isFormValid = () => {
    return Object.values(formValues).every(value => value.trim() !== "");
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

    if (state.succeeded) {
      return (
        <FullScreenSection
      isDarkBackground
      backgroundColor="#c7c7bb"
      py={16}
      spacing={8}
      alignItems="center"
    >
      <VStack w="1024px" p={32} alignItems="center" id="contactme-section" >
        <Heading as="h1" id="contactme-section">
          Thank you {formValues.firstName}
        </Heading>
        <Heading as="h1" id="contactme-section">
          Brb...replying to {formValues.email}
        </Heading>
      </VStack>
    </FullScreenSection>
      )
  }


  return (
    <FullScreenSection
      isDarkBackground
      backgroundColor="#c7c7bb"
      py={16}
      spacing={8}
    >
      <VStack w="1024px" p={32} alignItems="center" id="contactme-section" >
        <Heading as="h1" id="contactme-section">
          Drop me a text, I'm lonely
        </Heading>
        <Box p={6} rounded="md" w="100%" >
          <form onSubmit={handleSubmit}>
            <VStack spacing={4}>
              <FormControl>
                <FormLabel htmlFor="firstName" style = {{fontSize:"20px"}} >Name</FormLabel>
                <Input
                  border="2px solid white"
                  id="firstName"
                  name="firstName"
                  value={formValues.firstName}
                  onChange={handleInputChange}
                  style = {{
                  fill:"c7c7bb",
                  color:"white"
                  }}
                />
              </FormControl>
              <FormControl>
                <FormLabel htmlFor="email" style = {{fontSize:"20px"}}>Email Address</FormLabel>
                <Input
                  border="2px solid white"
                  id="email"
                  name="email"
                  type="email"
                  value={formValues.email}
                  onChange={handleInputChange}
                />
                
              </FormControl>

              <FormControl> 
                <FormLabel htmlFor="type" style = {{fontSize:"20px"}}>Type Of Enquiry</FormLabel>
                <Select id="type" name="type" border="2px solid white"  value={formValues.type}
                  onChange={handleInputChange}>
                  <option value="hireMe">Job Opportunity</option>
                  <option value="openSource">
                    Freelance Project Proposal
                  </option>
                  <option value="other">Other</option>
                </Select>
              </FormControl>

              <FormControl>
                <FormLabel htmlFor="comment" style = {{fontSize:"20px"}}>Your Message</FormLabel>
                <Textarea
                  border="2px solid white"
                  id="comment"
                  name="comment"
                  height={250}
                  value={formValues.comment}
                  onChange={handleInputChange}
                />
              </FormControl>
              {isLoading ? (
                <Button isLoading>Loading...</Button>
              ) : (
                <Button type="submit" color="#c7c7bb" width="full" isDisabled={!isFormValid()} >
                  Submit
                </Button>
              )}
            </VStack>
          </form>
        </Box>
      </VStack>
    </FullScreenSection>
    
  );
};

export default ContactMeSection;
