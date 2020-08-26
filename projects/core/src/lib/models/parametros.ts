export interface Parametros {
  paginacao?: Partial<Paginacao>;
  filtro?: Filtro;
  ordenacao?: Ordenacao;
  pesquisa?: string;
}

export interface Filtro {
  [key: string]: string | number | boolean | Date;
}

export interface Ordenacao {
  ativo: string;
  direcao: 'asc' | 'desc' | '';
}

export interface Paginacao {
  pagina: number;
  tamanho: number;
}

export interface Data<T> {
  dados: T[];
  registros: number;
}
