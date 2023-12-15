import { Component, OnInit } from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit {
  ngOnInit() {
    this.testimonialCarousel();
    this.testimonialCarouselTwo();
    this.clientCarousel();
  }
  
  onActivate(event: Event) {
    window.scrollTo(0, 0);
  }

  testimonialCarousel() {
    $("#testimonial").owlCarousel({
        autoPlay: 3000, //Set AutoPlay to 5 seconds
        autoplay: false,
        smartSpeed: 1000, // Default is 250
        items: 1, //Set Testimonial items
        loop: true,
        margin: 30,
        singleItem: true,
        touchDrag: true,
        mouseDrag: true,
        pagination: true,
        nav: true,
        dots: false,
        navText: ["<i class='fal fa-chevron-left'></i>", "<i class='fal fa-chevron-right'></i>"],
    });    
  }
  testimonialCarouselTwo() {
      $("#testimonial2").owlCarousel({
          autoPlay: 3000, //Set AutoPlay to 5 seconds
          autoplay: false,
          smartSpeed: 1000, // Default is 250
          items: 3, //Set Testimonial items
          loop: true,
          margin: 0,
          singleItem: true,
          touchDrag: true,
          mouseDrag: true,
          pagination: true,
          nav: true,
          dots: true,
          center:true,
          navText: ["<i class='fal fa-chevron-left'></i>", "<i class='fal fa-chevron-right'></i>"], 
      });    
  }

   clientCarousel() {
    $("#client_carousel").owlCarousel({
        autoPlay: 3000, //Set AutoPlay to 5 seconds
        autoplay: true,
        smartSpeed: 2000, // Default is 250
        items: 5,
        loop: true,
        touchDrag: true,
        mouseDrag: true,
        pagination: false,
        dots: false,
        nav: false,
        navText: ["<i class='fal fa-chevron-left'></i>", "<i class='fal fa-chevron-right'></i>"],
        responsive: {
            1200: {
                items: 5
            },
            992: {
                items: 5
            },
            768: {
                items: 4
            },
            480: {
                items: 3
            },
            320: {
                items: 2
            },
            280: {
                items: 2
            }
        }

    });    
}
}
