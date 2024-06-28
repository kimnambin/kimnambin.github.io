import './Project.css'

export default function Project(){
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
                    <h5>제목</h5>
                    이미지
                    후기
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