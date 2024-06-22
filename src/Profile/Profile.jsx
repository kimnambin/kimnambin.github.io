import './Profile.css';

export function Profile(){
    return(
    <div className='Profile'>
       <table>
    <tr>
      <th scope="col">날짜</th>
      <th scope="col">이름</th>
      <th scope="col">성별</th>
    </tr>
    <tr>
      <td>11/15</td>
      <td>김우직</td>
      <td>남</td>
    </tr>
    <tr>
      <td>11/14</td>
      <td>박수진</td>
      <td>여</td>
    </tr>
  </table>
        </div>
    )
}