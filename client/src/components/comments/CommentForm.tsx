import { useState } from 'react';
import './comments.styles.scss';

interface Props{
    handleSubmit:(text:string)=>void,
    submitLabel:string,
    hasCancelButton:boolean,
    initialText?:string,
    handleCancel:()=>void
}

export default function CommentForm({handleSubmit,submitLabel,hasCancelButton,initialText="",handleCancel}:Props){
    const[text,setText]=useState(initialText);

    const isTextareaDisabled=text.length===0;

    const onSubmit=(event: { preventDefault: () => void; })=>{
        event.preventDefault();
        handleSubmit(text);
        setText("");
    }
    return(
        <form onSubmit={onSubmit}>
            <textarea 
            className='comment-form-textarea' 
            value={text} 
            onChange={(e)=>setText(e.target.value)} />
        
        <button className='comment-form-button' disabled={isTextareaDisabled}>{submitLabel}</button>
        {hasCancelButton && (
            <button 
            type='button' 
            className='comment-form-button comment-form-cancel-button' 
            onClick={handleCancel}>
                Cancel
            </button>
        )}
        </form>
    )
}