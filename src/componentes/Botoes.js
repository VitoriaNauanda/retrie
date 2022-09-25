import React, { useEffect } from 'react';
import { cores } from '../assets/cores';
import { Imagens } from '../assets/Imagens';
import { Search2Icon, AddIcon, DeleteIcon } from '@chakra-ui/icons'
import {
  Flex,
  Box,
  Image,
  Text,
} from '@chakra-ui/react';

function Botoes({onClickBotao}) {

  return (
    
    <Box>
      <Box
        as='button'
        mt={5}
        width={"100%"}
        lineHeight='1.2'
        transition='all 0.2s cubic-bezier(.08,.52,.52,1)'
        borderRadius='0px'
        bg={cores.white}
        color='#4b4f56'
        _hover={{ bg: cores.yellowGreenMiddle }}
        _active={{
          bg: cores.juneBud,
          transform: 'scale(0.98)',
        }}
        _focus={{
          boxShadow: cores.juneBud
        }}
        onClick={() => onClickBotao("inserir")}
      >
        <Flex
          textColor={cores.greenMiddle}
          h="100%"
          justify={"space-between"}
        >
          
          <Flex flex={"auto"} align={"center"} justify={"flex-start"}>
            <AddIcon mx={8} h={4} w={4} />
            <Text fontSize={"16px"} fontWeight='semibold' fontFamily={"Quicksand"}>Inserir</Text>
          </Flex>
          <Image src={Imagens.add} w='12vh' />
          
        </Flex>
      </Box>

      <Box
        as='button'
        width={"100%"}
        lineHeight='1.2'
        transition='all 0.2s cubic-bezier(.08,.52,.52,1)'
        borderRadius='0px'
        bg={cores.white}
        color='#4b4f56'
        _hover={{ bg: cores.yellowGreenMiddle }}
        _active={{
          bg: cores.juneBud,
          transform: 'scale(0.98)',
        }}
        _focus={{
          boxShadow: cores.juneBud
        }}
        onClick={() => onClickBotao("remover")}
      >
        <Flex
          textColor={cores.greenMiddle}
          h="100%"
          justify={"space-between"}
        >

          <Flex flex={"auto"} align={"center"} justify={"flex-start"}>
            <DeleteIcon mx={8} h={4} w={4} />
            <Text fontSize={"16px"} fontWeight='semibold' fontFamily={"Quicksand"}>Remover</Text>
          </Flex>
          <Image src={Imagens.remove} w='12vh' />
        </Flex>
      </Box>

      <Box
        as='button'
        width={"100%"}
        lineHeight='1.2'
        transition='all 0.2s cubic-bezier(.08,.52,.52,1)'
        borderRadius='0px'
        bg={cores.white}
        color='#4b4f56'
        _hover={{ bg: cores.yellowGreenMiddle }}
        _active={{
          bg: cores.juneBud,
          transform: 'scale(0.98)',
        }}
        _focus={{
          boxShadow: cores.juneBud
        }}
        onClick={() => onClickBotao("buscar")}
      >
        <Flex
          textColor={cores.greenMiddle}
          h="100%"
          justify={"space-between"}
        >
          <Flex flex={"auto"} align={"center"} justify={"flex-start"}>
            <Search2Icon mx={8} h={4} w={4} />
            <Text fontSize={"16px"} fontWeight='semibold' fontFamily={"Quicksand"}>Buscar</Text>
          </Flex>
          <Image src={Imagens.search} w='12vh' />
        </Flex>
      </Box>


    </Box>



  );
}

export default Botoes;