import "./TopNav.css"

export default function TopNav() {

    //화면 전환용
    const scrollPage = (pageId) => {
        const e = document.getElementById(pageId);
        if (e) {
            e.scrollIntoView({ behavior: 'smooth' }); //스크롤의 부드럽게 해주는 것
        }
    };

    return (
        
            <div className="TN">
                <div className="TN_left">
                    <strong onClick={()=>scrollPage('ProfilePage')} >김남빈</strong>
                    <img className="img1" alt ="" src="https://thumb.ac-illust.com/b2/b2d9b20ae3011ac7f9780f47be41e08b_t.jpeg"></img>
                    <p>집요한 개발자</p>
                    <img className="img2" alt ="" src="https://thumb.ac-illust.com/b2/b2d9b20ae3011ac7f9780f47be41e08b_t.jpeg"></img>
                </div>

                <div className="TN_right">
                <p className="top_p" onClick={() => scrollPage('ProfilePage')}>PROFILE</p>
                <p className="top_p" onClick={() => scrollPage('ProjectPage')}>PROJECT</p>
                <p className="top_p" onClick={() => scrollPage('FooterPage')}>FOOTER</p>
                </div>

              
            </div>
            
        
    );
}
