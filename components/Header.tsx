import {
  Box,
  Button,
  chakra,
  Flex,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import { Dispatch, useEffect, useState } from "react";

interface INavigationLink {
  id: string;
  name: string;
  isActive: boolean;
  setActive: Dispatch<string>;
}

const NavigationLink = ({ id, name, isActive, setActive }: INavigationLink) => {
  return (
    <chakra.a
      onClick={() => {
        setActive(id);
        const scrollDiv = document.getElementById(id)?.offsetTop as number;
        window.scrollTo({ top: scrollDiv - 70, behavior: "smooth" });
      }}
      _hover={{ cursor: "pointer", transform: "scale(1.1)" }}
    >
      <Text fontWeight="bold" color={isActive ? "#00ffff" : "white"}>
        {name}
      </Text>
    </chakra.a>
  );
};

export default function Header() {
  const [active, setActive] = useState("home");

  useEffect(() => {
    const sections = document.querySelectorAll("div");
    window.onscroll = () => {
      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        if (scrollY >= sectionTop - 80) {
          const sectionId = section.getAttribute("id") as string;
          if (
            [
              "home",
              "about",
              "skills",
              "projects",
              "blogs",
              "contact",
            ].includes(sectionId)
          )
            setActive(section.getAttribute("id") as string);
        }
      });
    };
  }, []);

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
      zIndex={5}
    >
      <Box>
        <Image
          src="/images/logo.png"
          alt="logo"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          _hover={{ cursor: "pointer" }}
        />
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
          _hover={{ bgColor: "#00FFBB", transform: "scale(1.1)" }}
          _focus={{ outline: "none", bgColor: "#00FFBB" }}
          boxShadow="0 1.6rem 2.6rem rgba(0, 255, 187, 0.2)"
          onClick={() => {
            const scrollDiv = document.getElementById("contact")
              ?.offsetTop as number;
            window.scrollTo({ top: scrollDiv - 70, behavior: "smooth" });
          }}
        >
          Contact Me
        </Button>
      </Stack>
    </Flex>
  );
}
