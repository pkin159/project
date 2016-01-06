function normalLR(score){
	var scr = score || [];
  var aftscr = [];
  var check = 0;
  //console.log('do lr');
  var tempscr =[];
  scr.sort(function (a,b) {return a.time - b.time})


  for(var i = 0, j = 0, time = 0 ; i < scr.length; i++){

        if(scr[i].time === time){
          if(scr[i].instrument !=='b')
            check++;
        }else{
          time = scr[i].time;
          if(check > 2){
            var temp = [];
            for(k = i - check-1, g = i; k < g; k++){
              var priority = {pri: -1, time: 0};
              var ins = scr[k].instrument;
              if(ins === 'b'){

                  continue;
              }
              switch (ins){
                case 's':
                      priority.pri = 0;
                      priority.time = k;
                      break;
                case 'hatOp':
                      priority.pri = 2;
                      priority.time = k;
                      break;
                case 'hatCl':
                      priority.pri = 1;
                      priority.time = k;
                      break;
                case 'crash':
                      priority.pri = 6;
                      priority.time = k;
                      break;
                case 'ride':
                      priority.pri = 7;
                      priority.time = k;
                      break;
                case 'tomFl':
                      priority.pri = 3;
                      priority.time = k;
                      break;
                case 'tomHh':
                      priority.pri = 4;
                      priority.time = k;
                      break;
                case 'tomLw':
                      priority.pri = 5;
                      priority.time = k;
                      break;
              }
              console.log(priority);
              temp.push(priority);
            }
            temp.sort(function (a,b) {return a.pri - b.pri})
            console.log(temp);
            for(k = 2 ; k< temp.length; k++){
              var tempscore = {time:0, intensity: 0, instrument: 'null', LR: 'null'};
              tempscore.time = scr[temp[k].time].time;
              tempscore.intensity = scr[temp[k].time].intensity;
              tempscore.instrument = scr[temp[k].time].instrument;
              tempscr.push(tempscore);
            }
          }
          if(scr[i].instrument === 'b')
              check = 0;
          else{
              check = 1;
          }
        }
  }
  if(check > 2){
            var temp = [];
            for(k = i - check-1, g = i; k < g; k++){
              var priority = {pri: -1, time: 0};
              var ins = scr[k].instrument;
              if(ins === 'b'){

                  continue;
              }
              switch (ins){
                case 's':
                      priority.pri = 0;
                      priority.time = k;
                      break;
                case 'hatOp':
                      priority.pri = 2;
                      priority.time = k;
                      break;
                case 'hatCl':
                      priority.pri = 1;
                      priority.time = k;
                      break;
                case 'crash':
                      priority.pri = 6;
                      priority.time = k;
                      break;
                case 'ride':
                      priority.pri = 7;
                      priority.time = k;
                      break;
                case 'tomFl':
                      priority.pri = 3;
                      priority.time = k;
                      break;
                case 'tomHh':
                      priority.pri = 4;
                      priority.time = k;
                      break;
                case 'tomLw':
                      priority.pri = 5;
                      priority.time = k;
                      break;
              }
              console.log(priority);
              temp.push(priority);
            }
            temp.sort(function (a,b) {return a.pri - b.pri})
            console.log(temp);
            for(k = 2 ; k< temp.length; k++){
              var tempscore = {time:0, intensity: 0, instrument: 'null', LR: 'null'};
              tempscore.time = scr[temp[k].time].time;
              tempscore.intensity = scr[temp[k].time].intensity;
              tempscore.instrument = scr[temp[k].time].instrument;
              tempscr.push(tempscore);
            }
          }
  console.log(tempscore);
	for(var i = 0, j = 0, k = 0; i < scr.length; i++){
    var tempscore = {time:0, intensity: 0, instrument: 'null', LR: 'null'};
    if(tempscr.length !== 0){
      if(scr[i].instrument !== tempscr[k].instrument){
        if(scr[i].instrument !== 'b'){
          if(j%2 == 0)
            tempscore.LR = 'Right';
          else
            tempscore.LR = 'Left';
          j++;
        }
      }else{
        if(k+1 < tempscr.length)
          k++;
      }
    }else{
      if(scr[i].instrument !== 'b'){
        if(j%2 == 0)
          tempscore.LR = 'Right';
        else
          tempscore.LR = 'Left';
        j++;
      }
    }
    tempscore.time = scr[i].time;
    tempscore.intensity = scr[i].intensity;
    tempscore.instrument = scr[i].instrument;
    aftscr.push(tempscore);
	}
  console.log(aftscr);
  return aftscr;
}
function normalLRnew(score,bpm){
  var scr = score || [];
  var aftscr = [];
  var checkdouble = false;
  var checkthreeble = false;
  var object =[];
  console.log('do lr');

  scr.sort(function (a,b) {return a.time - b.time})

  for(var i = 0; i < scr.length; i++){
    if(Math.floor(scr[i].time) < scr[i].time){
        if((scr[i].time - Math.floor(scr[i].time) === 0.5) && (checkdouble !== true)){
            checkdouble = true;
            bpm *= 2;
        }else if ( checkthreeble !== true ) {
            checkthreeble = true;
            bpm *= 3;
        }
    }
  }

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
    if(checkthreeble || checkdouble){
      if(checkdouble){
        tempscore.time = scr[i].time*2;
      }
      if(checkthreeble){
        tempscore.time = scr[i].time*3;
      }
    }else{
      tempscore.time = scr[i].time;
    }
    
    tempscore.intensity = scr[i].intensity;
    tempscore.instrument = scr[i].instrument;
    aftscr.push(tempscore);
  }
  object.push(aftscr);
  object.push(bpm);
  return object;
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

//console.log(snareonly(testscore))