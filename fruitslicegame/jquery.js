//click on start reset buttuon
 //are we playing
  // yes-->Reload the page
  //no-->
   //show trials left
   //change button text to reset game
   //1.create random Fruit
   //define a random step
   //2.move fruit down by 1 step every 30sec
     //is fruit too low
     //yes-->any terials left?
      //yes
     //repeat 1
     //// NO
     //show game over,change reset to start game
     //no-->repeat 2
var playing=false;
var score;
var trials;
var step;
var action;
var fruits=['apple','grapes','pineapple','cherry','mango','kiwi','banana'];
$(function(){
  $("#startbutton").click(function(){
    if(playing==true){
      location.reload();
    }
    else{
      playing=true;
      score=0;
      $("scorevalue").html(score);
      $("#trialsremaining").show();
      trials=3;
      addhearts();
      //change the button text to reset game
      $("#startbutton").html("Reset");

      //start sending fruits
      startAction();
    }
  })

  $("#fruit1").mouseover(function(){
    score++;
    $("#scorevalue").html(score);//updating score

    //stop the fruit from going down
    clearInterval(action);
    //hide te fruit thriugh animation
    $("#fruit1").hide();
    //send new fruit1
    setTimeout(startAction,200)

  })

//functions//////
function addhearts(){
  $("#trialsremaining").empty();
  for(var i=0;i<trials;i++){

    $("#trialsremaining").append(" X ")
  }

}
function startAction(){
  $("#fruit1").show();
choosefruit();//choose a random fruit1
$("#fruit1").css({'left':Math.round(Math.random()*550),'top':-100});
//generate a random step
step=Math.round(Math.random()*5)+1;
///moving the fruit down
action=setInterval(function(){$("#fruit1").css('top',$("#fruit1").position().top + step);if($("#fruit1").position().top > $("#ques").height()){
  ////checking if we have trials left
  if(trials > 1){

  $("#fruit1").show();
  choosefruit();//choose a random fruit1
  $("#fruit1").css({'left':Math.round(Math.random()*550),'top':-100});
  //generate a random step
  step=Math.round(Math.random()*5)+1;
    trials--;
    ///populate trials left
  addhearts();}
  else{
    ///game overmsg
    playing=false;////we are not playing anymore
    $("#startbutton").html("Start");
    $("#ooo").show();
     $("#ooo").html('<p>Game Over!</p><p>Your score is '+ score +'</p>');
    $("#trialsremaining").hide();
    stopAction();
  }
}},10);
///check if the fruit is too yellow

}
function choosefruit(){
  var x=Math.round(Math.random()*6);
  $("#fruit1").attr('src' , 'images/'+fruits[x]+'.png');
}
function stopAction(){
  clearInterval(action);
  $("#fruit1").hide();
}
  })
