export interface NodeInterface {
  isRoot: boolean;
  id: number;
  name: string;
  parentNode?: number;
  isFolder: boolean;
  children?: any;
  size: number;
  url: string;
  modifiedDate: string;
  transferStatusJPL: string;
  transferStatusMS: string;
  transferDateJPL: string;
  transferDateMS: string;
}
