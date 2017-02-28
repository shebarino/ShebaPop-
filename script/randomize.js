procces= function() {
  TimeSpeed=100;
  startRange=1;
  stopRange=100;
  incrementRenge=5;
  setTimeout(function run(){
        if(startRange >=stopRange) {
          console.info("stop");
        }
        else {
          console.info("rinning");
          startRange+=Math.floor(Math.random()*incrementRenge);
          $(".face back").css({"background-position":startRange+"px ,"+startRange+"px"});
          setTimeout(function() {
            run()
          },TimeSpeed) 
        }
      },TimeSpeed)
}