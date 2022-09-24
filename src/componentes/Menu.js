import React, { useEffect } from 'react';
import { Cores } from '../assets/Cores';
import { Imagens } from '../assets/Imagens';
import WebFont from 'webfontloader';
import { Search2Icon, AddIcon, DeleteIcon } from '@chakra-ui/icons'
import {
  VStack,
  Flex,
  Spacer,
  useRadioGroup,
  useRadio,
  Box,
  Button,
  Textarea,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Image,
  Text,
  Icon,
  useToast,
} from '@chakra-ui/react';


import { useCreateToast } from './Toast';



function Menu() {

  useEffect(() => {
    WebFont.load({
      google: {
        families: ['Quicksand']
      }
    });
  }, []);
  return (
    
    
    <>
      <Box
        as='button'
        height='100px'
        width={"100%"}
        lineHeight='1.2'
        transition='all 0.2s cubic-bezier(.08,.52,.52,1)'
        px='8px'
        borderRadius='2px'
        fontSize='14px'
        fontWeight='semibold'
        fontFamily={"Quicksand"}
        bg={Cores.white}
        color='#4b4f56'
        _hover={{ bg: `${Cores.yellowGreemMiddle}` }}
        _active={{
          bg: '#dddfe2',
          transform: 'scale(0.98)',
        }}
        _focus={{
          bg: `${Cores.white}`
        }}
      >
        <Flex
          fontFamily={'Quicksand'}
          textColor={Cores.greenMidle}
          fontSize={"20px"}
          h="100%"
         
        >
           <Box w='100%' h='100%' marginTop={'2.3rem'}>
            <AddIcon h={6} w={6} />
            <Spacer />
          </Box>
          <Box w='100%' h='100%' marginTop={'2.3rem'}>
            <Text>Adicionar</Text>
            <Spacer />
          </Box>
            <Image src={Imagens.add} h='100%' />
        </Flex>
      </Box>

      <Box
        as='button'
        height='100px'
        width={"100%"}
        lineHeight='1.2'
        transition='all 0.2s cubic-bezier(.08,.52,.52,1)'
        px='8px'
        borderRadius='2px'
        fontSize='14px'
        fontWeight='semibold'
        fontFamily={"Quicksand"}
        bg={Cores.white}
        color='#4b4f56'
        _hover={{ bg: `${Cores.yellowGreemMiddle}` }}
        _active={{
          bg: '#dddfe2',
          transform: 'scale(0.98)',
          

        }}
        _focus={{
          bg: `${Cores.yellowGreemMiddle}`
        }}
      >
        <Flex
          fontFamily={'Quicksand'}
          textColor={Cores.greenMidle}
          fontSize={"20px"}
          h="100%"
        >
           <Box w='100%' h='100%' marginTop={'2.3rem'}>
            <DeleteIcon h={6} w={6} />
            <Spacer />
          </Box>
          <Box w='100%' h='100%' marginTop={'2.3rem'}>
            <Text>Remover</Text>
            <Spacer />
          </Box>
            <Image src={Imagens.remove} h='100%' />
        </Flex>
      </Box>

      <Box
        as='button'
        height='100px'
        width={"100%"}
        lineHeight='1.2'
        transition='all 0.2s cubic-bezier(.08,.52,.52,1)'
        px='8px'
        borderRadius='2px'
        fontSize='14px'
        fontWeight='semibold'
        fontFamily={"Quicksand"}
        bg={Cores.white}
        color='#4b4f56'
        _hover={{ bg: `${Cores.yellowGreemMiddle}` }}
        _active={{
          bg: '#dddfe2',
          transform: 'scale(0.98)',
          

        }}
        _focus={{
          bg: `${Cores.yellowGreemMiddle}`
        }}
      >
        <Flex
          fontFamily={'Quicksand'}
          textColor={Cores.greenMidle}
          fontSize={"20px"}
          h="100%"

        >
           <Box w='100%' h='100%' marginTop={'2.3rem'}>
            <Search2Icon h={6} w={6} />
            <Spacer />
          </Box>
          <Box w='100%' h='100%' marginTop={'2.3rem'}>
            <Text>Buscar</Text>
            <Spacer />
          </Box>
            <Image src={Imagens.search} h='100%' />
        </Flex>
      </Box>


    </>



  );
}

export default Menu;