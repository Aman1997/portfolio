import {
  chakra,
  Flex,
  Image,
  Stack,
  Text,
  useMediaQuery,
} from "@chakra-ui/react";
import Link from "next/link";
import Headings from "./common/Headings";
import { BiCalendar } from "react-icons/bi";
import { useInViewAnimation } from "../hooks/useInViewAnimation";
import { motion } from "framer-motion";

const blogs = [
  {
    id: 1,
    name: "Exploring Push Notifications in React Native",
    image: "/images/rn_push_notification.png",
    date: "August 10, 2021",
    href: "https://www.antstack.io/blog/exploring-push-notification-in-rn/",
  },
  {
    id: 2,
    name: "How to implement Envelope encryption using AWS KMS",
    image: "/images/ee_aws_kms.png",
    date: "April 27, 2021",
    href: "https://www.antstack.io/blog/how-to-implement-envelope-encryption-using-aws-kms/",
  },
];

interface IBlogCard {
  name: string;
  image: string;
  date: string;
  href: string;
}

const BlogCard = ({ name, image, date, href }: IBlogCard) => {
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
      />
      <Stack p="3">
        <Text>{name}</Text>
        <Flex justify="space-between" align="center" pt="3">
          <Stack direction="row" spacing="2">
            <BiCalendar color="#999999" />
            <Text color="#999999" fontSize="12px">
              {date}
            </Text>
          </Stack>
          <Link href={href} passHref>
            <chakra.a color="#00ffff" target="_blank" fontSize="12px">
              Read More...
            </chakra.a>
          </Link>
        </Flex>
      </Stack>
    </Stack>
  );
};

export default function Blogs() {
  const { headingRef, headingControl, bodyRef, bodyControl } =
    useInViewAnimation();

  const [isMobile] = useMediaQuery("(max-width: 768px)");

  return (
    <Flex bgColor="#212121" py="8" id="blogs" direction="column">
      <motion.div
        ref={headingRef}
        animate={headingControl}
        initial="hidden"
        style={{ width: "100%" }}
      >
        <Headings heading="blogs" />
      </motion.div>
      <Flex py="10" justify="center">
        <motion.div
          ref={bodyRef}
          animate={bodyControl}
          initial="hidden"
          style={{ width: "100%", display: "flex", justifyContent: "center" }}
        >
          <Stack
            direction="row"
            spacing="4"
            {...(isMobile && { direction: "column", spacing:"6" })}
          >
            {blogs.map((blog) => (
              <BlogCard
                key={blog.id}
                name={blog.name}
                image={blog.image}
                date={blog.date}
                href={blog.href}
              />
            ))}
          </Stack>
        </motion.div>
      </Flex>
    </Flex>
  );
}
