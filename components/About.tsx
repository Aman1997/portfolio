import { Flex, Image, Stack, Text, useMediaQuery } from "@chakra-ui/react";
import Headings from "./common/Headings";
import { motion } from "framer-motion";
import { useInViewAnimation } from "../hooks/useInViewAnimation";

export default function About() {
  const { headingRef, headingControl, bodyRef, bodyControl } =
    useInViewAnimation();

  const [isMobile] = useMediaQuery("(max-width: 768px)");

  return (
    <Flex bgColor="#262626" py="8" id="about" direction="column">
      <motion.div
        ref={headingRef}
        animate={headingControl}
        initial="hidden"
        style={{ width: "100%" }}
      >
        <Headings heading="about me" />
      </motion.div>
      <motion.div
        ref={bodyRef}
        animate={bodyControl}
        initial="hidden"
        style={{ width: "100%" }}
      >
        <Flex py="5" direction={isMobile ? "column" : "row"}>
          {isMobile && (
            <Flex flex="1" px="10" align="center" justify="center" mt="5">
              <Image
                src="/images/about.jpeg"
                alt="about"
                maxWidth="440px"
                objectFit="cover"
                boxShadow="0 1.6rem 3.6rem rgba(0, 0, 0, 0.8)"
              />
            </Flex>
          )}
          <Flex flex="1" px="10" justify="center" mt="10">
            <Stack maxW="500px">
              <Text color="white">
                I am a software engineer having worked as data engineer,
                frontend and backend engineer. I'm passionate about using
                technology to build impactful products, solve challenging
                problems and create delightful experiences. <br /> <br />I have
                been developing web and cross-platform mobile applications using
                JavaScript and using AWS extensively for the infrastructue.
                Being a diligent and solution-oriented person, I always work
                towards achieving best result on each project I work on.
              </Text>
            </Stack>
          </Flex>
          {!isMobile && (
            <Flex flex="1" px="10" align="center" justify="center" mt="5">
              <Image
                src="/images/about.jpeg"
                alt="about"
                maxWidth="440px"
                objectFit="cover"
                boxShadow="0 1.6rem 3.6rem rgba(0, 0, 0, 0.8)"
              />
            </Flex>
          )}
        </Flex>
      </motion.div>
    </Flex>
  );
}
