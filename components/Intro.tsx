import { Flex, Heading, Image, Stack, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";

export default function Intro() {
  return (
    <Flex h="full" id="home">
      <Flex flex="1" align="flex-end" justify="center">
        <motion.div animate={{ x: [-100, 0] }} transition={{ ease: "easeIn" }}>
          <Image src="/images/intro.png" alt="intro" maxHeight="500px" />
        </motion.div>
      </Flex>
      <Flex flex="1" align="center" justify="flex-start">
        <motion.div animate={{ x: [100, 0] }} transition={{ ease: "easeIn" }}>
          <Stack color="white" spacing="5">
            <Text fontSize="20px">Hi there 👋 I'm</Text>
            <Heading fontWeight="bold" fontSize="68px" letterSpacing="2px">
              AMAN <br /> BISHT
            </Heading>
            <Heading color="#00FFBB" fontWeight="medium" fontSize="20px">
              FULL STACK DEVELOPER 👨🏻‍💻
            </Heading>
            <Text maxWidth="480px">
              I'm a software engineer having expertise in building user-focussed
              and scalable products using JavaScript and AWS.
            </Text>
          </Stack>
        </motion.div>
      </Flex>
    </Flex>
  );
}
