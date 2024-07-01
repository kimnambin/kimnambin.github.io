import { useEffect, useState } from 'react';
import './Project.css';

export default function Project() {

  // 데이터 받아오기
  const [data, setData] = useState([]); //이게 전체 데이터
  const [url] = useState('/data.json'); //이게 데이터를 가져오는 출처

  const [selectedTitle, setSelectedTitle] = useState('밴러지'); //이게 선택된 데이터

    //데이터를 가져오는 로직
  useEffect(() => {
    fetch(url)
      .then(res => {
        if (!res.ok) {
          throw new Error('오류');
        }
        return res.json();
      })
      .then(json => {
        setData(json);
      })
  }, [url]);

  //제목 선택
  const handleTitleClick = (title) => {
    setSelectedTitle(title);
    console.log('선택된 제목:', title);
  };

  //제목 클릭 시 해당 제목 선택
  const projectTitles = data.map(project => project.title);
  //선택된 제목의 내용에 맞는 거 찾기!!
  const showData = data.find(project => project.title === selectedTitle);


  return (
    <div className="project" id="ProjectPage">
      <div className='pj_top'>
        
        {/* 이게 위의 제목들 */}
        {projectTitles.map((title, index) => (
                                                                        // 제목이 선택되면 selected 발동 아니면 ''
          <h4 key={index} onClick={() => handleTitleClick(title)} className={selectedTitle === title ? 'selected' : ''}>
            {title}
          </h4>
          
        ))}
      </div>

      <div className='pj_mid'>
        <div className='pj_mid_left'>

            {/* 데이터가 선택이 됐으면 ?  내용 : 프젝 선택하라 */}
          {showData ? (
            <div>
              <h2 class='showData_title' >{showData.title}</h2>
              <img class='showData_img' src={showData.image} alt='' />
              <p class="showData_p0">{showData.review}</p>
            </div>
          ) : (
            <p>프로젝트를 선택하세요.</p>
          )}
        </div>

    
    

          {/* 데이터가 선택이 됐으면 ?  내용 : 프젝 선택하라 */}
          {showData ? (
            <div className='pj_mid_right'>
            <div className='right'><p className='showData_p'>📍소개&기능</p><p class="showData_p2">{showData.intro}</p></div>
            <div className='right'>  <p className='showData_p'>📍개발기간</p> <p class="showData_p2">{showData.period}</p></div>
            <div className='right'>  <p className='showData_p'>📍플랫폼</p> <p class="showData_p2">{showData.platform}</p></div>
            <div className='right'>  <p className='showData_p'>📍개발인원</p> <p class="showData_p2">{showData.personnel}</p></div>
            <div className='right'>  <p className='showData_p'>📍사용 기술</p> <p class="showData_p3">{showData.skill}</p></div>
            <div className='right'>  <p className='showData_p'>📍깃허브</p><a href={showData.git}><img className="SNS_img5" alt="깃허브" src="https://cdn-icons-png.flaticon.com/512/25/25231.png"></img></a></div>
              </div>
            ) : (
              <p>프로젝트를 선택하세요.</p>
            )}
    



</div>
        </div>
  );
}
