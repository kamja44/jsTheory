const me = {
    name : "kamja",
    profile : {
        email : "something@kamja.co"
    }
}
console.log(me.profile.email);
console.log(me.potato && me.potato.fried); // error가 아닌 undefined출력
// optional chaning
console.log(me?.potato?.email?.fried?.nameeee);
// 즉, me안에 potato가 없으니 me가 출력