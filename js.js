
const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('containerM');

signUpButton.addEventListener('click', () =>
container.classList.add('right-panel-active'));

signInButton.addEventListener('click', () =>
container.classList.remove('right-panel-active'));


window.addEventListener("DOMContentLoaded",()=>
{




//--------------------------------timer---------------------

const deadline = '2023-01-01';
function TimeRemaining (endtime) {
    const t = Date.parse(endtime)-Date.parse(new Date()),
    days= Math.floor(t/(1000*60*60*24)),
    hours =Math.floor((t/(1000*60*60))%24),
    min = Math.floor((t/(1000*60))%60),
    sec =Math.floor((t/1000)%60)


    return {
        'time': t,
        'days': days,
        'hours': hours,
        'min': min,
        'sec': sec

    };
}

function getZero(num){
    if(num>=0 && num<10) {
        return `0${num}`;
    }
    else{
        return num
}
}


function Clock(selector, endtime) {

    const timer = document.querySelector(selector),
          days =timer.querySelector('#days'),
          hours =timer.querySelector('#hours'),
          min =timer.querySelector('#minutes'),
          sec =timer.querySelector('#seconds'),
          timeInterval=setInterval(UpdateClock, 1000);




    function  UpdateClock(){
        const t = TimeRemaining(endtime);

        days.textContent = getZero(t.days);
        hours.innerHTML = getZero(t.hours);
        min.textContent = getZero(t.min);
         sec.innerHTML = getZero(t.sec);



        if(t.total <=0){

            clearInterval(timeInterval);
        }
    }
}


Clock('.timer', deadline);


//-----------------modal


const modalOpen = document.querySelectorAll('[open-modal]'),
      modal=document.getElementById('containerM'),
      madalClose=document.querySelectorAll('[close]')
const madalTimer=setTimeout(OpenModal, 5000)

      function OpenModal(){
        modal.classList.add('show')
        modal.classList.remove('hide')
        clearInterval(madalTimer)
      }

      function CloseModal(){
        modal.classList.remove('show')
        modal.classList.add('hide')
      }

      function Scroll(){
        if (window.pageYOffset+document.documentElement.clientHeight >=document.documentElement.scrollHeight){
            OpenModal()
            window.removeEventListener('scroll', Scroll)
        }
      }
     

      modalOpen.forEach(btn => {
      btn.addEventListener('click',OpenModal)
        
  
      });

      madalClose.forEach(btn => {
        btn.addEventListener('click',CloseModal)
          
    
        });
  
 

      modal.addEventListener('click',(n)=>{

            if (n.target === modal){
                modal.classList.remove('show')
                modal.classList.add('hide')


            }

    


      });
      document.addEventListener('keydown',(n)=>{

        if (n.code === "Escape" && modal.classList.contains('show')){
            modal.classList.remove('show')
            modal.classList.add('hide')


        }

  });

window.addEventListener('scroll', Scroll);

//---------------Class + rest



class MenuCard {
    constructor(src, alt, title, descr, price, parentSelector, ...classes){

        this.src=src;
        this.alt=alt;
        this.title=title;
        this.descr=descr;
        this. price= price;
        this. classes= classes ;
        this.parent =document.querySelector(parentSelector);
        this.transfer = 27;
        this.changeToUAH();
    }


    changeToUAH(){
        this. price=this. price*this.transfer ;

    }

    render(){
        const el= document.createElement('div');
       

        if(this.classes.length == 0 ){
            this.el ='menu__item';
            el.classList.add(this.el);
        } else{
            this.classes.forEach(className => el.classList.add(className));
        }


            el.innerHTML=
           `
         <div class="pro">
            <img src="ass\img\products\n1.jpg"> 
            <div class="Span">
                    <span>
                        adidas
                    </span>
                    <h5> Cartoon Astronaut T-Shorts</h5>
                    
                    <h4>$78</h4>
                    <a  class="caart"> <i class="fa fa-cart-plus  caaart" aria-hidden="true"></i></a> 
            </div>
        `;
        this.parent.append(el); 
            
            
    }
}

        new MenuCard(
            "ass/img/products/f1.jpg",
            "vegy",
            'Меню "Фитнес"',
            `Меню "Фитнес" - это новый подход к приготовлению блюд: больше свежих овощей и фруктов. 
            Продукт активных и здоровых людей. 
            Это абсолютно новый продукт с оптимальной ценой и высоким качеством!`,
            9,
            '.menu__item'
      
            
        ).render();
        
   
  



        



});



    
