import './Home.css';
import pic from  './black.png';
import * as S from "./Style"

function Home() {
    if(window.location.pathname === '/checkout') return null;
    return (
       <>
         <body>
            <S.Why src={pic} alt="why">
                 
            </S.Why>
        </body>
       </> 
    );
}

export default Home;