import './Footer.css';

function Footer(){
    return(
        <div className="footer">
            <ul className="uni">
                <li id="menu"><span className='spna'>Email</span><i class="fa fa-envelope" aria-hidden="true"></i></li>
                <li id="menu"><span className='spna'>Github</span><i class="fa fa-github" aria-hidden="true"></i></li>
                <li id="menu"><span className='spna'>Phone-number</span><i class="fa fa-address-book-o" aria-hidden="true"></i></li>
            <h4>Made By LSJ</h4>
            </ul>
        </div>
    );
}

export default Footer;