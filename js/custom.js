  
 $(function(){
  $('.camera_wrap').camera({
  height: '60%',
  alignment: 'center',
  loader: 'pie',
  barPosition: 'bottom',
  loaderColor: 'red',
  loaderBgColor: '#006699',
  loaderPadding: 0,
  overlayer: true,
  playPause:false,
  pagination: false,
  slideOn: 'random',
   time: 1000,
   transPeriod: 1500,
   navigationHover: false,
   easing: 'easeInOutExpo',
   hover: false,
  fx: 'random'

 // random','simpleFade', 'curtainTopLeft', 'curtainTopRight', 'curtainBottomLeft', 'curtainBottomRight', 'curtainSliceLeft', 'curtainSliceRight', 'blindCurtainTopLeft', 'blindCurtainTopRight', 'blindCurtainBottomLeft', 'blindCurtainBottomRight', 'blindCurtainSliceBottom', 'blindCurtainSliceTop', 'stampede', 'mosaic', 'mosaicReverse', 'mosaicRandom', 'mosaicSpiral', 'mosaicSpiralReverse', 'topLeftBottomRight', 'bottomRightTopLeft', 'bottomLeftTopRight', 'bottomLeftTopRight', 'scrollLeft', 'scrollRight', 'scrollHorz', 'scrollBottom', 'scrollTop'
 
 }); //the basic method

  $(".fakeloader").fakeLoader({
       ToHide:1200,
       bgColor:"#e67e22",
       spinner:"spinner4",
                 
        });
       });
 
  var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        slidesPerView: 'auto',
        paginationClickable: true,
        spaceBetween: 0,
        centeredSlides: true,
        autoplay: 2500,
    });
 
      
      $('#mahfuz').affix({
  offset: {
    top: 100,
    bottom: function () {
      return (this.bottom = $('.footer').outerHeight(true))
    }
  }
})
     
