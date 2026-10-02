// ============================================================
// GALERIA DE FOTOS - fotos reais das obras em /public/imagens/obra/
//
// Para adicionar uma foto: coloque o arquivo em /public/imagens/obra/
// e copie um bloco { ... } abaixo, ajustando "image", "title",
// "subtitle" e "category" (Fachadas, Interiores ou Comercial).
// Para remover, apague o bloco inteiro.
// Esta lista também alimenta o sitemap, o JSON-LD e o llms.txt.
// ============================================================
export type Category = "Fachadas" | "Interiores" | "Comercial";

const OBRA = "/imagens/obra";

export const galleryItems: {
  title: string;
  subtitle: string;
  image: string;
  category: Category;
}[] = [
  { title: "Fachada com Faixas Decorativas", subtitle: "Textura azul com faixas brancas", image: `${OBRA}/fachada-azul-faixas-varanda.jpg`, category: "Fachadas" },
  { title: "Área Gourmet", subtitle: "Pintura amarela com faixas", image: `${OBRA}/area-gourmet-amarela-faixas.jpg`, category: "Interiores" },
  { title: "Casa Turquesa", subtitle: "Fachada e muro com gradil", image: `${OBRA}/casa-turquesa-fachada.jpg`, category: "Fachadas" },
  { title: "Loja Comercial", subtitle: "Pintura interna finalizada", image: `${OBRA}/loja-comercial-depois-iluminada.jpg`, category: "Comercial" },
  { title: "Varanda com Faixas", subtitle: "Pintura azul e acabamento", image: `${OBRA}/varanda-azul-faixas.jpg`, category: "Fachadas" },
  { title: "Cozinha", subtitle: "Teto rebaixado e paredes", image: `${OBRA}/cozinha-teto-rebaixado.jpg`, category: "Interiores" },
  { title: "Fachada Comercial", subtitle: "Pintura grafite", image: `${OBRA}/comercial-fachada-grafite.jpg`, category: "Comercial" },
  { title: "Casa Verde", subtitle: "Fachada e muro", image: `${OBRA}/casa-verde-fachada-frente.jpg`, category: "Fachadas" },
  { title: "Sala de Estar", subtitle: "Pintura verde-água", image: `${OBRA}/sala-estar-verde-agua.jpg`, category: "Interiores" },
  { title: "Casa Bege", subtitle: "Fachada residencial", image: `${OBRA}/casa-bege-fachada.jpg`, category: "Fachadas" },
  { title: "Varanda", subtitle: "Paredes brancas e forro de madeira", image: `${OBRA}/varanda-forro-madeira.jpg`, category: "Fachadas" },
  { title: "Corredor", subtitle: "Pintura lisa branca", image: `${OBRA}/corredor-paredes-brancas.jpg`, category: "Interiores" },
  { title: "Lateral com Faixas", subtitle: "Pintura amarela externa", image: `${OBRA}/lateral-amarela-faixas.jpg`, category: "Fachadas" },
  { title: "Loja Comercial - Antes", subtitle: "Preparação e proteção do piso", image: `${OBRA}/loja-comercial-antes.jpg`, category: "Comercial" },
  { title: "Loja Comercial - Depois", subtitle: "Paredes e teto finalizados", image: `${OBRA}/loja-comercial-depois.jpg`, category: "Comercial" },
  { title: "Casa Cinza", subtitle: "Fachada residencial", image: `${OBRA}/casa-cinza-fachada.jpg`, category: "Fachadas" },
  { title: "Sala", subtitle: "Paredes brancas", image: `${OBRA}/sala-paredes-brancas.jpg`, category: "Interiores" },
  { title: "Casa Verde-Limão", subtitle: "Fachada e varanda", image: `${OBRA}/casa-verde-limao-varanda.jpg`, category: "Fachadas" },
  { title: "Fachada Lateral", subtitle: "Textura azul com faixas", image: `${OBRA}/fachada-azul-faixas-lateral.jpg`, category: "Fachadas" },
  { title: "Sala Ampla", subtitle: "Paredes e forro brancos", image: `${OBRA}/sala-ampla-forro-branco.jpg`, category: "Interiores" },
  { title: "Casa Verde", subtitle: "Fachada com muro", image: `${OBRA}/casa-verde-fachada-muro.jpg`, category: "Fachadas" },
  { title: "Muro e Calçada", subtitle: "Pintura verde e calçada", image: `${OBRA}/casa-verde-muro-calcada.jpg`, category: "Fachadas" },
  { title: "Sala Integrada", subtitle: "Pintura clara", image: `${OBRA}/sala-integrada-pintura-clara.jpg`, category: "Interiores" },
  { title: "Portão com Textura", subtitle: "Grafiato no muro", image: `${OBRA}/portao-textura-grafiato.jpg`, category: "Fachadas" },
  { title: "Fachada com Gradil", subtitle: "Pintura bege", image: `${OBRA}/fachada-bege-gradil.jpg`, category: "Fachadas" },
  { title: "Casa Branca", subtitle: "Pintura externa", image: `${OBRA}/casa-branca-externa.jpg`, category: "Fachadas" },
  { title: "Casa Branca", subtitle: "Lateral finalizada", image: `${OBRA}/casa-branca-lateral.jpg`, category: "Fachadas" },
  { title: "Casa Branca", subtitle: "Fachada e muro", image: `${OBRA}/casa-branca-fachada.jpg`, category: "Fachadas" },
  { title: "Casa Azul", subtitle: "Muro e portão", image: `${OBRA}/casa-azul-portao.jpg`, category: "Fachadas" },
  { title: "Edícula", subtitle: "Pintura azul-acinzentada", image: `${OBRA}/casa-azul-acinzentada.jpg`, category: "Fachadas" },
  { title: "Lateral da Casa", subtitle: "Pintura cinza clara", image: `${OBRA}/lateral-casa-cinza.jpg`, category: "Fachadas" },
  { title: "Casa com Gradil", subtitle: "Muro e fachada cinza", image: `${OBRA}/casa-gradil-cinza.jpg`, category: "Fachadas" },
  { title: "Portão de Garagem", subtitle: "Pintura preta", image: `${OBRA}/portao-garagem-preto.jpg`, category: "Fachadas" },
  { title: "Calçada", subtitle: "Pintura de piso externo", image: `${OBRA}/calcada-pintada.jpg`, category: "Fachadas" },
  { title: "Ambiente Interno", subtitle: "Paredes brancas", image: `${OBRA}/sala-paredes-brancas-piso-cinza.jpg`, category: "Interiores" },
  { title: "Ambiente Interno", subtitle: "Pintura branca", image: `${OBRA}/ambiente-pintura-branca.jpg`, category: "Interiores" },
  { title: "Ambiente Interno", subtitle: "Acabamento finalizado", image: `${OBRA}/ambiente-piso-cinza-brilho.jpg`, category: "Interiores" },
  { title: "Banheiro", subtitle: "Teto branco", image: `${OBRA}/banheiro-teto-branco.jpg`, category: "Interiores" },
];
