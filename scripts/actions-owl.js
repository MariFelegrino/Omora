$(document).ready(function(){
    $('.owl-presentation').owlCarousel({
        center:true,
        loop:true,
        autoplay:true,
        nav:true,
        margin:7, //16
        navText: [
            `<div class='arrow'>
                <svg fill="currentColor" height="256px" width="256px" version="1.1" id="XMLID_287_" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24" xml:space="preserve" transform="rotate(180)">
                    <g id="SVGRepo_bgCarrier" stroke-width="0"/>
                    <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/>
                    <g id="SVGRepo_iconCarrier"> <g id="next"> <g> <polygon points="6.8,23.7 5.4,22.3 15.7,12 5.4,1.7 6.8,0.3 18.5,12 "/> </g> </g> </g>
                </svg>
            </div>`,
            `<div class='arrow'>
                <svg fill="currentColor" height="256px" width="256px" version="1.1" id="XMLID_287_" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24" xml:space="preserve">
                    <g id="SVGRepo_bgCarrier" stroke-width="0"/>
                    <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/>
                    <g id="SVGRepo_iconCarrier"> <g id="next"> <g> <polygon points="6.8,23.7 5.4,22.3 15.7,12 5.4,1.7 6.8,0.3 18.5,12 "/> </g> </g> </g>
                </svg>
            </div>`
        ],
        dots:true,
        navContainer: ".customControls", // Mueve prev/next aquí
        dotsContainer: ".customDots", // Mueve los dots aquí
        responsive:{
            0:{
                items:1,
                stagePadding:9,//15
            },
            600:{
                items:2,
                margin:16,
                stagePadding:0,
            },
            900:{
                items:3,
                margin:16,
                stagePadding:0,
            }
            
        }
    });  

    
    $('.logos-owl').owlCarousel({
        loop:true,
        nav:false,
        margin:80,
        dots:false,
        autoplay:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:4,
            },
            900:{
                items:5,
            }
            
        }
    });

    $('.owl-cards').owlCarousel({
        center:true,
        loop:true,
        autoplay:true,
        nav:true,
        margin:7,
        navText: [
            `<div class='arrow'>
                <svg fill="currentColor" height="256px" width="256px" version="1.1" id="XMLID_287_" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24" xml:space="preserve" transform="rotate(180)">
                    <g id="SVGRepo_bgCarrier" stroke-width="0"/>
                    <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/>
                    <g id="SVGRepo_iconCarrier"> <g id="next"> <g> <polygon points="6.8,23.7 5.4,22.3 15.7,12 5.4,1.7 6.8,0.3 18.5,12 "/> </g> </g> </g>
                </svg>
            </div>`,
            `<div class='arrow'>
                <svg fill="currentColor" height="256px" width="256px" version="1.1" id="XMLID_287_" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24" xml:space="preserve">
                    <g id="SVGRepo_bgCarrier" stroke-width="0"/>
                    <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/>
                    <g id="SVGRepo_iconCarrier"> <g id="next"> <g> <polygon points="6.8,23.7 5.4,22.3 15.7,12 5.4,1.7 6.8,0.3 18.5,12 "/> </g> </g> </g>
                </svg>
            </div>`
        ],
        dots:true,
        navContainer: ".customControlsCards", // Mueve prev/next aquí
        dotsContainer: ".customDotsCards", // Mueve los dots aquí
        responsive:{
            0:{
                items:1,
                stagePadding:9,
            },
            600:{
                center:false,
                items:2,
                margin:16,
                stagePadding:0,
            },
            900:{
                center:false,
                items:3,
                margin:16,
                stagePadding:0,
            }
            ,
            1200:{
                center:false,
                items:4,
                margin:16,
                stagePadding:0,
            }
            
        }
    });  
    
});