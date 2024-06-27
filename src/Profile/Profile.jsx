import './Profile.css';

export function Profile(){
    return(
    <div className='Profile'>
       <table className="Profile-table">
        <thead colspan="2">
        <td colspan="2">👑김남빈</td>
        </thead>
        <tbody>
            <tr>
                <th>☎️ 연락처</th>
                <td>010-9666-7750</td>
            </tr>
            <tr>
                <th>👤자기소개</th>
                <td className="자기소개" colspan="2">
               <p><span>집요한 개발자 김남빈</span>입니다.</p>
               <p><span>웹/앱 개발자</span>를 꿈꾸고 있습니다.</p>
                </td>
            </tr>
            <tr>
                <th>📱SNS</th>
                <td rowSpan="3">
                <a href="https://github.com/kimnambin"><img className="SNS_img" alt="깃허브" src="https://cdn-icons-png.flaticon.com/512/25/25231.png"></img></a>
                <a href="https://nanifood.tistory.com/"><img className="SNS_img2" alt="티스토리" src="https://img1.daumcdn.net/thumb/R800x0/?scode=mtistory2&fname=https%3A%2F%2Ft1.daumcdn.net%2Fcfile%2Ftistory%2F9931DF3D5B95428108"></img></a>
                <a href="https://drive.google.com/file/d/1_rYxNEEQdgyo87uGeDomsINC0TavDmz3/view"><img className="SNS_img" alt="포폴" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJKMEQebNO6UwOcYaQmwCRDVCGBOLAyjd7AQ&s"></img></a>
                </td>
            </tr>
        </tbody>
    </table>
        </div>
    )
}