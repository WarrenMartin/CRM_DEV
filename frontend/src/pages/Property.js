import React, { useState } from 'react';
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Button,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Input,
  VStack,
  FormControl,
  FormLabel,
  Container,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
  Icon,
} from '@chakra-ui/react';
import { FiMoreVertical } from 'react-icons/fi'; // You may need to install this icon package

const PropertyTable = () => {
  const [isDrawerOpen, setDrawerOpen] = useState(false);
  const [selectedProperty, setSelectedProperty] = useState(null);

  const data = [
    {
      id: 1,
      propertyType: 'Thiel, Waelchi and Mayer',
      listingPrice: 'Zloty',
      squareFootage: 2500,
      yearBuilt: 1919,
      bedrooms: 0,
      bathrooms: 9,
    },
    {
      id: 2,
      propertyType: "O'Keefe, Bailey and Shanahan",
      listingPrice: 'Rial',
      squareFootage: 6547,
      yearBuilt: 1925,
      bedrooms: 5,
      bathrooms: 3,
    },
    // Add more data as needed
  ];

  const openDrawer = () => setDrawerOpen(true);
  const closeDrawer = () => {
    setDrawerOpen(false);
    setSelectedProperty(null);
  };

  const handleActionClick = (property) => {
    setSelectedProperty(property);
    openDrawer();
  };

  return (
    <Container maxW="100vw" mt="4">
      <Table variant="striped" colorScheme="teal" size="lg">
        <Thead>
          <Tr bg="black" color="white">
            <Th minW="150px">Property Name</Th>
            <Th minW="150px">Builder Name</Th>
            <Th minW="150px">Area</Th>
            <Th minW="150px">Possession Date</Th>
            <Th minW="150px">Configuration</Th>
            <Th>Action</Th>
          </Tr>
        </Thead>
        <Tbody>
          {data.map((property, index) => (
            <Tr key={property.id} bg={index % 2 === 0 ? 'white' : 'gainsboro'} h="50px">
              <Td>{property.propertyType}</Td>
              <Td>{property.listingPrice}</Td>
              <Td>{property.squareFootage}</Td>
              <Td>{property.yearBuilt}</Td>
              <Td>{property.bedrooms}</Td>
              <Td>
                <Menu>
                  <MenuButton
                    as={IconButton}
                    icon={<Icon as={FiMoreVertical} />}
                    variant="outline"
                    size="sm"
                  />
                  <MenuList>
                    <MenuItem onClick={() => handleActionClick(property)}>Edit</MenuItem>
                    <MenuItem>Delete</MenuItem>
                  </MenuList>
                </Menu>
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>

      <Drawer placement="right" onClose={closeDrawer} isOpen={isDrawerOpen} size="md">
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader borderBottomWidth="1px">Edit Property</DrawerHeader>
          <DrawerBody>
            {/* Your form content goes here */}
            <VStack spacing="4">
              <FormControl>
                <FormLabel>Property Type</FormLabel>
                <Input
                  type="text"
                  placeholder="Enter property type"
                  value={selectedProperty?.propertyType || ''}
                />
              </FormControl>

              {/* Add more form controls for other fields */}
            </VStack>
          </DrawerBody>
          <DrawerFooter>
            <Button colorScheme="blue" mr={3}>
              Save
            </Button>
            <Button onClick={closeDrawer}>Cancel</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </Container>
  );
};

export default PropertyTable;
