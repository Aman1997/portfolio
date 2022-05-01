import {
  Box,
  Button,
  chakra,
  Flex,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import Link from "next/link";
import { useRouter } from "next/router";
import { Dispatch, useState } from "react";

interface INavigationLink {
  id: string;
  name: string;
  isActive: boolean;
  setActive: Dispatch<string>;
}

const NavigationLink = ({ id, name, isActive, setActive }: INavigationLink) => {
  return (
    <Link href={`#${id}`} passHref scroll={false}>
      <chakra.a onClick={() => setActive(id)}>
        <Text fontWeight="bold" color={isActive ? "#00ffff" : "white"}>
          {name}
        </Text>
      </chakra.a>
    </Link>
  );
};

export default function Header() {
  const router = useRouter();
  const [active, setActive] = useState("home");

  return (
    <Flex
      justify="space-between"
      w="full"
      px="10"
      py="6"
      position="fixed"
      align="center"
      bgColor="rgba(33,33,33, 0.8)"
      blur="2xl"
    >
      <Box>
        <Image src="/images/logo.png" />
      </Box>
      <Stack color="white" direction="row" spacing="14" align="center">
        <NavigationLink
          id="home"
          name="Home"
          isActive={active === "home"}
          setActive={setActive}
        />
        <NavigationLink
          id="about"
          name="About"
          isActive={active === "about"}
          setActive={setActive}
        />
        <NavigationLink
          id="skills"
          name="Skills"
          isActive={active === "skills"}
          setActive={setActive}
        />
        <NavigationLink
          id="projects"
          name="Projects"
          isActive={active === "projects"}
          setActive={setActive}
        />
        <NavigationLink
          id="blogs"
          name="Blogs"
          isActive={active === "blogs"}
          setActive={setActive}
        />
        <Button
          alignItems="center"
          justifyContent="center"
          bgColor="#00FFBB"
          color="black"
          fontWeight="normal"
          fontSize="14px"
          borderRadius="20px"
          _hover={{ bgColor: "#00FFBB" }}
          _focus={{ outline: "none", bgColor: "#00FFBB" }}
          boxShadow="0 1.6rem 2.6rem rgba(0, 255, 187, 0.2)"
          onClick={() => router.push("/#contact")}
        >
          Contact Me
        </Button>
      </Stack>
    </Flex>
  );
}
