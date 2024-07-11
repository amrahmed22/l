// Start Scroll Button To Top Page


let tag = document.getElementById('counter')
let x = 0


setInterval(() => {
    if (x == 72) {
        return
    }
    else
    {
        x= x+1
        tag.innerHTML = x +'%'
    }
}, 27);

document.addEventListener('DOMContentLoaded', function() {
    var skillBars = document.querySelectorAll('.skill-per');

    skillBars.forEach(function(skillBar) {
        var value = skillBar.getAttribute('data-value');
        skillBar.style.width = '0';
        skillBar.style.opacity = '1';

        setTimeout(function() {
            skillBar.style.transition = 'width 5s';
            skillBar.style.width = value + '%';
        }, 100);
    });
});



// $(document).ready(function(){
//     $('.btn-check').on('focus',function() {
//         console.log('dkjfdl');
//         $('.don-result').val($('.chose-one').prop('checked','true').text());
//     });
// });



// Start Sweet Alert
$(document).ready(function () {
$(".alert").on("click", function () {
    Swal.fire({
    title: "تم الحجــــز اليتيم.",
    text: "بامكانك ان تجده في موقعك الخاص.",
    imageWidth: 250,
    imageHeight: 150,
    padding: "2rem",
    background: "#fff",
    imageUrl: "./img/fastival.png",
    position: "top",
    showConfirmButton: false,
    // timer: 1500
      });
    });
});
// End Sweet Alert
  


$(".haif-progress").each(function(){
  
    var $bar = $(this).find(".bar");
    var $val = $(this).find("span");
    var $tooltip = $(this).find(".tooltip"); // Add this line to select the tooltip
    var perc = parseInt( $val.text(), 10);
  
    $({p:0}).animate({p:perc}, {
      duration: 3000,
      easing: "swing",
      step: function(p) {
        $bar.css({
          transform: "rotate("+ (45+(p*1.8)) +"deg)", // 100%=180° so: ° = % * 1.8
          // 45 is to add the needed rotation to have the green borders at the bottom
        });
        $tooltip.css({
          transform: "translateX(-50%) rotate(" + (45 + (p * 1.8)) + "deg)" // Rotate the tooltip accordingly
        });
        $val.text(p|0);
      }
    });
  });

  


$(document).ready(function(){
    $(window).scroll(function(){
        $(this).scrollTop() >= 100 ? $('.scroll-to-top').css('display','block') : $('.scroll-to-top').css('display','none');
        $('.scroll-to-top').on('click',function(e){
            $(window).scrollTop(0);
        });
    });
    $(".haif-progress").each(function(){
  
        var $bar = $(this).find(".bar");
        var $val = $(this).find("span");
        var perc = parseInt( $val.text(), 10);
      
        $({p:0}).animate({p:perc}, {
          duration: 3000,
          easing: "swing",
          step: function(p) {
            $bar.css({
              transform: "rotate("+ (45+(p*1.8)) +"deg)", // 100%=180° so: ° = % * 1.8
              // 45 is to add the needed rotation to have the green borders at the bottom
            });
            $val.text(p|0);
          }
        });
      });
});
// End Scroll Button To Top Page


