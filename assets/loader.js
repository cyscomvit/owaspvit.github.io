



window.addEventListener("load", ()=> {
	const loader = document.querySelector(".pre_loader");
	const hom_lod=document.querySelector(".load_test");
	setTimeout(function(){
		loader.style.display='none';
		hom_lod.classList.remove("home_load");
	},3000);	
})
