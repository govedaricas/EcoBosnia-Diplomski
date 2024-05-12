import { useEffect, useState } from "react";
import { getComments as getCommentsApi, 
    createComment as createCommentApi, deleteComment as deleteCommentApi, updateComment as updateCommentApi } from "../../api/commentApi";
import Comment from "./Comment";
import './comments.styles.scss';
import CommentForm from "./CommentForm";
import { CommentModel } from "../../app/models/CommentModel";

interface Props{
    currentUserId:string,
    destinationId:string | undefined,
}

export default function Comments({currentUserId,destinationId}:Props){
    const[backendComments,setBackendComments]=useState([]);
    const[activeComment,setActiveComment]=useState(null);
    const[comments,setComments]=useState<CommentModel[]>([]);
    var change=0;
 

    const rootComments=backendComments.filter(
        (backendComment)=>backendComment.parentId===null
        );

    const getReplies=(commentId: string)=>{
            return backendComments.filter(backendComment=>backendComment.parentId===commentId)
            .sort((a,b)=>new Date(a.createdAt).getTime()-new Date(b.createdAt).getTime())
        }
    const addComment=(text: string,parentId: null | undefined)=>{
        console.log('addComment',text,parentId);
        postData(text);
        change++;

    /*    createCommentApi(text,parentId).then(comment=>{
            setBackendComments([comment,...backendComments]);
        setActiveComment(null);
        })*/
    }
    const user=JSON.parse(localStorage.getItem('user')!);
    const date=new Date();
    const currentDate=date.toISOString();
    const postData = async (text:string) => {
        const dataToSend = {
            "id": 0,
            "body": text,
            "parentId": 3,
            "destinationId":destinationId,
            "createdAt": currentDate,
            "type": "Edited",
            "myProperty": 0
        };
      
        try {
          const response = await fetch('http://localhost:5000/api/Comments', {
            method: 'POST',
            headers: {
              'Authorization': `Bearer ${user.token}`,
              'Content-Type': 'application/json',
              'accept': 'text/plain',
              
              // Add any other headers as needed
            },
            body: JSON.stringify(dataToSend),
            
          });
      
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
      
          // Handle the response as needed
          const responseData = await response.json();
          setBackendComments(responseData);
          console.log(responseData);
          
        } catch (error) {
          console.error('Error:', error);
        }
      };

    const deleteComment= async (commentId: any)=>{
        if(window.confirm('Are you sure that you want to delete comment')){
            const user=JSON.parse(localStorage.getItem('user')!);
            try {
                const response = await fetch(`http://localhost:5000/api/Comments?commentId=${commentId}`, {
                  method: 'DELETE',
                  headers: {
                    'Authorization': `Bearer ${user.token}`,
                    'accept': 'text/plain',
                    
                    // Add any other headers as needed
                  },
                  
                });
            
                if (!response.ok) {
                  throw new Error('Network response was not ok');
                }
            
                // Handle the response as needed
                const responseData = await response.json();
                setBackendComments(responseData);
                console.log(responseData);
                
              } catch (error) {
                console.error('Error:', error);
              }
            
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
        fetch(`http://localhost:5000/api/Comments`)
    .then(response=>response.json())
    .then(data=>{
        const filteredComments = data.filter(comment => comment.destinationId == destinationId);
        if (JSON.stringify(filteredComments) !== JSON.stringify(comments)) {
            setComments(filteredComments);
          }
           // setComments(filteredComments);
    })
    .then(data=>console.log(data))
    .catch(error=>console.log(error))
    },[comments,backendComments]);

    return(
        <div className="comments">
            <h3 className="comments-title"></h3>
            <div className="comment-form-title">Write comment</div>
            <CommentForm submitLabel="Write" handleSubmit={addComment} />
            <div className="comments-container">
                {comments.map(rootComment=>(
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