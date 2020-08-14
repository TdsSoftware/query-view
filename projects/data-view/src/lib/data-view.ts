export interface HttpResponse<T> {
  data: T[];
  length: number;
}

export interface Parametros {
  pagination: Paginacao;
  filter?: Filtro;
  sort?: Ordenacao;
  search?: string;
}

export interface Filtro {
  [key: string]: string | number | boolean | Date;
}

export interface Ordenacao {
  active: string;
  direction: 'asc' | 'desc';
}

export interface Paginacao {
  pageIndex: number;
  pageSize: number;
}
