function normalLR(s){
	var scr = s;
  var aftscr = [];
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

