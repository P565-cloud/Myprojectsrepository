var playing=false;
var score;
var counter;
var timeremaining;
var correctanswer;
var position;
var wronganswer;
var timeout;
//if we click on start or reset
document.getElementById("startbutton").onclick=function(){
      //if we are playing
      if(playing==true){
         location.reload();//reload page
      }
      else{//if we are not playing
        playing=true;//to reload page if we click reset
        //set score to zero
        score=1;
        document.getElementById("scorevalue").innerHTML=score;
        //show countdown
        document.getElementById("timeremaining").style.display ="block";
            timeremaining=60;
          /////hide game over box////
          hide("ooo")
         //change start to reset
         document.getElementById("startbutton").innerHTML= "Reset";
         //show countdown decrease by 1 sec in loop
         startcoundown();
          //genereate new ques and answers
          generateQA();

        // for(var i=60;i>0;i--)
        // { v
        //   var counter= document.getElementById("count").innerHTML;
        //   setInterval(function(){counter.innerHTML=i},1000);
        }
      }



  //if we are not playing
     //set score to zero
     //show countdown decrease by 1 sec in loop
        //check time left?
          //yes--->continue
          //no--->game over
     //genereate new ques and answers
     //change start to reset

//if we click on ansbox
   //if not playing
    //no action
  //if we are playing
   //correct?
     //yes
      //increase score by 1
      //show correct box for 1 sec
      //generate new ques and ans
  //no
 // for (var i = 1; i < 5; i++) {
 //   document.getElementById("choice"+i).onclick=function(){
 //     //check if we are playing
 //     if(playing == true){
 //       if(this.innerHTML== correctanswer){
 //
 //       score++;
 //       document.getElementById("scorevalue").innerHTML=score;
 //       show("correctm");
 //       hide("wrongm");
 //       setTimeout(function(){hide("correctm")},1000)
 //       generateQA();
 //     }
 //     else{
 //       show("wrongm");
 //       hide("correctm");
 //       setTimeout(function () {hide("wrongm")
 //
 //       },1000)
 //       // timeout=setTimeout(function(){show(wrongm);},1s)
 //     }
 //
 //   }
 //
 // }}
 //
 for(i=1; i<5; i++){
     document.getElementById("choice"+i).onclick = function(){
     //check if we are playing
     if(playing == true){//yes
         if(this.innerHTML == correctanswer){
         //correct answer

             //increase score by 1
             score++;
             document.getElementById("scorevalue").innerHTML = score;
             //hide wrong box and show correct box
             hide("wrongm");
             show("correctm");
             setTimeout(function(){
                 hide("correctm");
             }, 1000);

             //Generate new Q&A
             generateQA();

         } else{
         //wrong answer
             hide("correctm");
             show("wrongm");
             setTimeout(function(){
                 hide("wrongm");
             }, 1000);
         }
     }
 }
 }
  //////////////////////////////////////////FUNCTIONS/////////////////////////////////
    //show try again box for 1 sec
    function startcoundown(){
        counter=setInterval(function(){timeremaining--;
        document.getElementById("count").innerHTML=timeremaining;
      if (timeremaining==0){
        stopcountdown();
      }},1000);}
////////stops the countdown
    function stopcountdown(){
      clearInterval(counter);
      show("ooo");
      document.getElementById("ooo").innerHTML = "GameOver " +score;
      hide("timeremaining");
      hide("wrongm");
      hide("correctm");
      playing=false;
      document.getElementById("startbutton").innerHTML= "start"
    }
    ////////////hides an element
    function hide(id){
      document.getElementById(id).style.display="none";
    }
    /////////////////shows an element
    function show(id){
      document.getElementById(id).style.display="block";
    }
    //////////////////////// QUESTIONs generator////////
    function generateQA(){
      var p = 1+Math.round(Math.random()*9);
      var q = 1+Math.round(Math.random()*9);
      // console.log(p,q);
      correctanswer=p*q;
      position= 1+Math.round(Math.random()*3)
      console.log(position);
      document.getElementById("ques").innerHTML= p + "x" + q;
      createchoices("choice"+position);
    }
    //////Filling one with right answer
    var answers=[correctanswer]
    function createchoices(id){
      document.getElementById(id).innerHTML= correctanswer;
      /////fill others with wrong answers///
      for (var i = 1; i <5; i++) {
        if(i != position){
          var j="choice"+i;
          do{
            wronganswer=1+Math.round(Math.random()*9)*1+Math.round(Math.random()*9);
          }
          while(answers.indexOf(wronganswer)>-1)
          document.getElementById(j).innerHTML= wronganswer;
          answers.push(wronganswer);
          // console.log(answers);
          }

      }}
