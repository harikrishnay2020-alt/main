function greet_afternoon(){
    let text =document.getElementById("greet");
    text.innerText = "Good afternoon";
}
function change_color(){
    let color=document.getElementById("cap");
    color.style.backgroundColor="red";
      let text1=document.getElementById("date");
    text1.style.color="black";
      let text2=document.getElementById("greet");
    text2.style.color="white";
    
}
function turn_on(){
    let light=document.getElementById("on");
    light.src="https://static.scientificamerican.com/sciam/cache/file/2B38DE31-C1D3-4339-8808D61972976EE4_source.jpg?w=1200";
}
function turn_off(){
    let light=document.getElementById("off");
    light.src="https://cdn.vectorstock.com/i/1000v/70/44/3d-realistic-off-light-bulb-icon-closeup-vector-27407044.jpg";
}
