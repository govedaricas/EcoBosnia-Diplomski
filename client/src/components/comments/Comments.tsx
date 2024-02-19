import { useEffect, useState } from "react";
import { getComments as getCommentsApi, 
    createComment as createCommentApi, deleteComment as deleteCommentApi, updateComment as updateCommentApi } from "../../api/commentApi";
import Comment from "./Comment";
import './comments.styles.scss';
import CommentForm from "./CommentForm";


export default function Comments({currentUserId}:{currentUserId:string}){
    const[backendComments,setBackendComments]=useState([]);
    const[activeComment,setActiveComment]=useState(null);

    const rootComments=backendComments.filter(
        (backendComment)=>backendComment.parentId===null
        );

    const getReplies=(commentId: string)=>{
            return backendComments.filter(backendComment=>backendComment.parentId===commentId)
            .sort((a,b)=>new Date(a.createdAt).getTime()-new Date(b.createdAt).getTime())
        }
    const addComment=(text: string,parentId: null | undefined)=>{
        console.log('addComment',text,parentId);
        createCommentApi(text,parentId).then(comment=>{
            setBackendComments([comment,...backendComments]);
        setActiveComment(null);
        })
    }
    const deleteComment=(commentId: any)=>{
        if(window.confirm('Are you sure that you want to remove comment')){
            deleteCommentApi(commentId).then(()=>{
                const updatedBackendComments=backendComments.filter(
                    (backendComment)=>backendComment.id!==commentId);
                
                setBackendComments(updatedBackendComments);
            });
        }
    }
    const updateComment=(text:string,commentId:string)=>{
        updateCommentApi(text,commentId).then(()=>{
            const updatedBackendComments=backendComments.map(backendComment=>{
                if(backendComment.id===commentId){
                    return{...backendComment,body:text};
                }
                return backendComment;
            });
            setBackendComments(updatedBackendComments);
            setActiveComment(null);
        })
    }



    useEffect(()=>{
        getCommentsApi().then(data=>{
            setBackendComments(data);
        })
    },[])
    return(
        <div className="comments">
            <h3 className="comments-title"></h3>
            <div className="comment-form-title">Write comment</div>
            <CommentForm submitLabel="Write" handleSubmit={addComment} />
            <div className="comments-container">
                {rootComments.map(rootComment=>(
                    <Comment 
                    key={rootComment.id} 
                    comment={rootComment} 
                    replies={getReplies(rootComment.id)} 
                    currentUserId={currentUserId}
                    deleteComment={deleteComment}
                    activeComment={activeComment}
                    setActiveComment={setActiveComment}
                    addComment={addComment}
                    updateComment={updateComment}
                    />
                ))}
            </div>
        </div>
    )
}