$(document).ready(function(){     
    // Start Animation Count For Hero Section
        $(window).scroll(function () {
            if ($(window).scrollTop() <= $('.hero').offset().top) {
                var states_section = $('.hero');
                if (states_section.length) {
                    var counted = 0;
                    if (counted == 0) {
                        $('.price').each(function () {
                            var $this = $(this),
                            countTo = $this.attr('data-count');
                            $({
                                    countNum: $this.text()
                                }).animate({
                                    countNum: countTo
                                },
                                {
                                    duration: 2000,
                                    easing: 'swing',
                                    step: function () {
                                        $this.text(Math.floor(this.countNum));
                                    },
                                    complete: function () {
                                        $this.text(this.countNum);
                                    }
                                });
                            });
                            counted = 1;
                        }
                    }
                }
        });
        // Start Animation Count For Hero Section



        // Start Platform-Campaigns Section
        $(window).scroll(function () {
        if ($(window).scrollTop() >= $('.platform-campaigns').offset().top) {
            var states_section = $('.platform-campaigns');
            if (states_section.length) {
                var counted = 0;
                if (counted == 0) {
                    $('.price-comp').each(function () {
                        var $this = $(this),
                        countTo = $this.attr('data-count');
                        $({
                            countNum: $this.text()
                        }).animate({
                            countNum: countTo
                        },
                        {
                            duration: 2000,
                                easing: 'swing',
                                step: function () {
                                    $this.text(Math.floor(this.countNum));
                                },
                                complete: function () {
                                    $this.text(this.countNum);
                                }
                            });
                        });
                        counted = 1;
                    }
                }
            }
        });
        // Start Platform-Campaigns Sectionn

        
        // Start Animation Count For State Section
        $(window).scroll(function () {
            if ($(window).scrollTop() >= 170) {
                var states_section = $('.stats');
                if (states_section.length) {
                    var counted = 0;
                    if (counted == 0) {
                        $('.count').each(function () {
                            var $this = $(this),
                        countTo = $this.attr('data-count');
                        $({
                                countNum: $this.text()
                            }).animate({
                                countNum: countTo
                            },
                            {
                                duration: 2000,
                                easing: 'swing',
                                step: function () {
                                    $this.text(Math.floor(this.countNum));
                                },
                                complete: function () {
                                    $this.text(this.countNum);
                                }
                            });
                        });
                        counted = 1;
                    }
                }
            }
        });
        // End Animation Count For State Section

        // Start Animation Count For Comppaign page
        $(window).scroll(function () {
            if ($(window).scrollTop() >= $('.campaigns-page').offset().top) {
                var states_section = $('.campaigns-page');
                if (states_section.length) {
                    var counted = 0;
                    if (counted == 0) {
                        $('.request-don').each(function () {
                            var $this = $(this),
                        countTo = $this.attr('data-count');
                        $({
                                countNum: $this.text()
                            }).animate({
                                countNum: countTo
                            },
                            {
                                duration: 2000,
                                easing: 'swing',
                                step: function () {
                                    $this.text(Math.floor(this.countNum));
                                },
                                complete: function () {
                                    $this.text(this.countNum);
                                }
                            });
                        });
                        counted = 1;
                    }
                }
            }
        });
        // End Animation Count For Comppaign page
    });


//start  in Headers progressbar-donations
document.addEventListener("DOMContentLoaded", function() {
    let progressValue = document.getElementById('progressbar-donations').getAttribute('data-progress');
    //   const circle = document.getElementById('progress-circle');
    const circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    
    // Parse the value to a float (in case it is a string)
    progressValue = parseFloat(progressValue);
    let bar = new ProgressBar.SemiCircle("#progressbar-donations", {
        strokeWidth: 7,
        color: "rgba(0,156,222, 1)",
        trailColor: "rgba(229,234,252, 1)",
        trailWidth: 7,
        easing: "easeInOut",
        duration: 1400,
        svgStyle: null,
        text: {
            value: "",
            alignToBottom: false,
            className: "progressbar__label",
        },
        
        // Set default step function for all animate calls
        step: (state, bar) => {
            bar.path.setAttribute("stroke", state.color);
            var value = Math.round(bar.value() * 100);
            if (value === 0) {
                bar.setText("");
            } else {
                bar.setText(value + '%'); // Add percentage symbol  
                // Update the div position during the animation
                // Update the circle position during the animation
                const pointAtLength = bar.path.getTotalLength() * bar.value();
                const position = bar.path.getPointAtLength(pointAtLength);
                circle.setAttribute("cx", position.x);
                circle.setAttribute("cy", position.y);
                circle.setAttribute("r", "1"); // Radius of the circle for 5px diameter
                circle.setAttribute("fill", "rgba(0,156,222, 1)"); // Color of the circle
            }
            
            bar.text.style.color = state.color;
            bar.svg.appendChild(circle); // Append the circle to the SVG
            
        },
});


bar.animate(progressValue); // Number from 0.0 to 1.0
});
//End in Headers progressbar-donations



// Start Platform-Campaigns Section Slider
const platformCampaigns = new Swiper(".slider-platf-comp",{
    slidesPerView: 3,
    spaceBetween: 10,
    loop: true,
    grabCursor: false,
    mousewheel: true,
    keyboard: true,
    speed: 700,
    autoplay: {
        pauseOnMouseEnter: true,
        delay: 3000,
    },
    pagination: {
        clickable: true,
        el: ".pagination-platf-comp",
    },
    navigation: {
        nextEl: ".next-platf-camp",
        prevEl: '.prev-platf-camp',
    },
    breakpoints: {
        320: {
            slidesPerView: 1,
        },
        576: {
            slidesPerView: 2,
        },
        993: {
            slidesPerView: 3,
        }
    }
});
// End Platform-Campaigns Section Slider



