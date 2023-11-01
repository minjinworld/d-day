const messagecontainer = document.querySelector("#d-day-message");
const  container = document.querySelector("#d-day-container");

// container.style.display = "none";
messagecontainer.textContent = "D-Day를 입력해주세요.";


const dateFormMarker = () => {
    const inputYear = document.querySelector('#target-year-input').value;
    const inputMonth = document.querySelector('#target-month-input').value;
    const inputDate = document.querySelector('#target-date-input').value;

    const dateFormat = `${inputYear}-${inputMonth}-${inputDate}`

    return dateFormat;
}

const counterMaker = function () {
    const targetDateInput = dateFormMarker()
    // console.log(targetDateInput)

    const nowDate = new Date();
    const targetDate = new Date(targetDateInput).setHours(0, 0, 0, 0);

    const remaining = (targetDate - nowDate) / 1000;
    // remaining 이 0 이거나 음수라면, 타이머가 종료되었습니다 출력해보기
    if(remaining <= 0){
        // console.log('타이머가 종료되었습니다.')
        messagecontainer.innerHTML = "<h3>타이머가 종료되었습니다.</h1>"
    } else if(isNaN(remaining)) {
        //만약 잘못된 날짜가 들어왔다면 '유효한 시간대가 아닙니다' 를 출력
        //remaining 이 날짜가 아닌 경우 NaN을 반환함 이것을 기준으로 조건을 걸어줌
        // console.log('유효한 시간대가 아닙니다.')
        // else if(remaining === NaN) 로 작성했더니 출력이 안됨
        // 자바스크립트에서는 NaN 인지 아닌지 작성해주는 함수가 따로 있음 => isNaN(remaining) 이라고 적어야함
        messagecontainer.innerHTML = "<h3>유효한 시간대가 아닙니다.</h1>"
    }

    // const remainingDate = Math.floor(remaining / 3600 / 24);
    // const  remainingHours = Math.floor(remaining / 3600) % 24;
    // const remainingMin = Math.floor(remaining / 60) % 60;
    // const remainingSec = Math.floor(remaining) % 60;

    // console.log(remainingDate, remainingHours, remainingMin, remainingSec);

    //위에 쓴것을 객체로 변경해보자 
    //각자의 변수명을 키로하는 프로퍼티를 만들어보자
    const remainingObj = {
        remainingDate : Math.floor(remaining / 3600 / 24),
        remainingHours : Math.floor(remaining / 3600) % 24,
        remainingMin : Math.floor(remaining / 60) % 60,
        remainingSec : Math.floor(remaining) % 60
    }

    console.log(remainingObj['remainingDate'])

    

    // 카운트다운 버튼 누르면 #d-day-container 에 입력된 숫자로 변경하기(데이터 뿌려보기)
    // const days = document.querySelector("#days");
    // const hours = document.querySelector("#hours");
    // const min = document.querySelector("#min");
    // const sec = document.querySelector("#sec");

    //위에 있는것도 객체로 변경해보자 
    const documentObj = {
        days : document.querySelector("#days"),
        hours : document.querySelector("#hours"),
        min : document.querySelector("#min"),
        sec : document.querySelector("#sec"),
    }

    //객체에 있는 값으로 사용해보자
    // documentObj['days'].textContent = remainingObj['remainingDate'];
    // documentObj['hours'].textContent = remainingObj['remainingHours'];
    // documentObj['min'].textContent = remainingObj['remainingMin'];
    // documentObj['sec'].textContent = remainingObj['remainingSec'];

    // 객체에 담은 것들을 반복문을 사용해서 적어보자(반복문을 활용한 데이터 리팩토링)
    const timeKeys = Object.keys(remainingObj);
    const docKeys = Object.keys(documentObj);

    // for(let i = 0; i < timeKeys.length; i+=1){
    //     documentObj[docKeys[i]].textContent = remainingObj[timeKeys[i]]
    // }

    // for in 반복문 활용해보기
    for(let key in documentObj){
        console.log(key);
    }
    // for in문은 객체에 활용한다
    
    
}
