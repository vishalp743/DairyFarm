import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { products } from 'src/assets/filtered_data_mapped';


declare var $: any;

@Component({
  selector: 'app-single-product',
  templateUrl: './single-product.component.html',
  styleUrls: ['./single-product.component.css']
})
export class SingleProductComponent implements OnInit {
    quantity: number = 1;
    product: any;
    constructor(private router: Router,private route: ActivatedRoute) {}

    ngOnInit() {
    const navigation = this.router.getCurrentNavigation();
    this.route.queryParams.subscribe(params => {
        const id = String(params['divId']);
        console.log(id);

        this.product = (products as any)[id];
        console.log(this.product);
      });

    this.singleProductCarousel();
    this.shopOwlCarousel();
  
  }


  
  incrementQuantity() {
    this.quantity += 1;
  }
  
  decrementQuantity() {
    if (this.quantity > 1) { // Assuming you want to stop at 1 and not go to negative values
      this.quantity -= 1;
    }}

  
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

  singleProductCarousel() {

    $('.single-thumbnail-big').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.single-thumbnail-small'
    });

    $('.single-thumbnail-small').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.single-thumbnail-big',
        dots: false,
        centerMode: true,
        focusOnSelect: true,
        arrows: false,
        prevArrow: '<button type="button" class="custom-prev"><i class="fa fa-long-arrow-left"></i></button>',
        nextArrow: '<button type="button" class="custom-next"><i class="fa fa-long-arrow-right"></i></button>',
        responsive: [
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    centerMode: false,
                    arrows: false,
                    dots: false
                }
            },
            {
                breakpoint: 580,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerMode: false,
                    arrows: false,
                    dots: false
                }
            }
        ]
    });

    $(".cart-plus-minus").append('<div class="dec qtybutton">-</i></div><div class="inc qtybutton">+</div>');

    $(".qtybutton").on("click", function (this:SingleProductComponent) {
        var $button = $(this);
        var oldValue = $button.parent().find("input").val();
        if ($button.text() == "+") {
            var newVal = parseFloat(oldValue) + 1;
        } else {
            // Don't allow decrementing below zero
            if (oldValue > 0) {
                var newVal = parseFloat(oldValue) - 1;
            } else {
                newVal = 0;
            }
        }
        $button.parent().find("input").val(newVal);
    });
}



}
