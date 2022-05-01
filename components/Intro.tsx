import { Flex, Heading, Image, Stack, Text } from "@chakra-ui/react";

export default function Intro() {
  return (
    <Flex h="full" id='home'>
      <Flex flex="1" align="flex-end" justify='center'>
        <Image src="/images/intro.png" alt='intro' maxHeight="500px" />
      </Flex>
      <Flex flex="1" align="center" justify="flex-start">
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
      </Flex>
    </Flex>
  );
}
