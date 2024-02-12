"use strict";

//DOM -> Document Object Model 문서 객체 모델

const id = document.querySelector("#id"),
    name = document.querySelector("#name"),
    password = document.querySelector("#password"),
    confirmPassword = document.querySelector("#confirm-password"),
    registerButton = document.querySelector("#button");

registerButton.addEventListener("click", register);

function register() {
    if(!id.value) return alert("아이디를 입력해주세요.");
    if(!name.value) return alert("이름을 입력해주세요.");
    if(!password.value) return alert("비밀번호를 입력해주세요.");
    if(password.value !== confirmPassword.value) return alert("비밀번호가 일치하지 않습니다.");


    const req={
        id: id.value,
        name: name.value,
        password: password.value,
    };

    fetch("/register", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(req),
    }).then((res) => res.json()).then((res) => {
        if(res.success) {
            location.href = "/login";
        } else {
            alert(res.msg);
        }
    }).catch((err) => {
        console.error(new Error("register error"));
    });
}
