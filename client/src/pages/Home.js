import React, { useEffect, useState } from 'react';
import '../styles/style-home.css';
import { capsule, cap_shadow, ic_list, ic_addpost } from '../assets/index.js';
import { BasicButton } from '../components/index.js';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Home = () => {
  const navigate = useNavigate();
  const userInfo = useSelector((state) => state.user);

  // Check if userInfo is available before rendering
  if (userInfo) {
    return (
      <div className="container home">
        <div className="greeting">
          <h2>안녕하세요,</h2>
          <h2>
            <span>{userInfo.name}</span>&nbsp;님
          </h2>
        </div>
        <div className="cap-div">
          <div className="cap-txt-area">
            <p>도착한 캡슐</p>
            <p>{userInfo.uncheckedCount}</p>
          </div>
          <img src={capsule} />
          <img src={cap_shadow} id="shadow" />
        </div>
        <div className="btn-row-div">
          <BasicButton onClick={() => navigate('/capsulelist')}>
            <img src={ic_list} className="ic"></img>
            <p>전체보기</p>
          </BasicButton>
          <BasicButton onClick={() => navigate('/create')}>
            <img src={ic_addpost} className="ic"></img>
            <p>새로운 캡슐 보내기</p>
          </BasicButton>
        </div>
      </div>
    );
  } else {
    return <div>로딩중...</div>;
  }
};

export default Home;
