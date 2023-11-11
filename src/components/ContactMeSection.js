import React from "react";
import { useFormik } from "formik";
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

const ContactMeSection = () => {
  const { isLoading, submit } = useSubmit();
  const alertContext = useAlertContext();

  const formik = useFormik({
    initialValues: {
      firstName: "",
      email: "",
      type: "",
      comment: "",
    },
    onSubmit: async (values) => {
      try {
        const response = await submit(values);
        if (response.type === "success") {
          alertContext.onOpen({
            status: "success",
            title: "Form submitted successfully!",
            description: `Thank you, ${values.firstName}! We'll get back to you soon.`,
          });
          formik.resetForm();
        } else {
          alertContext.onOpen({
            status: "error",
            title: "Form submission failed",
            description: "An error occurred while submitting the form. Please try again later.",
          });
        }
      } catch (error) {
        console.error(error);
        alertContext.onOpen({
          status: "error",
          title: "Form submission failed",
          description: "An error occurred while submitting the form. Please try again later.",
        });
      }
    },
    validationSchema: Yup.object({
      firstName: Yup.string().required("First name is required"),
      email: Yup.string()
        .email("Invalid email address")
        .required("Email address is required"),
      type: Yup.string().required("Please select a type of enquiry"),
      comment: Yup.string().required("Please enter your message"),
    }),
  });

  return (
    <FullScreenSection
      isDarkBackground
      backgroundColor="#c7c7bb"
      py={16}
      spacing={8}
    >
      <VStack w="1024px" p={32} alignItems="flex-start" id="contactme-section" >
        <Heading as="h1" id="contactme-section">
          Contact me
        </Heading>
        <Box p={6} rounded="md" w="100%" >
          <form onSubmit={formik.handleSubmit}>
            <VStack spacing={4}>
              <FormControl
                isInvalid={formik.touched.firstName && formik.errors.firstName}
              >
                <FormLabel htmlFor="firstName">Name</FormLabel>
                <Input
                  border="2px solid white"
                  id="firstName"
                  name="firstName"
                  {...formik.getFieldProps("firstName")}
                />
                <FormErrorMessage>{formik.errors.firstName}</FormErrorMessage>
              </FormControl>
              <FormControl
                isInvalid={formik.touched.email && formik.errors.email}
              >
                <FormLabel htmlFor="email">Email Address</FormLabel>
                <Input
                  border="2px solid white"
                  id="email"
                  name="email"
                  type="email"
                  {...formik.getFieldProps("email")}
                />
                <FormErrorMessage>{formik.errors.email}</FormErrorMessage>
              </FormControl>
              <FormControl>
                <FormLabel htmlFor="type">Type of enquiry</FormLabel>
                <Select id="type" name="type" {...formik.getFieldProps("type")} border="2px solid white">
                  <option value="hireMe">Job Opportunity</option>
                  <option value="openSource">
                    Freelance Project Proposal
                  </option>
                  <option value="other">Other</option>
                </Select>
              </FormControl>
              <FormControl
                isInvalid={formik.touched.comment && formik.errors.comment}
              >
                <FormLabel htmlFor="comment">Your message</FormLabel>
                <Textarea
                  border="2px solid white"
                  id="comment"
                  name="comment"
                  height={250}
                  {...formik.getFieldProps("comment")}
                />
                <FormErrorMessage>{formik.errors.comment}</FormErrorMessage>
              </FormControl>
              {isLoading ? (
                <Button isLoading>Loading...</Button>
              ) : (
                <Button type="submit" color="#c7c7bb" width="full">
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
