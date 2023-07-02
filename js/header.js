let t=0;
let windowW=0;
const appbarBt=$('.appbarBt')
const mibileModalMenu=$('.mobile-modal-menu')
const appbarCloseBt=$(".appbarCloseBt")
const header=$("#header")

appbarBt.on({click:function(){
    mibileModalMenu.stop().animate({left:0},500)
    header.stop().animate({left:100+'%'},500)
}})
appbarCloseBt.on({click:function(){
    mibileModalMenu.stop().animate({left:-100+'%'},500)
    header.stop().animate({left:0},500)
}})