import { Component, OnInit } from '@angular/core';
import { SwiperConfigInterface,
  SwiperPaginationInterface,
   SwiperAutoplayInterface,
 SwiperFadeEffectInterface, 
 SwiperScrollbarInterface,
  SwiperComponent,
   SwiperDirective
 } from 'ngx-swiper-wrapper';
@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {

  public config: SwiperConfigInterface = {
    direction: 'horizontal',
    //slidesPerView: 'auto',
    keyboard: false,
    mousewheel: false,
    scrollbar: false,
    //navigation: true,
    autoplay: {
      delay: 15000,
    },

    
    slidesPerView: "auto",
    loop: true,
    
    pagination: false,
    navigation: false,
    
  };

  constructor() { }

  ngOnInit(): void {
  }

}
