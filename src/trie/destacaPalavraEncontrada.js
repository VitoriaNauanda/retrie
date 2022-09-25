import { cores } from '../assets/cores';

export default function destacaPalavraEncontrada(dadosGrafo, palavra) {

  let grafoDestacado = {
    contador: dadosGrafo.contador,
    nodes: dadosGrafo.nodes,
    edges: dadosGrafo.edges,
  };

  let node = grafoDestacado.nodes[0];

  for (let i = 0; i < palavra.length; i++) {
    let arestas = grafoDestacado.edges.filter(edge => edge.from === node.id);

    let proximoNode;
    for (let j = 0; j < arestas.length; j++) {
      proximoNode = grafoDestacado.nodes.find(
        filho => arestas[j].to === filho.id && filho.label === palavra[i]
      );
      if (proximoNode !== undefined) {
        node = proximoNode;
        break;
      }
    }

    node.color.background = cores.juneBud;
  }

  return grafoDestacado;
}
