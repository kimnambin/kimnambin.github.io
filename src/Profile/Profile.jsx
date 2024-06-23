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
                <a href="https://github.com/kimnambin"><img className="SNS_img" alt="깃허브" src="https://i.namu.wiki/i/R8rNsOU-rr3kk8KbKtPSyx5J-nYiST8T0Zo5EMl0yRljRr_sM5G_7UjIAR4ODr0eELRuVio_bqRPi_qzzanvog.svg"></img></a>
                <a href="https://nanifood.tistory.com/"><img className="SNS_img" alt="티스토리" src="https://i.namu.wiki/i/fg3OD3Oi80Oot51FVCIVzNcbittKm3aCFbr6gDGWPlAvpXEm3Bvc-yMnrnEnUR5aOTO4cYk46FvRi9xwu-IVh2WDiTtBqY8m8uvfF4tcgs-Qxqx1rXZMSiaMR1oeFpy8MH8dl5w0zn08FoRn_71KEw.svg"></img></a>
                <a href="https://drive.google.com/file/d/1_rYxNEEQdgyo87uGeDomsINC0TavDmz3/view"><img className="SNS_img" alt="포폴" src="https://i.namu.wiki/i/QiqUMgfa8UGI-c3DuzX4c_vgG3ZOTBuyNYWNQcSbbw9CJDJeLBnL-RzitNG_forxpA12-24LNeCdGyRrxnUncGSosfqzmy_ncbYzJmGE9QwADMsVVJu_UBB-kNpmSngIUgx5vEm21EeKL9Gc8Dv5Ww.svg"></img></a>
                </td>
            </tr>
        </tbody>
    </table>
        </div>
    )
}