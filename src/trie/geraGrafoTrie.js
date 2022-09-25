import { cores } from '../assets/cores';

function varreTrie(node, index, dadosGrafo) {
  let idPai = dadosGrafo.contador;

  dadosGrafo.nodes.push({
    id: dadosGrafo.contador,
    label: index === null ? '' : String.fromCharCode(index + 'a'.charCodeAt(0)),
    color: { background: cores.cream }
  });

  let filhos = [];
  node.filhos.forEach((filho, indexFilho) => {
    if (filho !== undefined && filho !== null) {
      //filhos.push(String.fromCharCode(index + 'a'.charCodeAt(0)))
      filhos.push(indexFilho);
    }
  });

  filhos.forEach(filho => {
    dadosGrafo.contador++;

    dadosGrafo.edges.push({
      from: idPai,
      to: dadosGrafo.contador,
    });

    varreTrie(node.filhos[filho], filho, dadosGrafo);
  });
}

export default function geraGrafoTrie(raiz) {
  let dadosGrafo = { contador: 0, nodes: [], edges: [] };
  varreTrie(raiz, null, dadosGrafo);

  return dadosGrafo;
}
