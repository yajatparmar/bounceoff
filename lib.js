function bounceback(o1,o2){
    if((Math.abs(o2.x - o1.x)<60)
    &&(Math.abs(o2.y-o1.y)<50))
    {
      o1.velocityX = -2;
      o2.velocityX = 2;
     }
  }
  function istouching(o1,o2){
    if((Math.abs(o2.x - o1.x)<60)
    &&(Math.abs(o2.y-o1.y)<50))
    {
      o1.shapeColor = "red";
      o2.shapeColor = "red";
     }
     else{
        o1.shapeColor = "green";
      o2.shapeColor = "green";
     
     }
  }