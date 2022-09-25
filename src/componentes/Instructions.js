import React from 'react';
import { Box, Center, Flex, Image, Text } from '@chakra-ui/react';
import { cores } from '../assets/cores';
import { Imagens } from '../assets/Imagens';

function Instructions() {
  return (
    <Flex flexDirection={'column'} alignItems={'center'}>
      <Flex
        shadow="xl"
        py={5}
        px={8}
        pt={20}
        w="auto"
        flexDirection={'column'}
        borderRadius={15}
        bg={'white'}
        fontWeight={'medium'}
        fontFamily={'Nunito'}
        fontSize={14}
        color={cores.skobeloff}
      >
        <Flex py={2} align={'center'}>
          <Box
            h={6}
            w={6}
            borderRadius={6}
            bg={cores.juneBud}
            mr={5}
            alignItems={'center'}
            justifyContent={'center'}
          >
            <Text
              display={'flex'}
              h="100%"
              fontWeight={'semibold'}
              alignItems={'center'}
              justifyContent={'center'}
            >
              1
            </Text>
          </Box>

          <Text>Digite uma palavra no campo de entrada</Text>
        </Flex>
        <Flex py={2} align={'center'}>
          <Box
            h={6}
            w={6}
            borderRadius={6}
            bg={cores.juneBud}
            mr={5}
            alignItems={'center'}
            justifyContent={'center'}
          >
            <Text
              display={'flex'}
              h="100%"
              fontWeight={'semibold'}
              alignItems={'center'}
              justifyContent={'center'}
            >
              2
            </Text>
          </Box>
          <Text>Escolha uma operação para essa palavra</Text>
        </Flex>
        <Flex py={2} align={'center'}>
          <Box
            h={6}
            w={6}
            borderRadius={6}
            bg={cores.juneBud}
            mr={5}
            alignItems={'center'}
            justifyContent={'center'}
          >
            <Text
              display={'flex'}
              h="100%"
              fontWeight={'semibold'}
              alignItems={'center'}
              justifyContent={'center'}
            >
              3
            </Text>
          </Box>

          <Text>A árvore Trie resultante será mostrada</Text>
        </Flex>
      </Flex>
      <Image src={Imagens.treeWindow} w="15%" h="15%" mt={-310} />
    </Flex>
  );
}

export default Instructions;
