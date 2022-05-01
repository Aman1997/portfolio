import { Flex, Image, Stack, Text } from "@chakra-ui/react";
import Headings from "./common/Headings";

export default function About() {
  return (
    <Flex bgColor="#262626" py="8" id="about" direction="column">
      <Headings heading="about me" />
      <Flex py="5">
        <Flex flex="1" px="10" justify="center" mt="10">
          <Stack maxW="500px">
            <Text color="white">
              I am a software engineer having worked as data engineer, frontend
              and backend engineer. I'm passionate about using technology to
              build impactful products, solve challenging problems and create
              delightful experiences. <br /> <br />I have been developing web
              and cross-platform mobile applications using JavaScript and using
              AWS extensively for the infrastructue. Being a diligent and
              solution-oriented person, I always work towards achieving best
              result on each project I work on.
            </Text>
          </Stack>
        </Flex>
        <Flex flex="1" px="10" align="center" justify="center" mt="5">
          <Image src="/images/about.jpeg" alt='about' maxWidth="440px" objectFit="cover" />
        </Flex>
      </Flex>
    </Flex>
  );
}
