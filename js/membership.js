/* #membership_div:hover .tooltiptext
{
    visibility: visible;
} */

//태그 객체를 이렇게 가져올 수 있다. :)
const frm = document.guestbookFrm;
const userId = frm.userId;
const password = frm.password;
const con_password =frm.con_password;

/**
 * submit 핸들러 (유효성검사)
 */
document.guestbookFrm.onsubmit = (e) =>{
   

    //태그별로 유효성을 검사하자.
    //1.유저아이디(닉네임)
    if(!/^[A-Za-z0-9가-힣 ]{2,}$/.test(userId.value))
    {
        alert('유효한 닉네임을 작성해주세요.');
       
        return false; //or e.preventDefault(); return; (pre자체로는 조기리턴x 그래서 return을 또 씀)

    }


    const pw_check = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[~!@#$%^&*()+|=])[A-Za-z\d~!@#$%^&*()+|=]{8,}$/;
    //비밀번호 유효성 검사
    //if(!/^.{8,}$/.test(password.value))
    if(!pw_check.test(password.value))
    {
        alert('조건에 맞는 비밀번호를 작성해주세요.');
        return false;
    }
    //패스워드체크시 기존 패스워드와 값이 일치하는지 
    if(con_password.value!==password.value)
    {
        alert('패스워드가 일치하지 않습니다.');
        return false;
    }
};


//조건에 유효한 아이디,비밀번호를 입력했다면 form->saveMember 호출
const saveMember = () =>{
    console.log('saveMember 호출...');
    //const guestbooks = []; //문제는 이렇게 하면 한번밖에 저장을 못함..[이전것 덮어씌워짐]
    //guestbooks로 저장된 배열이 있다면 그것을 getitem해서 사용하고 없으면 새 배열을 생성한다.
    const guestbooks = JSON.parse(localStorage.getItem('guestbooks')) || [];
    guestbooks.push(new GuestBook(userId.value,password.value));
    localStorage.setItem('guestbooks',JSON.stringify(guestbooks));

    frm.reset();//기존의 폼을 초기화한다(텍스트 날리기)
    alert('회원 가입이 완료 되었습니다 :)');
};

//유저 정보 저장. 아이디,비밀번호,생성(저장된)시간
class GuestBook{
    constructor(userId,password,createdAt = Date.now()){
        this.userId = userId;
        this.password = password;
        this.createdAt = createdAt; //저장된 시간.
    }
}
