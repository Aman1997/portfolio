import { Box, Heading, Stack } from "@chakra-ui/react";

interface IHeadings {
  heading: string;
}

export default function Headings({ heading }: IHeadings) {
  return (
    <Stack direction="row" spacing="3" align="center" w="full" justify="center">
      <Heading
        color="white"
        fontWeight="normal"
        fontSize="20px"
        textTransform="uppercase"
      >
        {heading}
      </Heading>
      <Box h="4px" w="180px" bgColor="#00FFBB" borderRadius="lg" />
    </Stack>
  );
}
