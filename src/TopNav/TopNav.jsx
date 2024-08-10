import "./TopNav.css"

export default function TopNav() {

    //화면 전환용
    const scrollPage = (pageId) => {
        const e = document.getElementById(pageId);
        if (e && pageId === "ProfilePage") {
            console.log('프로필 페이지임');
            const offset = -90; 
            window.scrollTo({ top: e.offsetTop + offset, behavior: 'smooth' });
        }
        else if (e && pageId === "SkillPage") {
            console.log('스킬 페이지임');
            const offset = -10; 
            window.scrollTo({ top: e.offsetTop + offset, behavior: 'smooth' });
        }
        else{
            console.log('프로젝트 부분');
            const offset = -50; 
            window.scrollTo({ top: e.offsetTop + offset, behavior: 'smooth' });
        }
    };
    
    

    return (
        
            <div className="TN">
                <div className="TN_left">
                    <strong  style={{
                    color: '#191970', 
                    fontFamily: 'Poetsen One, sans-serif'
                }}  onClick={()=>scrollPage('ProfilePage')} >kimnambin</strong>
                    <img className="img1" alt ="" src="https://thumb.ac-illust.com/b2/b2d9b20ae3011ac7f9780f47be41e08b_t.jpeg"></img>
                    <p className="imgp">집요한 개발자</p>
                    <img className="img2" alt ="" src="https://thumb.ac-illust.com/b2/b2d9b20ae3011ac7f9780f47be41e08b_t.jpeg"></img>
                </div>

                <div className="TN_right">
                <p className="top_p" onClick={() => scrollPage('ProfilePage')}>PROFILE</p>
                <p className="top_p" onClick={() => scrollPage('SkillPage')}>SKILLS</p>
                <p className="top_p" onClick={() => scrollPage('ProjectPage')}>PROJECT</p>
                </div>

              
            </div>
            
        
    );
}
