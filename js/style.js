function EasterEggImageAnimation(imgObject, state){
	console.log(imgObject.src);
    imgObject.src = state ? "/thumb/intro-thumb.png" : "/thumb/intro-thumb-GameWebLogo.png";
    imgObject.style.transform = state ? "rotate(0deg)" : "rotate(0deg)";
}
