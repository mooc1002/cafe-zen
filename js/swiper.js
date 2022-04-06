
  var swiper = new Swiper(".mySwiper", {
        effect: "cube",
    	speed: 500,
        grabCursor: true,
        cubeEffect: {
          loop: true,
          shadow: true,
          slideShadows: true,
          shadowOffset: 20,
          shadowScale: 0.94,
		  touchRatio: 3,
		},
        autoplay: {
    		delay: 5000,
 		 },
        pagination: {
          el: ".swiper-pagination",
        },
      });








