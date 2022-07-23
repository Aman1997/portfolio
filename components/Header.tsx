import {
  Box,
  Button,
  chakra,
  Flex,
  Icon,
  Image,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Stack,
  Text,
  useMediaQuery,
} from "@chakra-ui/react";
import { Dispatch, useEffect, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";

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

  const [isMobile] = useMediaQuery("(max-width: 768px)");

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

      {isMobile ? (
        <Menu isLazy placement="bottom-end">
          <MenuButton
            as={Button}
            variant="unstyled"
            _active={{ bgColor: "rgba(33,33,33, 0.6)" }}
            bgColor="rgba(33,33,33, 0.8)"
          >
            <Icon
              as={GiHamburgerMenu}
              aria-label="menu"
              h="5"
              w="5"
              fill={"#fff"}
            />
          </MenuButton>
          <MenuList zIndex="1500">
            <MenuItem
              onClick={() => {
                setActive("home");
                const scrollDiv = document.getElementById("home")
                  ?.offsetTop as number;
                window.scrollTo({ top: scrollDiv - 70, behavior: "smooth" });
              }}
            >
              <Text fontWeight="medium">🏠 Home</Text>
            </MenuItem>
            <MenuItem
              onClick={() => {
                setActive("about");
                const scrollDiv = document.getElementById("about")
                  ?.offsetTop as number;
                window.scrollTo({ top: scrollDiv - 70, behavior: "smooth" });
              }}
            >
              <Text fontWeight="medium">👨🏻‍💻 About</Text>
            </MenuItem>
            <MenuItem
              onClick={() => {
                setActive("skills");
                const scrollDiv = document.getElementById("skills")
                  ?.offsetTop as number;
                window.scrollTo({ top: scrollDiv - 70, behavior: "smooth" });
              }}
            >
              <Text fontWeight="medium">🛠 Skills</Text>
            </MenuItem>
            <MenuItem
              onClick={() => {
                setActive("projects");
                const scrollDiv = document.getElementById("projects")
                  ?.offsetTop as number;
                window.scrollTo({ top: scrollDiv - 70, behavior: "smooth" });
              }}
            >
              <Text fontWeight="medium">🖇 Projects</Text>
            </MenuItem>
            <MenuItem
              onClick={() => {
                setActive("blogs");
                const scrollDiv = document.getElementById("blogs")
                  ?.offsetTop as number;
                window.scrollTo({ top: scrollDiv - 70, behavior: "smooth" });
              }}
            >
              <Text fontWeight="medium">🔖 Blogs</Text>
            </MenuItem>
            <MenuItem
              onClick={() => {
                const scrollDiv = document.getElementById("contact")
                  ?.offsetTop as number;
                window.scrollTo({ top: scrollDiv - 70, behavior: "smooth" });
              }}
            >
              <Text fontWeight="medium">📲 Contact Me</Text>
            </MenuItem>
          </MenuList>
        </Menu>
      ) : (
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
      )}
    </Flex>
  );
}
