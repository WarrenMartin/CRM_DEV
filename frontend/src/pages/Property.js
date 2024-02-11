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
import { FiMoreVertical } from 'react-icons/fi';
const PropertyTable = () => {
  const [isDrawerOpen, setDrawerOpen] = useState(false);
  const [selectedProperty, setSelectedProperty] = useState(null);

  const data = [
    {
      id: 1,
      propertyType: 'Aura, White Sand Residency, Guhaghar',
      builderName: 'White Sand Residency',
      area: 690,
      possessionDate: 'N/A',
      configuration: 'NA BHK',
      bathrooms: 0,
      bedrooms: 0,
      priceRange: '16-25 Lakhs', // Dummy price range
    },
    {
      id: 2,
      propertyType: "Runwal Gardens, Dombivli East",
      builderName: 'RUNWAL PROPERTY',
      area: 352.7,
      possessionDate: 'Dec-2024',
      configuration: '1,2,3 BHK',
      bathrooms: 1,
      bedrooms: 1,
      priceRange: '36.62 Lakhs', // Dummy price range
    },
    {
      id: 3,
      propertyType: "Courtyard Pokharan Road 2, Narang Realty, Thane",
      builderName: 'Rial',
      area: 518.93,
      possessionDate: 'Nov 2024',
      configuration: '2 BHK',
      bathrooms: 3,
      bedrooms: 5,
      priceRange: '1.2-4.18 CR', // Dummy price range
      link:""
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
            <Th minW="150px">Bathrooms</Th> {/* New column for Bathrooms */}
            <Th minW="150px">Bedrooms</Th> {/* New column for Bedrooms */}
            <Th minW="150px">Price Range</Th> {/* New column for Price Range */}
            <Th minW="150px">Link</Th> {/* New column for Link */}
            <Th>Action</Th>
          </Tr>
        </Thead>
        <Tbody>
          {data.map((property, index) => (
            <Tr key={property.id} bg={index % 2 === 0 ? 'white' : 'gainsboro'} h="50px">
              <Td>{property.propertyType}</Td>
              <Td>{property.builderName}</Td>
              <Td>{property.area}</Td>
              <Td>{property.possessionDate}</Td>
              <Td>{property.configuration}</Td>
              <Td>{property.bathrooms}</Td> {/* Render Bathrooms */}
              <Td>{property.bedrooms}</Td> {/* Render Bedrooms */}
              <Td>{property.priceRange}</Td> {/* Render Price Range */}
              <Td>
                <a href={property.link} target="_blank" rel="noopener noreferrer">
                  {property.link}
                </a>
              </Td> {/* Render Link */}
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

      {/* ... (remaining code remains unchanged) */}


      
      <Drawer placement="right" onClose={closeDrawer} isOpen={isDrawerOpen} size="md">
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader borderBottomWidth="1px">Edit Property</DrawerHeader>
          <DrawerBody>
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