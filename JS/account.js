let account = document.getElementById("account")
let Close = document.getElementById("Close")
let form=document.getElementById("form")
let body = document.getElementById("body")

account.onclick = function()
{
form.style.display='block';
body.style.backgroundColor='grey';
}

Close.onclick = function()
{
form.style.display='none';
body.style.backgroundColor='white';
}