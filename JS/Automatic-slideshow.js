let icona=0;

slideshowA()

function slideshowA()
{
let i;
let slidesA = document.getElementsByClassName("imageA"); 

for(i=0; i<slidesA.length; i++)
{
slidesA[i].style.display="none";
}

icona++;

if(icona > slidesA.length)
{
icona=1;
}

slidesA[icona-1].style.display="block";
setTimeout(slideshowA, 2000);
}