import React from 'react';
import './Header.css';
import amazon from './amazon.jpg';

function Header() {
    return (
        <div className="header">
            <img className="header-logo" src={amazon} alt="amazon"></img>

            <div className="header_search">
                <input className="header_searchInput" type="text"></input>
            </div>

            <div className="header_nav">

                <div className="header_option">
                    <span className="header_optionLineOne">안녕하세요 !</span>
                    <span className="header_optionLineTwo">로그인하기!</span>
                </div>

                <div className="header_option">
                    <span className="header_optionLineOne">돌아가기</span>
                    <span className="header_optionLineTwo">주문내역</span>
                </div>

                <div className="header_option">
                    <span className="header_optionLineOne">반가워요</span>
                    <span className="header_optionLineTwo">구독과좋아요</span>
                </div>
            </div>
        </div>
    );
}

export default Header;