import { Flex, Image, Stack } from "@chakra-ui/react";
import { useAnimation, motion } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { useInViewAnimation } from "../hooks/useInViewAnimation";
import Headings from "./common/Headings";

const skills = [
  {
    id: 1,
    name: "JavaScript",
    imageSrc:
      "https://img.shields.io/badge/-JavaScript-F7DF1E?style=flat&logo=JavaScript&logoColor=black",
  },
  {
    id: 2,
    name: "TypeScript",
    imageSrc:
      "https://img.shields.io/badge/-TypeScript-007ACC?style=flat&logo=typescript&logoColor=white",
  },
  {
    id: 3,
    name: "NextJS",
    imageSrc:
      "https://img.shields.io/badge/-NextJS-232F3E?style=flat&logo=Next.js&logoColor=white",
  },
  {
    id: 4,
    name: "ReactJS",
    imageSrc:
      "https://img.shields.io/badge/-React-45b8d8?style=flat&logo=react&logoColor=white",
  },
  {
    id: 5,
    name: "React Native",
    imageSrc:
      "https://img.shields.io/badge/React_Native-20232A?style=flat&logo=react&logoColor=61DAFB",
  },
  {
    id: 6,
    name: "ChakraUI",
    imageSrc:
      "https://img.shields.io/badge/-ChakraUI-teal?style=flat&logo=ChakraUI&logoColor=white",
  },
  {
    id: 7,
    name: "Redux",
    imageSrc:
      "https://img.shields.io/badge/-Redux-764ABC?style=flat&logo=redux&logoColor=white",
  },
  {
    id: 8,
    name: "GraphQL",
    imageSrc:
      "https://img.shields.io/badge/-GraphQL-E10098?style=flat&logo=graphql&logoColor=white",
  },
  {
    id: 9,
    name: "NodeJS",
    imageSrc:
      "https://img.shields.io/badge/-Nodejs-43853d?style=flat&logo=Node.js&logoColor=white",
  },
  {
    id: 10,
    name: "MongoDB",
    imageSrc:
      "https://img.shields.io/badge/-MongoDB-13aa52?style=flat&logo=mongodb&logoColor=white",
  },
  {
    id: 11,
    name: "MySQL",
    imageSrc:
      "https://img.shields.io/badge/MySQL-00000F?style=flat&logo=mysql&logoColor=white",
  },
  {
    id: 12,
    name: "AWS",
    imageSrc:
      "https://img.shields.io/badge/-Amazon-232F3E?style=flat&logo=AmazonAWS&logoColor=white",
  },
  {
    id: 13,
    name: "Serverless Framework",
    imageSrc:
      "https://img.shields.io/badge/-Serverless-FD5750?style=flat&logo=Serverless&logoColor=white",
  },
  {
    id: 14,
    name: "Docker",
    imageSrc:
      "https://img.shields.io/badge/-Docker-46a2f1?style=flat&logo=docker&logoColor=white",
  },
];

export default function Skills() {
  const {
    headingRef,
    headingControl,
    bodyRef,
    bodyControl,
  } = useInViewAnimation();

  return (
    <Flex bgColor="#212121" p="8" id="skills" direction="column">
      <motion.div
        ref={headingRef}
        animate={headingControl}
        initial="hidden"
        style={{ width: "100%" }}
      >
        <Headings heading="skills" />
      </motion.div>
      <Flex justify="center" py="10">
        <motion.div
          ref={bodyRef}
          animate={bodyControl}
          initial="hidden"
          style={{ width: "100%", display: "flex", justifyContent: "center" }}
        >
          <Stack direction="row" wrap="wrap" maxWidth="800px" justify="center">
            {skills.map((skill) => (
              <Flex py="2" key={skill.id}>
                <Image src={skill.imageSrc} alt={skill.name} height="25px" />
              </Flex>
            ))}
          </Stack>
        </motion.div>
      </Flex>
    </Flex>
  );
}
