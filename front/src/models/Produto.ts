import { Categoria } from "./Categoria";

export interface Produto {
  id?: string;
  nome: string;
  descricao: string;
  valor: number;
  quantidade: number;
  criadoEm?: string;
  categoriaId: number;
  categoria?: Categoria;
}