// Start Blog Section Slider
const blog = new Swiper(".slider-blog",{
    slidesPerView: 3,
    spaceBetween: 10,
    loop: true,
    grabCursor: false,
    mousewheel: true,
    keyboard: true,
    speed: 700,
    autoplay: {
        pauseOnMouseEnter: true,
        delay: 3000,
    },
    pagination: {
        clickable: true,
        el: ".pagination-blog",
    },
    navigation: {
        nextEl: ".next-blog",
        prevEl: '.prev-blog',
    },
    breakpoints: {
        320: {
            slidesPerView: 1,
        },
        576: {
            slidesPerView: 2,
        },
        993: {
            slidesPerView: 3,
        }
    }
});
// End Blog Section Slider


// Start Partners Section Slider
const Partners = new Swiper(".slider-partners",{
    slidesPerView: 3,
    spaceBetween: 20,
    loop: true,
    grabCursor: true,
    mousewheel: true,
    keyboard: true,
    speed: 700,
    autoplay: {
        pauseOnMouseEnter: true,
        delay: 3000,
    },
    navigation: {
        nextEl: ".next-partners",
        prevEl: '.prev-partners',
    },
    breakpoints: {
        320: {
            slidesPerView: 1,
        },
        576: {
            slidesPerView: 2,
        },
        768: {
            slidesPerView: 3,
        },
        993: {
            slidesPerView: 5,
        }
    }
});
// End Partners Section Slider



// Start Public-Campaigns Section Slider
const publicCampaigns = new Swiper(".slider-public-comp",{
    slidesPerView: 3,
    spaceBetween: 10,
    loop: true,
    grabCursor: false,
    mousewheel: true,
    keyboard: true,
    speed: 700,
    autoplay: {
        pauseOnMouseEnter: true,
        delay: 3000,
    },
    pagination: {
        clickable: true,
        el: ".pagination-public-comp",
    },
    navigation: {
        nextEl: ".next-public-camp",
        prevEl: '.prev-public-camp',
    },
    breakpoints: {
        320: {
            slidesPerView: 1,
        },
        576: {
            slidesPerView: 2,
        },
        993: {
            slidesPerView: 3,
        }
    }
});
// End Public-Campaigns Section Slider






// Start Feature-Videos Section Slider
const featureVideos = new Swiper(".feature-videos",{
    slidesPerView: 3,
    spaceBetween: 20,
    loop: true,
    grabCursor: true,
    mousewheel: true,
    keyboard: true,
    speed: 700,
    autoplay: {
        pauseOnMouseEnter: true,
        delay: 3000,
    },
    navigation: {
        nextEl: ".next-feature-videos",
        prevEl: '.prev-feature-videos',
    },
    breakpoints: {
        320: {
            slidesPerView: 1,
        },
        576: {
            slidesPerView: 2,
        },
        993: {
            slidesPerView: 3,
        }
    }
});
// End Feature-Videos Section Slider





// Start Campaigns Page 
var bar = new ProgressBar.Line(".prog", {
    strokeWidth: 1,
    strokeDashoffset: 34,
    easing: 'easeInOut',
    duration: 1400,
    color: '#009CDE',
    trailColor: '#eee',
    trailWidth: 3,
    svgStyle: {width: '100%', height: '100%'},
});
bar.animate(.6);  // Number from 0.0 to 1.0
// Start Campaigns End 

// end companien js 






$(document).ready(function(){
    $('.don-amount.btn-check').on('focus',function() {
        console.log('dkjfdl');
        $('.don-result').text($('.chose-one').val());
    });
});


// $(document).ready(function(){
//     $('video').forEach(function(){
//         $(this).on('click',function(){
//             $(this).toggleClass('active');
//             if ($(this).get(0).paused) {
//                 $(this).get(0).play();
//             } else {
//                 $(this).get(0).pause();
//                 $(this).get(0).currentTime = 0;
//             }
//         });
//     });
// });

// var video = document.querySelectorAll('video');

// video.forEach(play => play.addEventListener('click',()=> {
//     play.classList.toggle('active');
//     if(play.paused){
//         play.play();
//     }else{
//         play.paused();
//         play.currentTime = 0;
//     }
// }))