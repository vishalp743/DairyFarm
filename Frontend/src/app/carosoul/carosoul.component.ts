import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
declare var $: any;
@Component({
  selector: 'app-carosoul',
  templateUrl: './carosoul.component.html',
  styleUrls: ['./carosoul.component.css']
})
export class CarosoulComponent implements OnInit {

  constructor(private router: Router) {}
  ngOnInit() {
    this.heroSlider();
    this.shopOwlCarousel();
    this.feedbackCarousel();
    this.testimonialCarousel();
    this.testimonialCarouselTwo();
  }

  heroSlider() {
    $("#slider_owl").owlCarousel({
      items: 1,
      nav: true,
      dots: true,
      autoplay: false,
      autoplayTimeout: 9000,
      smartSpeed: 1000,
      loop: true,
      navText: ["<i class='fal fa-chevron-left'></i>", "<i class='fal fa-chevron-right'></i>"],
      mouseDrag: true,
      touchDrag: true,
    });
  }
  shopOwlCarousel() {
    $("#shop_carousel").owlCarousel({
        autoPlay: 3000, //Set AutoPlay to 5 seconds
        autoplay: false,
        smartSpeed: 1000, // Default is 250
        items: 2, //Set Testimonial items
        loop: true,
        margin: 30,
        singleItem: false,
        touchDrag: true,
        mouseDrag: true,
        pagination: true,
        nav: false,
        dots: true,
        navText: ["<i class='fal fa-chevron-left'></i>", "<i class='fal fa-chevron-right'></i>"],
        responsive: {
            1200: {
                items: 4
            },
            992: {
                items: 3
            },
            768: {
                items: 2
            },
            480: {
                items: 1
            },
            320: {
                items: 1
            },
            280: {
                items: 1
            }
        }
    }); 
  }
  feedbackCarousel() {
    $("#fea_carousel").owlCarousel({
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

  navigateToSingleProduct(divId: number) {
    this.router.navigate(['/singleshop'], { queryParams: { divId: divId } });
  }
}
