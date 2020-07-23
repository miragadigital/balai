// ini untuk merubah class nav jadi navbar fixed scrool agar css berubah saat di scroll
$(document).on('scroll', function(){
  $('.navbar-fixed-top').toggleClass('scrolled',$(document).scrollTop()>50)
})

$(document).on('scroll', function () {
  $(".mapdescribe").toggleClass('scrolled', $(document).scrollTop() > 800);
});