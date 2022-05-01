import { Flex, Stack, Text } from "@chakra-ui/react";
import Headings from "./common/Headings";
import { MdLocationOn, MdOutlineEmail, MdPhone } from "react-icons/md";

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
  return (
    <Flex bgColor="#262626" py="8" id="contact" direction="column">
      <Headings heading="contact me" />
      <Stack py="10" align="center" spacing="8">
        <Text color="white">Get in touch with me</Text>
        <Flex w="full" justify="space-evenly">
          <ContactCard
            name="address"
            description="Bangalore, Karnataka, India"
            icon={<MdLocationOn size="20px" />}
          />
          <ContactCard
            name="email address"
            description="amanb218@gmail.com"
            icon={<MdOutlineEmail size="20px" />}
          />
          <ContactCard
            name="phone number"
            description="+91 9911138685"
            icon={<MdPhone size="20px" />}
          />
        </Flex>
      </Stack>
    </Flex>
  );
}
