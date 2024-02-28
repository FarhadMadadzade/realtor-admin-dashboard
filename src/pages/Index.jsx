import { Box, Button, Container, Flex, FormControl, FormLabel, Heading, Input, Stack, Textarea, Select, Image, useToast } from "@chakra-ui/react";
import { FaPlus, FaUpload } from "react-icons/fa";

const Index = () => {
  const toast = useToast();

  const handleSubmit = (event) => {
    event.preventDefault();
    // This is where you would handle form submission, e.g., post data to an API.
    toast({
      title: "Ad Submitted.",
      description: "We've received your ad for the property.",
      status: "success",
      duration: 9000,
      isClosable: true,
    });
  };

  return (
    <Container maxW="container.xl" p={4}>
      <Heading as="h1" mb={6}>
        Realtor Admin Dashboard
      </Heading>
      <Box borderWidth="1px" borderRadius="lg" overflow="hidden" p={6}>
        <form onSubmit={handleSubmit}>
          <Stack spacing={4}>
            <FormControl isRequired>
              <FormLabel>Title</FormLabel>
              <Input placeholder="Luxury 2 BHK apartment in downtown" />
            </FormControl>
            <FormControl isRequired>
              <FormLabel>Description</FormLabel>
              <Textarea placeholder="Detailed description of the property" />
            </FormControl>
            <FormControl isRequired>
              <FormLabel>Price</FormLabel>
              <Input placeholder="Price in USD" type="number" />
            </FormControl>
            <Flex gap={4}>
              <FormControl isRequired>
                <FormLabel>Type</FormLabel>
                <Select placeholder="Select property type">
                  <option value="apartment">Apartment</option>
                  <option value="house">House</option>
                  <option value="villa">Villa</option>
                </Select>
              </FormControl>
              <FormControl isRequired>
                <FormLabel>Bedrooms</FormLabel>
                <Input placeholder="Number of bedrooms" type="number" />
              </FormControl>
              <FormControl>
                <FormLabel>Bathrooms</FormLabel>
                <Input placeholder="Number of bathrooms" type="number" />
              </FormControl>
            </Flex>
            <FormControl>
              <FormLabel>Location</FormLabel>
              <Input placeholder="City, State, Country" />
            </FormControl>
            <FormControl>
              <FormLabel>Image</FormLabel>
              <Flex alignItems="center">
                <Button leftIcon={<FaUpload />} colorScheme="teal" variant="solid">
                  Upload Image
                </Button>
                <Image src="https://images.unsplash.com/photo-1580587771525-78b9dba3b914?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxob3VzZSUyMGV4dGVyaW9yfGVufDB8fHx8MTcwOTE2MTY5OXww&ixlib=rb-4.0.3&q=80&w=1080" boxSize="100px" ml={4} borderRadius="md" />
              </Flex>
            </FormControl>
            <Button type="submit" leftIcon={<FaPlus />} colorScheme="blue" size="lg" fontSize="md">
              Add Listing
            </Button>
          </Stack>
        </form>
      </Box>
    </Container>
  );
};

export default Index;
