import { useEffect, useState } from 'react'
import './Project.css'

export default function Project(){

    //데이터 받아오기
    const [data , setData] = useState([]);
    const [url , setUrl] = useState('/data.json');

    useEffect(()=> {
        fetch(url)
        .then(res=> {
            if(!res.ok){
                throw new Error("오류");
            }
            return res.json();
        })
        .then(json => setData(json))
        .catch(err => console.error('에러발생', err));
    },[url]);

    return(
        <div className="project" id="ProjectPage">
        
        <div className='pj_top'>
            <h3>밴러지</h3>
            <h3>이상형 월드컵</h3>
            <h3>투 두 리스트</h3>
            <h3>노드스타그램</h3>
            <h3>TMI</h3>
        </div>

        <div className='pj_mid'>
        <div className='pj_mid_left'>
          {data.map((v, index) => (
            <div key={index}>
              <h4>{v.title}</h4>
              <img src={v.image} alt={v.title} />
              <p>{v.review}</p>
            </div>
          ))}
        </div>

            <div className='pj_mid_right'>
            소개 및 기능
            개발기간
            플랫폼
           개발인원
            나의역할
            사용기술
            깃허브
            </div>

        </div>



        </div>
    )
}