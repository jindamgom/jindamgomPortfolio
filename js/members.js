/**
 * members 회원목록 페이지
 * web storage(local)에 저장된 값을 가져와서 테이블에 출력
 */
class GuestBook{
    constructor(userId,password,createdAt = Date.now()){
        this.userId = userId;
        this.password = password;
        this.createdAt = createdAt;
    }
}
/**
 * localStroage guestbooks를 화면에 출력하기
 * -guestbook->tr
 * -일시 : mills-> Date->mm/dd hh:mi 월/일 시:분
 * -방명록을 작성한 후 테이블이 표시..
 */
const renderGuestBooks = () =>{

    console.log("renderGuestBooks");
    //1.guestbooks 읽어오기.
    const readGuestBooks = JSON.parse(localStorage.getItem('guestbooks'))|| [];

    //2.reduce 사용해서 작성해보기.
    //첫번째 요소인 html은 누적값이다.
    //https://tocomo.tistory.com/26
    document.querySelector("#table_member tbody").innerHTML = 
    readGuestBooks.reduce((html,{userId,password,createdAt},index)=>{
        return`
        ${html}<tr><th><img src="/images/icon_user.png"></th><th>${userId}</th><th>${convertToDateTime(createdAt)}</th></tr>`;
        },"");
};

//한자리수 포맷을 위한 함수[두자리만들기]
const f = (n) => n<10? '0' +n :n;
//날짜 변환 함수 만들기
const convertToDateTime = (millis) =>{
    const d= new Date(millis);
    const mm = f(d.getMonth()+1);
    const dd = f(d.getDate());
    const hh = f(d.getHours());
    const mi = f(d.getMinutes());
    return `${mm}/${dd} ${hh}:${mi}`;
};
