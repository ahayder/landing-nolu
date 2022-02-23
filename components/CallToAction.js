import {
  chakra,
  Box,
  Stack,
  Flex,
  useColorModeValue,
  Link,
  SimpleGrid,
  Icon,
} from "@chakra-ui/react";
import Card from "./Card";

export default function CallToAction() {
  return (
    <Flex
      bg={useColorModeValue("#F9FAFB", "gray.600")}
      w="full"
      alignItems="center"
      justifyContent="center"
      direction={"column"}
    >
      <Flex
        justify="center"
        bg={useColorModeValue("white", "gray.800")}
        w="full"
      >
        <Box
          w={{ base: "full", md: "75%", lg: "50%" }}
          px={4}
          py={10}
          textAlign={{ base: "left", md: "center" }}
        >
          <chakra.span
            fontSize={{ base: "3xl", sm: "4xl" }}
            fontWeight="extrabold"
            letterSpacing="tight"
            lineHeight="shorter"
            color={useColorModeValue("gray.900", "gray.100")}
            mb={6}
          >
            {/* <chakra.span display="block">Ready to dive in?</chakra.span> */}
            <chakra.span
              display="block"
              color={useColorModeValue("brand.600", "gray.500")}
            >
              Play without limits
            </chakra.span>
          </chakra.span>
          <Stack
            justifyContent={{ base: "left", md: "center" }}
            direction={{ base: "column", sm: "row" }}
            spacing={2}
            mt={2}
          ></Stack>
        </Box>
      </Flex>
      <SimpleGrid
        columns={{ base: 1, md: 2, lg: 3 }}
        spacing={20}
        px={{ base: 4, lg: 16, xl: 24 }}
        bg={useColorModeValue("white", "gray.800")}
        // shadow="xl"
        width={"full"}
      >
        <Card title={"Join the Community"} buttonTitle={"Joing Our Discord"} />
        <Card title={"Win Prizes"} buttonTitle={"Learn More"} />
        <Card title={"Get Support"} buttonTitle={"Contact Us"} />
      </SimpleGrid>
    </Flex>
  );
}
