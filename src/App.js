import React, { useState, useEffect } from 'react';

import {
  ChakraProvider,
  HStack,
  Flex,
  ScaleFade,
} from '@chakra-ui/react';

import WebFont from 'webfontloader';

import { cores } from './assets/cores';
import { customTheme } from './assets/customTheme';
import Painel from './componentes/Painel';
import TreeView from './componentes/TreeView';
import { TrieNode } from './trie/TrieNode';

// Criação da árvore
let raiz = new TrieNode();

function App() {
  useEffect(() => {
    WebFont.load({
      google: {
        families: ['Quicksand'],
      },
    });
  }, []);

  // Estrutura inicial do grafo
  const grafoInicial = {
    contador: 0,
    nodes: [],
    edges: [],
  };

  const [dadosGrafo, setDadosGrafo] = useState({ ...grafoInicial });
  const [ grafoVisivel, onToggle ] = useState(true);

  return (
    <ChakraProvider theme={customTheme} h={'100%'}>
      <Flex textAlign="center" fontSize="xl" bgColor={cores.dark} h="100%">
        <HStack
          spacing={0}
          bgColor={cores.mintCream}
          display={'flex'}
          shadow={'2xl'}
          w="100%"
          h="100%"
        >
          {/* Componente da esquerda */}
          <Painel
            trie={raiz}
            dadosGrafo={dadosGrafo}
            setDadosGrafo={setDadosGrafo}
            onToggle={onToggle}
          />

          {/* Componente da direita*/}
          <ScaleFade in={grafoVisivel}>
            <TreeView dadosGrafo={dadosGrafo} />
          </ScaleFade>
        </HStack>
      </Flex>
    </ChakraProvider>
  );
}

export default App;
