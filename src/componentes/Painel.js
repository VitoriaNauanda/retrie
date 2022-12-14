import React, { useEffect } from 'react';
import { cores } from '../assets/cores';
import { Imagens } from '../assets/Imagens';
import {
  Box,
  Input,
  VStack,
  Image,
  Text,
  Flex,
  useToast,
} from '@chakra-ui/react';

import Botoes from './Botoes';
import geraGrafoTrie from '../trie/geraGrafoTrie';
import destacaPalavraEncontrada from '../trie/destacaPalavraEncontrada';

function Painel({ trie, dadosGrafo, setDadosGrafo, onToggle }) {

  const [entrada, setEntrada] = React.useState('');
  const handleChange = event => setEntrada(event.target.value);

  const toast = useToast({
    position: 'bottom-right',
    duration: 9000,
    isClosable: true,
  })

  useEffect(() => {
    onToggle(true) 
  },[dadosGrafo])

  // Verifica a operação desejada
  const realizaOperacao = operacao => {

    if (operacao === 'inserir') {
      if (trie.buscar(trie, entrada)) {
        toast({
          variant: 'erro',
          description: 'Palavra '+entrada+' já está na árvore',
          status: 'warning' 
        })
        return;

      }

      trie.inserir(trie, entrada);

      toast({
        variant: 'sucesso',
        description: 'Palavra '+entrada+' inserida',
        status: 'success' 
      })
      
    } else if (operacao === 'remover') {
      if (!trie.buscar(trie, entrada)) {
        toast({
          variant: 'erro',
          description: 'Palavra '+entrada+' não está na árvore',
          status: 'warning' 
        })
        return;
      }

      trie.remover(trie, entrada, 0);

      toast({
        variant: 'sucesso',
        description: 'Palavra '+entrada+' removida',
        status: 'success' 
      })

    } else if (operacao === 'buscar') {
      if (trie.buscar(trie, entrada)) {
        toast({
          variant: 'sucesso',
          description: 'Palavra '+entrada+' encontrada',
          status: 'success' 
        })
        onToggle(false)
        setTimeout(() => setDadosGrafo(destacaPalavraEncontrada(geraGrafoTrie(trie), entrada)), 300);

        return;
      }

      toast({
        variant: 'erro',
        description: 'Palavra '+entrada+' não encontrada',
        status: 'error' 
      })

    }
    onToggle(false)
    setTimeout(() => setDadosGrafo(geraGrafoTrie(trie), entrada), 300);

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
          fontFamily="Nunito"
          fontWeight="medium"
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
          fontFamily="Nunito"
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
          fontFamily={'Nunito'}
          fontWeight={'medium'}
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
