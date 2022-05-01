import { chakra, Flex, Stack, Text } from "@chakra-ui/react";
import Link from "next/link";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";

const SocialIcon = ({ icon, href }: { icon: any; href: string }) => {
  return (
    <Link href={href} passHref>
      <chakra.a target="_blank">
        <Stack
          height="40px"
          width="40px"
          borderRadius="full"
          justify="center"
          align="center"
          _hover={{ bgColor: "#2b2b2b", cursor: "pointer" }}
        >
          {icon}
        </Stack>
      </chakra.a>
    </Link>
  );
};

export default function Footer() {
  return (
    <Stack
      bgColor="#212121"
      color="white"
      py="8"
      align="center"
      spacing="4"
      fontSize="14px"
    >
      <Flex align="center" justify="space-between" w="full" px="16">
        <Text>
          &copy; Copyright {new Date().getFullYear()} &nbsp; | &nbsp; All Rights
          Reserved
        </Text>
        <Stack direction="row" spacing="0.5">
          <SocialIcon
            icon={<AiFillGithub size="20px" />}
            href="https://github.com/Aman1997"
          />
          <SocialIcon
            icon={<AiFillLinkedin size="20px" />}
            href="https://www.linkedin.com/in/aman-bisht-00a96411b/"
          />
        </Stack>
      </Flex>
      <Text>Made with ❤️ by Aman Bisht</Text>
    </Stack>
  );
}
