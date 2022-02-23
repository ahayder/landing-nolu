/* eslint-disable react/no-unescaped-entities */
import {
  chakra,
  Box,
  SimpleGrid,
  Flex,
  useColorModeValue,
  Icon,
} from "@chakra-ui/react";
export default function Fgl() {
  const Feature = (props) => {
    return (
      <Box>
        <Flex
          alignItems="center"
          justifyContent="center"
          w={8}
          h={8}
          mb={4}
          rounded="full"
          color={useColorModeValue(`${props.color}.600`, `${props.color}.100`)}
          bg={useColorModeValue(`${props.color}.100`, `${props.color}.600`)}
        >
          <Icon
            boxSize={5}
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            {props.icon}
          </Icon>
        </Flex>
        <chakra.h3
          mb={2}
          fontWeight="semibold"
          lineHeight="shorter"
          color={useColorModeValue("gray.900")}
        >
          {props.title}
        </chakra.h3>
        <chakra.p
          fontSize="sm"
          color={useColorModeValue("gray.500", "gray.400")}
        >
          {props.children}
        </chakra.p>
      </Box>
    );
  };
  return (
    <Flex
      bg={useColorModeValue("#F9FAFB", "gray.600")}
      maxWidth="100vw"
      justifyContent="center"
      alignItems="center"
    >
      <Box
        py={20}
        mx="auto"
        bg={useColorModeValue("white", "gray.800")}
        shadow="xl"
        width={"full"}
        px={4}
      >
        {/* <Box textAlign={{ lg: "center" }}>
          <chakra.p
            mt={2}
            fontSize={{ base: "3xl", sm: "4xl" }}
            lineHeight="8"
            fontWeight="extrabold"
            letterSpacing="tight"
            color={useColorModeValue("gray.900")}
          >
            Features
          </chakra.p>
          <chakra.p
            mt={4}
            maxW="2xl"
            fontSize="xl"
            mx={{ lg: "auto" }}
            color={useColorModeValue("gray.500", "gray.400")}
          >
            Get insights to dig down into what's powering your growth the most.
          </chakra.p>
        </Box> */}
        <SimpleGrid
          columns={{ base: 1, sm: 2, md: 3, lg: 6 }}
          spacingX={{ base: 16, lg: 24 }}
          spacingY={20}
          mt={6}
        >
          
          <Feature
            color="brand"
            title="GAMES"
            icon={
              <path
                fillRule="evenodd"
                d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z"
                clipRule="evenodd"
              />
            }
          >
            {/* Improve your conversion rates by monitoring exactly what’s going on
            while your customers are in trial. */}
          </Feature>

          <Feature
            color="purple"
            title="ENTERTAINMENT"
            icon={
              <>
                <path
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M10 3.5a1.5 1.5 0 013 0V4a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-.5a1.5 1.5 0 000 3h.5a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-.5a1.5 1.5 0 00-3 0v.5a1 1 0 01-1 1H6a1 1 0 01-1-1v-3a1 1 0 00-1-1h-.5a1.5 1.5 0 010-3H4a1 1 0 001-1V6a1 1 0 011-1h3a1 1 0 001-1v-.5z" />
                </path>
              </>
            }
          >
            {/* Personalized segmentation, rich customer profiles, manual
            subscriptions, and more! */}
          </Feature>

          <Feature
            color="pink"
            title="EVENTS"
            icon={
              <path
                fillRule="evenodd"
                d="M5 2a1 1 0 011 1v1h1a1 1 0 010 2H6v1a1 1 0 01-2 0V6H3a1 1 0 010-2h1V3a1 1 0 011-1zm0 10a1 1 0 011 1v1h1a1 1 0 110 2H6v1a1 1 0 11-2 0v-1H3a1 1 0 110-2h1v-1a1 1 0 011-1zM12 2a1 1 0 01.967.744L14.146 7.2 17.5 9.134a1 1 0 010 1.732l-3.354 1.935-1.18 4.455a1 1 0 01-1.933 0L9.854 12.8 6.5 10.866a1 1 0 010-1.732l3.354-1.935 1.18-4.455A1 1 0 0112 2z"
                clipRule="evenodd"
              />
            }
          >
            {/* Merge external data with your metrics for deeper insights in to your
            customers and your business. */}
          </Feature>

          <Feature
            color="red"
            title="FINANCE"
            icon={
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            }
          >
            {/* Want your metrics in other services? Extend and integrate to our
            every part of your business. */}
          </Feature>

          <Feature
            color="green"
            title="CASINO"
            icon={
              <path
                fillRule="evenodd"
                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-2 0c0 .993-.241 1.929-.668 2.754l-1.524-1.525a3.997 3.997 0 00.078-2.183l1.562-1.562C15.802 8.249 16 9.1 16 10zm-5.165 3.913l1.58 1.58A5.98 5.98 0 0110 16a5.976 5.976 0 01-2.516-.552l1.562-1.562a4.006 4.006 0 001.789.027zm-4.677-2.796a4.002 4.002 0 01-.041-2.08l-.08.08-1.53-1.533A5.98 5.98 0 004 10c0 .954.223 1.856.619 2.657l1.54-1.54zm1.088-6.45A5.974 5.974 0 0110 4c.954 0 1.856.223 2.657.619l-1.54 1.54a4.002 4.002 0 00-2.346.033L7.246 4.668zM12 10a2 2 0 11-4 0 2 2 0 014 0z"
                clipRule="evenodd"
              />
            }
          >
            {/* Send important updates from here to your team’s Support channels. */}
          </Feature>

          <Feature
            color="blue"
            title="ARCHITECTURE"
            icon={
              <>
                <path
                  fillRule="evenodd"
                  d="M3 4a1 1 0 011-1h3a1 1 0 011 1v3a1 1 0 01-1 1H4a1 1 0 01-1-1V4zm2 2V5h1v1H5zM3 13a1 1 0 011-1h3a1 1 0 011 1v3a1 1 0 01-1 1H4a1 1 0 01-1-1v-3zm2 2v-1h1v1H5zM13 3a1 1 0 00-1 1v3a1 1 0 001 1h3a1 1 0 001-1V4a1 1 0 00-1-1h-3zm1 2v1h1V5h-1z"
                  clipRule="evenodd"
                />
                <path d="M11 4a1 1 0 10-2 0v1a1 1 0 002 0V4zM10 7a1 1 0 011 1v1h2a1 1 0 110 2h-3a1 1 0 01-1-1V8a1 1 0 011-1zM16 9a1 1 0 100 2 1 1 0 000-2zM9 13a1 1 0 011-1h1a1 1 0 110 2v2a1 1 0 11-2 0v-3zM7 11a1 1 0 100-2H4a1 1 0 100 2h3zM17 13a1 1 0 01-1 1h-2a1 1 0 110-2h2a1 1 0 011 1zM16 17a1 1 0 100-2h-3a1 1 0 100 2h3z" />
              </>
            }
          >
            {/* Goals, Breakouts, Instant notifications, Comparisons, Annotations
            and Cohort Analysis! */}
          </Feature>
        </SimpleGrid>
      </Box>
    </Flex>
  );
}