import './Header.css';
import {Link} from "react-router-dom";

function Header(){
    return(
        <>
        <header className='header'>
            <Link to='/'>
            <h1 className="gotomain">사진</h1>
            </Link>
            <ul className="un">
                <li id="menu"><span className='spna'>Search</span><i class="fa fa-search" aria-hidden="true"></i></li>
                <Link to='/checkout'>
                    <li id="menu"><span className='spna'>Login</span><i class="fa fa-sign-in" aria-hidden="true"></i></li>
                </Link>
                <li id="menu"><span className='spna'>Question</span><i class="fa fa-question" aria-hidden="true"></i></li>
            </ul>
        </header>
        </>
    );
}

export default Header;