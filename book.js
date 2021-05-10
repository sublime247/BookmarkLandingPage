const header =document.querySelector('header');
const nav =document.querySelector('.nav');
const navs =document.querySelector('nav')
const open =document.querySelector('.open');
const close =document.querySelector('.close');
const iconNavs =document.querySelector('.icon-nav');
const content1=document.querySelector('.tabcontent1');
const content2=document.querySelector('.tabcontent2');
const content3=document.querySelector('.tabcontent3');
const btn1= document.querySelector('.tab-1');
const btn2 =document.querySelector('.tab-2');
const btn3 =document.querySelector('.tab-3');


open.addEventListener('click', e=>{
    navs.style.display='flex'
    open.style.display='none'
    close.style.display='block'
    header.style.backgroundColor="black"
});
close.addEventListener('click', e=>{
  close.style.display='none'
  open.style.display='block'
  navs.style.display='none'
  header.style.backgroundColor='white'
  navs.style.transition='top 10s ease'
})






       btn1.addEventListener('click' , e=>{
            setTimeout(()=>{
                content1.style.display='flex'
            content3.style.display='none'
            content2.style.display='none'
            btn1.style.borderBottom="2px solid hsl(0, 94%, 66%)"
            },800)
          
       });
       btn2.addEventListener('click' , e=>{
            setTimeout(()=>{
             content1.style.display='none'
           content3.style.display='none'
           content2.style.display="flex"
           btn1.style.border="none"
         //    constent2.style.transition='4s'
           },800);
           
    
        //    content2.style.transition ='1s'
       });
       btn3.addEventListener('click' , e=>{
          setTimeout(()=>{
            content1.style.display='none'
           content2.style.display='none'
           content3.style.display="flex"
          btn1.style.border="none"
          }, 800)
  
       });