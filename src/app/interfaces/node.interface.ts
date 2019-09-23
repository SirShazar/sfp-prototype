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
  transferStatus: string;
  transferDate: string;
}
