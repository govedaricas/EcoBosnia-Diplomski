import './button.styles.scss';

interface Props{
    name:string
}

export default function Button({name}:Props){
    return(
        <button className="button-class">{name}</button>
    )
}