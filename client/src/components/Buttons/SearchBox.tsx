import './searchbox.styles.scss';

export default function SearchBox(){
    return(
    <div className="search-box">
    <input type="text" className="input-search" placeholder="Type to Search..." />
  </div>
    )
}