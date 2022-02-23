import {
  Heading,
  Avatar,
  Box,
  Center,
  Image,
  Flex,
  Text,
  Stack,
  Button,
  useColorModeValue,
} from '@chakra-ui/react';

export default function Card({title, buttonTitle}) {
  return (
    <Center py={6}>
      <Box
        maxW={'370px'}
        w={'full'}
        bg={useColorModeValue('white', 'gray.800')}
        boxShadow={'2xl'}
        rounded={'md'}
        overflow={'hidden'}>

        <Box p={6}>
          <Stack spacing={0} align={'center'} mb={5}>
            <Heading fontSize={'2xl'} fontWeight={500} fontFamily={'body'}>
              {title}
            </Heading>
            {/* <Text color={'gray.500'}>Frontend Developer</Text> */}
          </Stack>

          <Stack direction={'row'} justify={'center'} spacing={6}>
            {/* <Stack spacing={0} align={'center'}>
              <Text fontWeight={600}>23k</Text>
              <Text fontSize={'sm'} color={'gray.500'}>
                Followers
              </Text>
            </Stack>
            <Stack spacing={0} align={'center'}>
              <Text fontWeight={600}>23k</Text>
              <Text fontSize={'sm'} color={'gray.500'}>
                Followers
              </Text>
            </Stack> */}
            <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat dolor soluta eum recusandae quam consectetur culpa nulla ullam modi, sit quia perspiciatis repudiandae dicta corporis, a eos! Alias, officia laudantium.</Text>
          </Stack>

          <Button
            w={'full'}
            mt={8}
                color="white"
                variant="solid"
                colorScheme="brand"
                size="lg"
                type="submit"
                _hover={{
                  transform: 'translateY(-2px)',
                  boxShadow: 'lg',
                }}
                rounded="md"
              >
                {buttonTitle}
              </Button>
        </Box>
      </Box>
    </Center>
  );
}