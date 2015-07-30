		angle = (gcontrols.bpm * clock.getElapsedTime()) % 60;
		if(angle<30){
			sticks.rotation.x = (angle-11)*Math.PI/180;
		}else{
			sticks.rotation.x = ((60-angle)-11)*Math.PI/180;
		}