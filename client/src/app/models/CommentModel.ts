import { User } from "./User";

export interface CommentModel{
    id: string,
    body: string,
    username: string,
    userId: string,
    parentId: null,
    type:string,
    createdAt: string,
    destinationId:string,
    user:User,
}