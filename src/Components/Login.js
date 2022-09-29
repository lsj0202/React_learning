import * as S from "./Style";
import './Login.css';
import pic1 from './chair.png';

function Login(){
    return(
        <S.Container>
            <S.Join1 src={pic1} alt="black">
            
            </S.Join1>
            <S.Join>
                <h1>Login Page</h1>
                <span id="mam"><i class="fa fa-lock" aria-hidden="true"></i></span><S.Password for="id" placeholder="ID를 입력하세요"> ID </S.Password>
                <input className="log" type="text" placeholder="아이디를 입력하세요!" id="id"/>
                <br/>
                <span id="mam"><i class="fa fa-unlock-alt" aria-hidden="true"></i></span><S.Password for="password" placeholder="PW를 입력하세요"> PW </S.Password>
                <input className="log" type="password" placeholder="비밀번호를 입력하세요" id="password"/>
                <br/>
                <br/>
                <br/>
                <button>로그인</button>
            </S.Join>
        </S.Container>
    );
}


export default Login;

