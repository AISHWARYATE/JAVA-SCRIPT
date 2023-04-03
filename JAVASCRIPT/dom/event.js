var item=document.getElementById("imageItem");

// using query selector(#id_name)
var divEle=document.getElementById("customText");

// for hide an element
function hide()
  {
  item.setAttribute("hidden","true");
  }

// to show the hide element
function reset()
{
  item.removeAttribute("hidden","true");
}

// change the content of the div 
function change()
{
  divEle.innerHTML="<p>your item is missing</p>";
}

// mouseover
function changeImage()
{
  item.removeAttribute("src","./img/flower1.jpg");
   item.setAttribute("src","./img/flower2.jpg");
}

// mouseout
function resetImage()
{
 item.removeAttribute("src","./img/flower2.jpg");
 item.setAttribute("src","./img/flower1.jpg")
}
