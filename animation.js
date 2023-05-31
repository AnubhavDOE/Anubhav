// gsap.from(".contact", {duration:4,x:"-100%",ease:'ease',delay:4,stagger:.5})
// gsap.from(".s1",{duration:1,height:"0",ease:'ease',delay:1})





// 
//     let scroll = this.scrollY;
//     console.log(scroll)

// });





let turns = 0
document.addEventListener("DOMContentLoaded",()=>{      
    const height = window.innerHeight;      
    console.log(height);
    window.addEventListener("scroll", (event) => {
        if(this.scrollY >= height/2 && turns === 0){
            turns = 1;
            gsap.to(".s1", {duration:1,height:"100%",ease:'expo', delay:0.1});
            gsap.to(".s2",{duration:1,height:"100%",ease:"expo", delay:0.5});
            gsap.to(".s3",{duration:1,height:"100%",ease:"expo",delay:0.7});


            gsap.to(".image-hider",{duration:.5,width:"32%",ease:"ease",delay:1.7});
            gsap.to(".image-hider",{duration:.5,width:"0%",left:"32%",ease:"expo",delay:2.25});
            gsap.to(".image img",{duration:1,opacity:"100%",delay:2.25,ease:"expo"});

            gsap.to(".title-hider",{duration:.5,width:"95%",ease:"ease",delay:3.25});
            gsap.to(".title-hider",{duration:.5,width:"0%",left:420,ease:"ease",delay:3.75});
            gsap.to(".title",{duration:1,delay:3.6,opacity:"100%",ease:"expo"});



            gsap.to(".aboutMeTitleHider",{duration:.75,delay:3.25,width:"100%",ease:"ease"});
            gsap.to(".aboutMeTitleHider",{duration:.75,delay:4,width:"0%",left:"100%",ease:"expo"});
            gsap.to(".aboutMeTitle",{duration:1,delay:4,opacity:"100%",ease:"expo"});

            gsap.to(".aboutmeHider",{duration:.75,delay:4.5,height:"100%",ease:"ease"});
            gsap.to(".aboutmeHider",{duration:.75,delay:5.25,height:"0%",top:"100%",ease:"expo"});
            gsap.to(".aboutme",{duration:1,delay:5,opacity:"100%",ease:"expo"});


            gsap.to(".project",{duration:1,delay:5,opacity:"100%",ease:"expo"});
            gsap.to(".contact",{duration:1,delay:5,opacity:"100%",ease:"expo"});

        }
    })   
})






