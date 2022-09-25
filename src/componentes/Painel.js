import React, { useEffect } from 'react';
import { cores } from '../assets/cores';
import { Imagens } from '../assets/Imagens';
import {
  ChakraProvider,
  Box,
  Stack,
  Input,
  VStack,
  Image,
  Text,
  Flex,
} from '@chakra-ui/react';

import Botoes from './Botoes';
import geraGrafoTrie from '../trie/geraGrafoTrie';
import destacaPalavraEncontrada from '../trie/destacaPalavraEncontrada';

function Painel({ trie, dadosGrafo, setDadosGrafo }) {
  const [entrada, setEntrada] = React.useState('');
  const handleChange = event => setEntrada(event.target.value);

  // Verifica a operação desejada
  const realizaOperacao = operacao => {
    let novoGrafo = {
      contador: dadosGrafo.contador,
      nodes: dadosGrafo.nodes,
      edges: dadosGrafo.edges,
    };

    if (operacao === 'inserir') {
      trie.inserir(trie, entrada);
      console.log(trie);
    } else if (operacao === 'remover') {
      trie.remover(trie, entrada, 0);
    } else if (operacao === 'buscar') {
      if (trie.buscar(trie, entrada)) {
        setDadosGrafo(destacaPalavraEncontrada(geraGrafoTrie(trie), entrada));
        console.log("achou")
      }
      return;
    }

    setDadosGrafo(geraGrafoTrie(trie));
  };

  return (
    <VStack spacing={0} bgColor={cores.white} h="100vh" w="25vw" shadow={'lg'}>
      <Flex
        borderTopStartRadius={10}
        position={'absolute'}
        flex={'auto'}
        align={'center'}
        justify={'flex-start'}
        ml={10}
        mt={10}
      >
        <Image src={Imagens.icon} w="15%" h="15%" mr={5} />
        <Text
          color={cores.juneBud}
          fontSize={24}
          fontFamily="Quicksand"
          fontWeight="semibold"
        >
          Retrie
        </Text>
      </Flex>
      <Image pb={5} src={Imagens.header} width="100%"></Image>

      <Box
        w="90%"
        direction={'column'}
        borderRadius={25}
        borderWidth="0px"
        textColor={'white'}
        background={cores.cream}
        p={4}
      >
        <Text
          textAlign="start"
          textColor={cores.greenMiddle}
          fontFamily="Quicksand"
          fontWeight={'semibold'}
          fontSize={14}
          marginTop={3}
        >
          {' '}
          Digite uma palavra
        </Text>
        <Input
          variant="outline"
          bg={cores.white}
          borderRadius={15}
          borderWidth={2}
          focusBorderColor={cores.greenMiddle}
          textColor={cores.greenMiddle}
          width={'100%'}
          py={6}
          marginTop={3}
          value={entrada}
          onChange={handleChange}
          fontFamily={'Quicksand'}
          fontWeight={'semibold'}
          fontSize={14}
          placeholder="Por exemplo, abacaxi"
          _placeholder={{
            opacity: 1,
            color: 'gray.500',
            fontWeight: 'medium',
          }}
        />
      </Box>

      <Botoes onClickBotao={realizaOperacao} />
    </VStack>
  );
}

export default Painel;
