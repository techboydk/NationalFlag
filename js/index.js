document.addEventListener('DOMContentLoaded',init,false);

function init(){
  const flag = document.querySelector('.flag');
  let w = flag.offsetWidth
  console.log(flag)
  for (let i = 0; i < w; i++) {
    const flagElement = document.createElement('div');
    flagElement.setAttribute('class','flag-element');
    flagElement.style.backgroundPosition = `${-i}px 0`
    flagElement.style.animationDelay = `${i*20}ms`
    flag.append(flagElement);
  }
}



