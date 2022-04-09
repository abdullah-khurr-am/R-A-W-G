import { useDispatch } from "react-redux";
import "../style/topnav.css"

const TopNav = () => {
    return ( 
    <div className="top-nav">
        <h4 style={{width:"7%"}}>RAWG</h4>
        <SearchBar/>
        <div className="top-nav-items">
            <div className="profilepic"></div>
            <img src="https://img.icons8.com/ios-filled/50/ffffff/appointment-reminders--v1.png" height={30} style={{marginLeft:"1.4em"}}/>
        </div>
    </div> );
}

const SearchBar = () => {
    const redux_dispatcher = useDispatch(); 
    const searchinput = (e) =>{
        // if(e.key === "Enter")
            //why not just call axios to put searched item inside the redux instead of saving the searched input in the redux aswell
    }
    return ( 
    <div className="searchbar">
        <img src="https://img.icons8.com/ios-glyphs/60/000000/search--v1.png" height={20}/>
        <input type="text" placeholder="Pick Your Poison" onKeyUp={e =>searchinput(e)}/>
    </div> );
}
 
 
export default TopNav;