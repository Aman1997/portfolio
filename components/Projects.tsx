import { chakra, Divider, Flex, Image, Stack, Text } from "@chakra-ui/react";
import Link from "next/link";
import Headings from "./common/Headings";
import { AiOutlineLink } from "react-icons/ai";

const projects = [
  {
    id: 1,
    name: "CloudFiles",
    description:
      "Developing the web application for CloudFiles Technologies that is being used by enterprise teams for sharing and tracking files. Developed features and intergrated with Hubspot for business workflows",
    image: "/images/CloudFiles.webp",
    techUsed: [
      "https://img.shields.io/badge/-TypeScript-007ACC?style=flat&logo=typescript&logoColor=white",
      "https://img.shields.io/badge/-NextJS-232F3E?style=flat&logo=Next.js&logoColor=white",
      "https://img.shields.io/badge/-ChakraUI-teal?style=flat&logo=ChakraUI&logoColor=white",
      "https://img.shields.io/badge/-Nodejs-43853d?style=flat&logo=Node.js&logoColor=white",
      "https://img.shields.io/badge/-MongoDB-13aa52?style=flat&logo=mongodb&logoColor=white",
      "https://img.shields.io/badge/-Amazon-232F3E?style=flat&logo=AmazonAWS&logoColor=white",
      "https://img.shields.io/badge/-Amazon-232F3E?style=flat&logo=AmazonAWS&logoColor=white",
    ],
    url: "https://cloudfiles.io/",
  },
  {
    id: 2,
    name: "iCrimeFighter",
    description:
      "Developed secured and scalable features and the backend infrastructure for iCrimeFighter's SaaS application which is used by multiple federal/law enforcement agencies across US for evidence collection and sharing",
    image: "/images/icf.png",
    techUsed: [
      "https://img.shields.io/badge/-TypeScript-007ACC?style=flat&logo=typescript&logoColor=white",
      "https://img.shields.io/badge/-Nodejs-43853d?style=flat&logo=Node.js&logoColor=white",
      "https://img.shields.io/badge/MySQL-00000F?style=flat&logo=mysql&logoColor=white",
      "https://img.shields.io/badge/-Amazon-232F3E?style=flat&logo=AmazonAWS&logoColor=white",
      "https://img.shields.io/badge/-Serverless-FD5750?style=flat&logo=Serverless&logoColor=white",
      "https://img.shields.io/badge/-Docker-46a2f1?style=flat&logo=docker&logoColor=white",
    ],
    url: "https://www.icrimefighter.com/",
  },
  {
    id: 3,
    name: "WhosThat",
    description:
      "Developed an annonymous chat application from scratch as part of an internal initiative at Antstack Technologies. ",
    image: "/images/whosthat.jpeg",
    techUsed: [
      "https://img.shields.io/badge/-TypeScript-007ACC?style=flat&logo=typescript&logoColor=white",
      "https://img.shields.io/badge/React_Native-20232A?style=flat&logo=react&logoColor=61DAFB",
      "https://img.shields.io/badge/-Nodejs-43853d?style=flat&logo=Node.js&logoColor=white",
      "https://img.shields.io/badge/-Amazon-232F3E?style=flat&logo=AmazonAWS&logoColor=white",
    ],
    url: "https://whosthat.in/",
  },
  {
    id: 4,
    name: "Fitness App",
    description:
      "As part of a side project developed user and partner apps for a creating a platform where fitness partners could list their service and manager bookings and finances and users could browse and book services. The platform was similar to Gympass but for a B2C model",
    image: "/images/fitness_app/user-1.jpeg",
    techUsed: [
      "https://img.shields.io/badge/-TypeScript-007ACC?style=flat&logo=typescript&logoColor=white",
      "https://img.shields.io/badge/React_Native-20232A?style=flat&logo=react&logoColor=61DAFB",
      "https://img.shields.io/badge/-Redux-764ABC?style=flat&logo=redux&logoColor=white",
      "https://img.shields.io/badge/-GraphQL-E10098?style=flat&logo=graphql&logoColor=white",
      "https://img.shields.io/badge/-Nodejs-43853d?style=flat&logo=Node.js&logoColor=white",
      "https://img.shields.io/badge/-MongoDB-13aa52?style=flat&logo=mongodb&logoColor=white",
      "https://img.shields.io/badge/-Amazon-232F3E?style=flat&logo=AmazonAWS&logoColor=white",
    ],
  },
];

interface IProjectCard {
  name: string;
  description: string;
  image: string;
  tech: Array<string>;
  url?: string;
}

const ProjectCard = ({ name, description, image, tech, url }: IProjectCard) => {
  return (
    <Stack
      maxW="300px"
      boxShadow="0 1.6rem 3.6rem rgba(0, 0, 0,0.2)"
      bgColor="#2b2b2b"
      borderRadius="md"
      color="white"
    >
      <Image
        src={image}
        alt={name}
        borderTopLeftRadius="md"
        borderTopRightRadius="md"
        maxH="200px"
        objectFit="scale-down"
        bgColor="#212121"
      />
      <Stack p="3">
        <Stack direction="row" align="center">
          <Text fontWeight="bold">{name}</Text>
          {url && (
            <Link href={url} passHref>
              <chakra.a color="#00ffff" target="_blank" fontSize="12px">
                <AiOutlineLink size="16px" />
              </chakra.a>
            </Link>
          )}
        </Stack>
        <Text fontSize="14px">{description}</Text>
        <Divider colorScheme="#999999" />
        <Text fontWeight="medium" fontSize="14px">
          Tech Used:
        </Text>
        <Stack
          direction="row"
          wrap="wrap"
          maxWidth="800px"
          justify="flex-start"
          spacing="1"
        >
          {tech.map((tech, index) => (
            <Flex py="2" key={index}>
              <Image src={tech} alt="technologies" />
            </Flex>
          ))}
        </Stack>
      </Stack>
    </Stack>
  );
};

export default function Projects() {
  return (
    <Flex bgColor="#262626" py="8" id="projects" direction="column">
      <Headings heading="projects" />
      <Flex direction="column" py="10" align="center">
        <Stack direction="row" spacing="4">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              name={project.name}
              description={project.description}
              tech={project.techUsed}
              image={project.image}
              url={project.url}
            />
          ))}
        </Stack>
      </Flex>
    </Flex>
  );
}
