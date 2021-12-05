(function(){
    console.log("hi");
    var elements=document.querySelectorAll(".message");
    for(var elem of elements){
        let text=elem.innerHTML;
        
        if(text.length>60){
            console.log(text);
            elem.innerHTML=text.substr(0,60)+"...";
        } 
        
    }
})();