import { NodeInterface } from "../interfaces/node.interface";
import { GroupInterface } from "../interfaces/group.interface";

export interface PayloadFolderInterface extends NodeInterface {
    name: string;
    id: number;
    email: string;
    permissions: GroupInterface[];
}
