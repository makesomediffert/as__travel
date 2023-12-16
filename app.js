var contents1 = [
  '<li class="content"> <img src="https://i.insider.com/5d3776e836e03c01ae25c453?width=1000&format=jpeg&auto=webp"> </li>',
  '<li class="content"> <img src="https://img.jagranjosh.com/images/2021/October/19102021/pisa.png"> </li>',
  '<li class="content"> <img src="https://3.bp.blogspot.com/-11fY_H-wk80/W3Vxmm0Y3iI/AAAAAAAARQc/SQT1t3hHcDom3P5FMCoIXG7hxK7GB1qoACLcBGAs/s1600/taj-mahal-sign-of-love-all-are-in-hd-wallpapers.jpg"> </li>',
  '<li class="content"> <img src="https://i.pinimg.com/736x/b1/c3/0d/b1c30d99574a8508a2b04d398665e7fc.jpg"> </li>',
  '<li class="content"> <img src="https://qph.cf2.quoracdn.net/main-qimg-faf6db6c1503fdea4caab4043cfb945f"> </li>'
]

var contents2 = [
  `<li class="card border-0 content rounded-0">
  <img class="card-img" src="https://www.usnews.com/object/image/00000169-5e07-df95-a57d-7ec72aae0000/2-angkor-wat-getty.jpg?update-time=1552060887681&size=responsive640" alt="">
  <div class="card-img-overlay">
        <h5 class="card-title"><span>Famous hai bhai</span></h5>
      </div>
    </li>`,
  `<li class="card border-0 content rounded-0">
      <img class="card-img" src="https://www.planetware.com/wpimages/2020/08/top-attractions-in-the-world-new-york-statue-of-liberty.jpg" alt="">
      <div class="card-img-overlay">
        <h5 class="card-title"><span>MAtter</span></h5>
      </div>
    </li>`,
  `<li class="card border-0 content rounded-0">
      <img class="card-img" src="https://www.pandotrip.com/wp-content/uploads/2018/03/Woman-in-the-Taj-Mahal-India.jpg" alt="">
      <div class="card-img-overlay">
        <h5 class="card-title"><span>Double</span></h5>
      </div>
    </li>`,
  `<li class="card border-0 content rounded-0">
      <img class="card-img" src="https://imageio.forbes.com/specials-images/dam/imageserve/1171238184/0x0.jpg?format=jpg&height=900&width=1600&fit=bounds" alt="">
      <div class="card-img-overlay">
        <h5 class="card-title"><span>People</span></h5>
      </div>
    </li>`,
  `<li class="card border-0 content rounded-0">
      <img class="card-img" src="https://i.insider.com/53e8f38decad04e14f35c061?width=1136&format=jpeg" alt="">
      <div class="card-img-overlay">
        <h5 class="card-title"><span>Dekhle yrrrr</span></h5>
      </div>
    </li>`
]


// carousel 1
carousel({
  carouselPath: '.carousel-1',
  contents: contents1
});


// carousel 2
carousel({
  carouselPath: '.carousel-2',
  contents: contents2,

  Duration: 2000,
  Easing: 'easeInOutBack',

  Delay: 500,

  startAnimation: function (path) {
    $(`${path} .card-title span`).each((index, element) => {
      $(element).delay(index * 100).animate({

        top: '1.1em'

      }, index * 200)
    });
  },

  finalAnimation: function (path) {
    $(`${path} .card-title span`).each((index, element) => {
      $(element).delay(index * 100).animate({

        top: 0

      }, index * 200)
    });
  }
});