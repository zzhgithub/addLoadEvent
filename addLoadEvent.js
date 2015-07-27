function addLoadEvent(func){
    var oldonload = window.onload;
    if(typeof window.onload != 'funcation'){
        window.onload = func;
    }else{
        window.onload = function(){
            oldonload();
            func();
        }
    }
}