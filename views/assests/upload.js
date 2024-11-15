const image_input=document.querySelector("#image_input");
var uploaded_image="";
image_input.addEventListener("change",function(){
    const reader=new FileReader();
    reader.addEventListener("load",()=>{
        uploaded_image=reader.result;
        document.querySelector("#display_image").style.backgroundImage=`url(${uploaded_image})`;
    });
    reader.readAsDataURL(this.files[0]);
})



function namecheck(){

    let fname1 = document.querySelector("#role1").value;
  
   

    if (fname1 === "softwareEngineer"){

       alert("Your profile matches ");
            

} else {

    alert("They profile didnt match ");
}
}
