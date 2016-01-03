function normalLR(score){
	var scr = score || [];
  var aftscr = [];

  console.log('do lr');

  scr.sort(function (a,b) {return a.time - b.time})

	for(var i = 0, j = 0 ; i < scr.length; i++){
    var tempscore = {time:0, intensity: 0, instrument: 'null', LR: 'null'};
		if(scr[i].instrument != 'b'){
      console.log(true)
			if(j%2 == 0)
				tempscore.LR = 'Right';
      else
        tempscore.LR = 'Left';
			j++;
    }
    tempscore.time = scr[i].time;
    tempscore.intensity = scr[i].intensity;
    tempscore.instrument = scr[i].instrument;
    aftscr.push(tempscore);
	}
  return aftscr;
}


function snareonly(score){
    var scr = score;
    var aftscr = [];

    for(var i = 0, j = 0 ; i < scr.length; i++){
      var tempscore = {time:0, intensity: 0, instrument: undefined, LR: undefined};
      tempscore.time = scr[i].time;
      tempscore.intensity = scr[i].intensity;
      tempscore.instrument = scr[i].instrument;
      aftscr.push(tempscore);
    }

    for(var i = 0 ; i < aftscr.length; i++){
        if(aftscr[i].instrument === 's'){

            var temptime = aftscr[i].time;
            var j, temparray = [];
            //判斷一個小節裡有多少個敲擊
            for(j = i; j < 64; j++){
              if(aftscr[j].time < (aftscr[i].time + 8)){
                temparray.push(aftscr[j]);
              }else if(aftscr[j].time >= (aftscr[i].time + 8)){
                break;
              }
            }
            //判斷每個敲擊點之間的時間間隔已變區分其音符
            for(var ti = 0 ; ti < temparray.length; ti++){
                  if(((temparray[ti+1].time - temparray[ti].time) < 2) && ((temparray[ti+1].time - temparray[ti].time) >= 1)){
                    if((temparray[ti+2].time - temparray[ti+1].time) < 1){
                       if(temparray[ti].LR === undefined){
                          temparray[ti].LR = 'Right';
                          temparray[ti].LR = 'Left';
                        }else{
                          if(temparray[ti].LR === 'Right')
                            temparray[ti+1].LR = 'Left';
                          else
                            temparray[ti+1].LR = 'Right';
                        }
                   }
                 }
                  ///////////16分
                  if(((temparray[ti+1].time - temparray[ti].time) < 1) && ((temparray[ti+1].time - temparray[ti].time) >= 0.5)){
                    if((temparray[ti+2].time - temparray[ti+1].time) < 0.5){
                        if(temparray[ti].LR === undefined){
                          temparray[ti].LR = 'Right';
                          temparray[ti+1].LR = 'Left';
                          temparray[ti+2].LR = 'Left';
                        }else{
                          if(temparray[ti].LR === 'Right'){
                            temparray[ti+1].LR = 'Left';
                            temparray[ti+2].LR = 'Left';
                          }else{
                            temparray[ti+1].LR = 'Right';
                            temparray[ti+2].LR = 'Right';
                          }
                        }
                    }else{
                       if(temparray[ti].LR === undefined){
                          temparray[ti].LR = 'Right';
                          temparray[ti].LR = 'Left';
                        }else{
                          if(temparray[ti].LR === 'Right')
                            temparray[ti+1].LR = 'Left';
                          else
                            temparray[ti+1].LR = 'Right';
                        }
                    }
                  }
                  //////////
                  //////////兩個音符是32分
                  if((temparray[ti+1].time - temparray[ti].time) < 0.5){
                      if(temparray[ti+2].time - temparray[ti+1].time < 0.5)
                        if(temparray[ti].LR === undefined){
                          temparray[ti].LR = 'Right';
                          temparray[ti].LR = 'Left';
                        }else{
                          if(temparray[ti].LR === 'Right')
                            temparray[ti+1].LR = 'Left';
                          else
                            temparray[ti+1].LR = 'Right';
                        }
                      
                  }
                  //////////
                 if(temparray[ti].LR === undefined){
                      temparray[ti].LR = 'Right';
                      temparray[ti].LR = 'Left';
                    }else{
                      if(temparray[ti].LR === 'Right')
                        temparray[ti+1].LR = 'Left';
                      else
                        temparray[ti+1].LR = 'Right';
                    }
                  }
            }
            for(j = i; j < temparray.length; j++){

              if((aftscr[j].time === temparray[j].time) && (aftscr[j].instrument === temparray[j].instrument)){
                console.log('restore true');
                aftscr[j] = temparray[j];
              }
              console.log('restore',aftscr);
            }
            i += temparray.length;
            console('i'+ i);
    }
    return aftscr;

}


var testscore =[
    {////////////////////line1
      time: 0,
        intensity: 0.1,
        instrument:'s'
    },{//////////////////
      time: 0.5,
        intensity: 0.1,
        instrument:'s'
    },{
      time: 0.75,
        intensity: 0.1,
        instrument:'s'
    },{
      time: 1,
        intensity: 0.1,
        
        instrument:'s'
    },{
      time: 1.5,
        intensity: 0.1,
        instrument:'s'
    },{///////////////
      time: 1.75,
        intensity: 0.1,
         
        instrument:'s'
    },{//////////////
      time: 2,
        intensity: 0.1,
        instrument:'s'
    },{//////////////
      time: 4,
        intensity: 0.1,
        instrument:'s'
    },{//////////////
      time: 5,
        intensity: 0.1,
        instrument:'s'
    },{//////////////
      time: 5.5,
        intensity: 0.1,
        instrument:'s'
    },{//////////////
      time: 6,
        intensity: 0.1,
        instrument:'s'
    },{//////////////
      time: 7,
        intensity: 0.1,
        instrument:'s'
    },{//////////////
      time: 7.5,
        intensity: 0.1,
        instrument:'s'
    },{//////////////
      time: 8,
        intensity: 0.1,
        instrument:'s'
    }
];
//console.log(snareonly(testscore))