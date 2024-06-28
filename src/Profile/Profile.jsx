import './Profile.css';

export default function Profile(){
    return(
    <div className='Profile'>
       <table className="Profile-table" id="ProfilePage">
        <thead colSpan={2}>
        <td colSpan={2}>👑김남빈</td>
        </thead>
        <tbody>
            <tr>
                <th>☎️ 연락처</th>
                <td className="자기소개">010-9666-7750</td>
            </tr>
            <tr>
                <th>👤자기소개</th>
                <td className="자기소개" colSpan={2}>
               <p><span>집요한 개발자 김남빈</span>입니다.</p>
               <p><span>웹/앱 개발자</span>를 꿈꾸고 있습니다.</p>
                </td>
            </tr>
            <tr>
                <th>📜수상내역</th>
                <td className="수상내역" colSpan={3}>
               <p className='수상내역_p'>2023 학술 경진대회 우수상</p>
               <p className='수상내역_p'>2023 IIBC 국내 학술 대회 우수논문상</p>
               <p className='수상내역_p'>2024 KCI 논문 기제</p>
                </td>
            </tr>
            <tr>
                <th>🔗링크</th>
                <td className="링크"> 
                <a href="https://github.com/kimnambin"><img className="SNS_img" alt="깃허브" src="https://cdn-icons-png.flaticon.com/512/25/25231.png"></img></a>
                <a href="https://nanifood.tistory.com/"><img className="SNS_img2" alt="티스토리" src="https://img1.daumcdn.net/thumb/R800x0/?scode=mtistory2&fname=https%3A%2F%2Ft1.daumcdn.net%2Fcfile%2Ftistory%2F9931DF3D5B95428108"></img></a>
                <a href="https://drive.google.com/file/d/1_rYxNEEQdgyo87uGeDomsINC0TavDmz3/view"><img className="SNS_img3" alt="포폴" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJKMEQebNO6UwOcYaQmwCRDVCGBOLAyjd7AQ&s"></img></a>
                <a href="https://www.kci.go.kr/kciportal/ci/sereArticleSearch/ciSereArtiView.kci?sereArticleSearchBean.artiId=ART003075378"><img className="SNS_img3" alt="논문" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiEj1r4OEs-Zg0v4dOISSJ1MqWMrdEye4t8w&s"></img></a>
                </td>
            </tr>
        </tbody>
    </table>

    
    <div className='full_skill'>
        <div className='skill_title'>
            <h2 className='title_h2'>💻SKILLS</h2>
        </div>
    <div className="skill">
        <div className="FE"> 
            <strong className='skill_strong'>Frontend</strong>

            <div className='FE1'>
            <img className="skill_img" alt="" src="https://camo.githubusercontent.com/d30449fa2dbae519940a0d08f0202996163310b8c6b9336480232cfb48d38286/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f68746d6c352d4533344632363f7374796c653d666f722d7468652d6261646765266c6f676f3d68746d6c35266c6f676f436f6c6f723d7768697465" />
            <img className="skill_img" alt="" src="https://camo.githubusercontent.com/f432d617c378401551c4ba1fa6670f2e4e4ec6676cf3b8370096f3f8b66554ee/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f6373732d3135373242363f7374796c653d666f722d7468652d6261646765266c6f676f3d63737333266c6f676f436f6c6f723d7768697465" />
            <img className="skill_img" alt="" src="https://camo.githubusercontent.com/ada167c2d900ced729acc76ee6de2d312e7043891e43e17c2eba1a1ef1af25ed/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f4a6176615363726970742d4637444631453f7374796c653d666f722d7468652d6261646765266c6f676f3d6a617661736372697074266c6f676f436f6c6f723d7768697465" />
            </div>

            <div className='FE2'>
            <img className="skill_img" alt="" src="https://camo.githubusercontent.com/2081d92c054dbf7eec9521ade73051ed66fb9ccffb53e33213585fbf23ec2d52/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f446172742d3031373543323f7374796c653d666f722d7468652d6261646765266c6f676f3d64617274266c6f676f436f6c6f723d7768697465" />
            <img className="skill_img" alt="" src="https://camo.githubusercontent.com/46eb76b14ec311ad47791a6021529de2f3079fb5ffe5af8e81d92e8b3e488efa/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f466c75747465722d3032353639423f7374796c653d666f722d7468652d6261646765266c6f676f3d466c7574746572266c6f676f436f6c6f723d7768697465" />
            <img className="skill_img" alt="" src="https://camo.githubusercontent.com/c1e649d1c92fecb4c4565b4f70ec7841cf945e5f56a9e3eb01de04823d50059d/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f52656163742e6a732d3631444146423f7374796c653d666f722d7468652d6261646765266c6f676f3d5265616374266c6f676f436f6c6f723d7768697465" />
            </div>
       
        </div>


        <div className="BE"> 
        <strong className='skill_strong'>Backend</strong>
        
        <div className='BE1'>
        <img className="skill_img" alt="" src="https://camo.githubusercontent.com/a10d66d974953cf322da5a9a91abe4c313d324fc7f653d399a477964cc40b026/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f507974686f6e2d3037343035453f7374796c653d666f722d7468652d6261646765266c6f676f3d707974686f6e266c6f676f436f6c6f723d7768697465" />
        <img className="skill_img" alt="" src="https://camo.githubusercontent.com/cc0b54d92d3a06a62d981876da0192ed365e180d0fb6dfa3933172e1aa75d159/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f4e6f64652e6a732d3333393933333f7374796c653d666f722d7468652d6261646765266c6f676f3d4e6f64652e6a73266c6f676f436f6c6f723d7768697465" />
        </div>

        <div className='BE2'>
        <img className="skill_img" alt="" src="https://camo.githubusercontent.com/4ae569342c64ecd9f0d7e7cbed78fffcca6a0f427e8efb4297c1d357dfb09074/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f4d6f6e676f44422d3445413934423f7374796c653d666f722d7468652d6261646765266c6f676f3d6d6f6e676f6462266c6f676f436f6c6f723d7768697465" />
        <img className="skill_img" alt="" src="https://res.cloudinary.com/practicaldev/image/fetch/s--OvXzauo0--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://img.shields.io/badge/MySQL-00000F%3Fstyle%3Dfor-the-badge%26logo%3Dmysql%26logoColor%3Dwhite" />
        </div>

        </div>

       </div>
       </div>
        
        
    </div>

    )
}