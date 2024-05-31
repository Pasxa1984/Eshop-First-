let img=1;

slideshow(img)

function Arrows(n)
{
    slideshow(img += n);
}

function slideshow(n)
{
let i;
let slides = document.getElementsByClassName("slider");  

if(n > slides.length)
{
    img=1
}

if(n < 1)
{
    img = slides.length
}   

for(i=0; i<slides.length; i++)
{
slides[i].style.display="none";
}

slides[img-1].style.display="block";
}

