import './comments.styles.scss';
import userImage from '../../icons/user.png';
import { CommentModel } from '../../app/models/CommentModel';
import { deleteComment, updateComment } from '../../api/commentApi';
import CommentForm from './CommentForm';
import agent from '../../api/agent';

interface Props{
    comment:CommentModel,
    replies:CommentModel[],
    currentUserId:string,
    deleteComment:(id:string)=>void,
    activeComment:{id:string,type:string},
    setActiveComment:(id:string,type:string)=>void,
    parentId:string
    addComment:(text: string,parentId: null)=>void,
    updateComment:(text:string,id:string)=>void

}

export default function Comment({comment,replies,currentUserId,deleteComment,activeComment,setActiveComment,parentId,addComment,updateComment}:Props){
    const fiveMinutes=300000;
    const userString = localStorage.getItem('user');
    const user=JSON.parse(userString!);
    const timePassed=new Date().getTime()-new Date(comment.createdAt).getTime() > fiveMinutes;
    const canReply=Boolean(currentUserId);
    const canEdit=currentUserId===comment.userId; //&& !timePassed;
    
    const canDelete=(user.username==comment.user.userName); //&& !timePassed;
    const options={ day: 'numeric', month: 'numeric', year: 'numeric' };
    const writeTIme=new Date(comment.createdAt.split('T')[0])
    const createdAt=new Date().toLocaleDateString('en-GB');
    const isReplying=activeComment && activeComment.type ==='replying' && activeComment.id===comment.id;
    const isEditing=activeComment && activeComment.type ==='editing' && activeComment.id===comment.id;
    const replyId=parentId?parentId:comment.id;
    return(
    <div className="comment">
        <div className='comment-right-part'>
        <div className='writeTime'>{writeTIme.toLocaleDateString('en-GB')}</div>
            {!isEditing && <div className='comment-text'>{comment.body}</div>}
            <div className='comment-content'>
                <img className='comment-image-container' src={userImage}/>
                <div className='comment-author'>{comment.user.userName!.toUpperCase()}</div>
                
            </div>
        
            {isEditing && (
                <CommentForm 
                submitLabel='Update' 
                hasCancelButton 
                initialText={comment.body}
                handleSubmit={(text)=>updateComment(text,comment.id)} 
                handleCancel={()=>setActiveComment(null)}
                />
            )}
            <div className='comment-actions'>
                {canReply && <div 
                className='comment-action' 
                onClick={()=>setActiveComment({id:comment.id,type:"replying"})}>Reply</div>}
                {canEdit && <div 
                className='comment-action' 
                onClick={()=>setActiveComment({id:comment.id,type:'editing'})}>Edit</div>}
                {canDelete && <div className='comment-action' onClick={()=>deleteComment(comment.commentId)}>Delete</div>}
            </div>
            {isReplying && (
                <CommentForm 
                submitLabel='Reply' 
                handleSubmit={(text)=>addComment(text,replyId)}
                 />
            )}
            {replies.length>0 && (
                <div className='replies'>
                    {replies.map(reply=>(
                        <Comment 
                        comment={reply} 
                        key={reply.id} 
                        replies={[]} 
                        currentUserId={currentUserId} 
                        deleteComment={deleteComment}
                        parentId={comment.id}
                        addComment={addComment}
                        setActiveComment={setActiveComment}
                        activeComment={activeComment}
                        updateComment={updateComment}
                        />
                    ))}
                </div>
            )}
        </div>
    </div>
    )
}