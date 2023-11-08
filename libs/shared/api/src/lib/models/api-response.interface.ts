export interface ApiMetaInfo {
  version: '1.0';
  type: 'object' | 'list' | 'none';
  count: number;
}

export interface ApiResponse<T> {
  results?: T[] | T;
  info: ApiMetaInfo;
}
