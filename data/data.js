let $container=$('.gallery-wrap')
let $containerCon=$('.gallery-wrap li')
let $loadMoreBtn=$('.loadMoreBt')
let $mainImg=$('.main-b-img')
let $letaddItemCount=6;
let $added=0;
let $allDate=[];

$.getJSON('./data/video.json',function(data){
    //console.log(data)
    $allDate=data;
    addItem()
    $loadMoreBtn.click(addItem)
    

})
function addItem(data){
    let element=[];
    let sliceData;
    sliceData=$allDate.slice($added,$added += $letaddItemCount)
    $.each(sliceData, function(index, item){
      const fileExtension = item.video.split('.').pop().toLowerCase();
      const isMp4 = fileExtension === 'mp4';
      const sw = isMp4 ? (
         ` <video autoplay muted loop playsinline src="${item.video}"></video>`
        ) : (
         `<img src="${item.video}" />`
        );
       
      let itemHTML=
      `<li class="gallery-item">
          <div>
              <a href="javascript:" class="galleryBt">
                  <span class="gallery-video">
                      ${sw}
                      
                  </span>
                  <span class="galleryCap"></span>
                  <span class="gallery-title">
                      <span><strong>${item.title}</strong></span>
                      <span><b>${item.description}</b></span>
                      <span><i class="exploreBt">Explore</i></span>
                  </span>
              </a>
          </div>
      </li>`;
      element.push($(itemHTML).get(0));
     
      if($added<$allDate.length){
          $loadMoreBtn.text('Load More')
      }else{
          $loadMoreBtn.css({background:'#384244', color:'#dee4e3',border:'#5e686a 1px solid'}).text('END')
      }
 
  })
  $container.append(element);
  console.log($(".gallery-item").length);
  $mainImg.css("display", "none");
  if ($(".gallery-item").length <= 6) {
      $mainImg.eq(0).css({ "display": "block", "height": "100%" });
  } else if ($(".gallery-item").length <= 12) {
      $mainImg.eq(0).css({ "display": "block", "height": "50%" });
      $mainImg.eq(1).css({ "display": "block", "height": "50%" });
  } else if ($(".gallery-item").length <= 18) {
      $mainImg.eq(0).css({ "display": "block", "height": "40%" });
      $mainImg.eq(1).css({ "display": "block", "height": "40%" });
      $mainImg.eq(2).css({ "display": "block", "height": "20%" });
  }

}

 $('.multiple-items').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    draggable: true,
    prevArrow: '<button class="prev"><i class="fas fa-angle-left"></i></button>',
    nextArrow: '<button class="next"><i class="fas fa-angle-right"></i></button>',
  });  
 /*  $('.multiple-items').slick({
    centerMode: true,
    centerPadding: '60px',
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    draggable: true,
    prevArrow: '<button class="prev"><i class="fas fa-angle-left"></i></button>',
    nextArrow: '<button class="next"><i class="fas fa-angle-right"></i></button>',
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 3
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      }
    ]
  }); */