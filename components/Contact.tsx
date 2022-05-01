import { Flex, Stack, Text } from "@chakra-ui/react";
import Headings from "./common/Headings";
import { MdLocationOn, MdOutlineEmail, MdPhone } from "react-icons/md";
import { useInViewAnimation } from "../hooks/useInViewAnimation";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

interface IContactCard {
  icon: any;
  name: string;
  description: string;
}

const ContactCard = ({ icon, name, description }: IContactCard) => {
  return (
    <Stack direction="row" spacing="4" color="white" align="center">
      <Stack
        height="40px"
        width="40px"
        borderRadius="full"
        bgColor="#8838b4"
        justify="center"
        align="center"
      >
        {icon}
      </Stack>
      <Stack spacing="0">
        <Text textTransform="capitalize" fontWeight="medium">
          {name}
        </Text>
        <Text color="#999999">{description}</Text>
      </Stack>
    </Stack>
  );
};

export default function Contact() {
  const { headingRef, headingControl, bodyRef, bodyControl } =
    useInViewAnimation();

  const { inView, ref } = useInView();

  const leftContactControl = useAnimation();
  const middleContactControl = useAnimation();
  const rightContactControl = useAnimation();

  useEffect(() => {
    if (
      inView &&
      leftContactControl &&
      middleContactControl &&
      rightContactControl
    ) {
      leftContactControl.start(() => ({
        x: [-60, 0],
        transition: { ease: "easeIn" },
      }));
      middleContactControl.start(() => ({
        y: [60, 0],
        transition: { ease: "easeIn" },
      }));
      rightContactControl.start(() => ({
        x: [60, 0],
        transition: { ease: "easeIn" },
      }));
    }
  }, [leftContactControl, middleContactControl, rightContactControl, inView]);

  return (
    <Flex bgColor="#262626" py="8" id="contact" direction="column">
      <motion.div
        ref={headingRef}
        animate={headingControl}
        initial="hidden"
        style={{ width: "100%" }}
      >
        <Headings heading="contact me" />
      </motion.div>
      <Stack py="10" align="center" spacing="8">
        <motion.div
          ref={bodyRef}
          animate={bodyControl}
          initial="hidden"
          style={{ width: "100%", display: "flex", justifyContent: "center" }}
        >
          <Text color="white">Get in touch with me</Text>
        </motion.div>
        <Flex w="full" justify="space-evenly" ref={ref}>
          <motion.div animate={leftContactControl} initial="hidden">
            <ContactCard
              name="address"
              description="Bangalore, Karnataka, India"
              icon={<MdLocationOn size="20px" />}
            />
          </motion.div>
          <motion.div animate={middleContactControl} initial="hidden">
            <ContactCard
              name="email address"
              description="amanb218@gmail.com"
              icon={<MdOutlineEmail size="20px" />}
            />
          </motion.div>
          <motion.div animate={rightContactControl} initial="hidden">
            <ContactCard
              name="phone number"
              description="+91 9911138685"
              icon={<MdPhone size="20px" />}
            />
          </motion.div>
        </Flex>
      </Stack>
    </Flex>
  );
}
