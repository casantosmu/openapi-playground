export interface CollectionParameters {
  filter?: string | string[];
  orderBy?: string | string[];
  limit?: number;
  skip?: number;
}

export interface CollectionPaginated<T> {
  total: number;
  limit: number;
  skip: number;
  value: T[];
}
