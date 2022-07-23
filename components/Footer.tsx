import { chakra, Flex, Stack, Text, useMediaQuery } from "@chakra-ui/react";
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
  const [isMobile] = useMediaQuery("(max-width: 768px)");
  
  return (
    <Stack
      bgColor="#212121"
      color="white"
      py="8"
      align="center"
      spacing="4"
      fontSize="14px"
    >
      <Stack
        align="center"
        justify="space-between"
        direction="row"
        w="full"
        px="16"
        {...(isMobile && { direction: "column", justifyContent: "center" })}
      >
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
      </Stack>
      <Text>Made with ❤️ by Aman Bisht</Text>
    </Stack>
  );
}
