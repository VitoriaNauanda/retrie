import React, { useEffect, useRef } from 'react';
import { Flex } from '@chakra-ui/react';
import { Network } from 'vis-network';

import { cores } from '../assets/cores';

function TreeView({ dadosGrafo }) {
  const { nodes, edges } = dadosGrafo;

  console.log(dadosGrafo);

  const options = {
    autoResize: true,
    nodes: {
      shape: 'circle',
      margin: 8,
      widthConstraint: {
        minimum: 20,
      },
      color: {
        background: cores.cream,
        border: cores.skobeloff,
      },
      borderWidth: 2,
      font: {
        face: 'Quicksand',
        size: 18,
        color: cores.skobeloff,
      },
    },
    edges: {
      width: 2,
      color: cores.skobeloff,
      smooth: {
        enabled: false,
      },
    },
    physics: {
      enabled: false,
    },
    layout: {
      improvedLayout: false,
      hierarchical: {
        enabled: true,
        direction: 'UD',
        sortMethod: 'directed',
        levelSeparation: 50,
        shakeTowards: 'roots',
        blockShifting: true,
      },
    },
  };

  const visJsRef = useRef(null);
  useEffect(() => {
    const network =
      visJsRef.current &&
      new Network(visJsRef.current, { nodes, edges }, options);
  }, [visJsRef, dadosGrafo]);

  return (
    <Flex flex={'auto'} h="100vh" align="center" justify="center">
      <div ref={visJsRef} style={{ height: '100%', width: '100%' }} />
    </Flex>
  );
}

export default TreeView;
