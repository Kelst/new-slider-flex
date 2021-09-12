 const arraySliderItems=document.querySelectorAll(".slide");

 arraySliderItems.forEach((item)=>{
     item.addEventListener("click",function(event){
        clearClassActive();
        item.classList.add("active")
     })
 })

 function clearClassActive(){
     arraySliderItems.forEach((item)=>{
         item.classList.remove("active");
     })
 }
