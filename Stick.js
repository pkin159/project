var Stick = function () {
    // properties
    this.T = 4; // in seconds
    this.keys = [{   /////////will be change
        timeS: 0,
        value: 0
    }, {
        timeS: 0.25,
        value: 0.2//3.14 / 4
    }, {
        timeS: 0.3,
        value: -.2
    },
       {
        timeS: 0.5,
        value: 0
    },{
        timeS: 1,
        value: 0
    }
                ];

    this.frame1 = new THREE.Object3D();  // starting & ending frames
    this.frame2 = new THREE.Object3D();  // of startOneCycle
                                         // default frame1 = frame2 = frameChair.clone();
    
    this.startTime = 0;
    this.angle = 0; // for 'text-based' rendering
    this.instrument = 's';
    this.color = new THREE.Color(1,0,0);
    this.group = newMesh();
    this.object = new THREE.Object3D();
    this.object.add(this.group);
    this.object.castShadow = true; this.object.receiveShadow = true;
    loadSounds(this, {
        bass: 'https://jennyhyc.github.io/project/sounds/drum/bass.mp3',
        snare: 'https://jennyhyc.github.io/project/sounds/drum/snare.mp3',
        hihat: 'https://jennyhyc.github.io/project/sounds/drum/hatOp.mp3',
        stick: 'https://jennyhyc.github.io/project/sounds/drum/stick.mp3'
    });
    // methods
    this.setT = function (period) {
        this.T = period;
    }
    this.setMaxKeysValue = function (intensity){
        this.keys[1].value = intensity;
    }

    this.interpolate = function (s) { // normalized time
        if (s > 1) // end of cycle
        return this.keys[this.keys.length - 1].value;

        for (var i = 1; i < this.keys.length; i++) {
            if (s < this.keys[i].timeS) break;
        }

        var vv = this.keys[i - 1].value + (s - this.keys[i - 1].timeS) / (this.keys[i].timeS - this.keys[i - 1].timeS) * (this.keys[i].value - this.keys[i - 1].value);
        return vv;
    };

    this.update = function (time) { // time: elapsedTime
        var s = (time - this.startTime) / this.T;
       
        this.tt = (this.tt + 0.01) || 0;

        this.angle = this.interpolate(s);
        this.group.rotation.x = this.angle;
        
        var quat = new THREE.Quaternion();
   		
        if(this.tt > 1){     
        	this.tt = 1;
        
        	THREE.Quaternion.slerp(this.frame1.quaternion, this.frame2.quaternion, quat , this.tt);
        
        this.object.quaternion.copy (quat);
        } 
        
        var pos = this.frame1.position.lerp(this.frame2.position, s);
        this.group.position.set(pos.x, pos.y, pos.z);

        if(this.angle < (-.2+.05+(60/this.T)/1000)){
        	if(!this.soundAlready()){
        		this.soundAlready(1);
                var ii = this.keys[1].value;
                if(this.keys[1].value <= 0);
                ii = 0.1;
        		this.playSound(this.snare, 0, 0.1);
        	}
        }

    }

    this.startOneCycle = function () {
        this.startTime = clock.getElapsedTime();
        var i = this.soundAlready(0,1);
    }
    this.playSound = function(buffer,time,intensity){

	    var gainNode = context.createGain();
	    var source = context.createBufferSource();
	    source.buffer = buffer;

	    // Connect source to a gain node
	    source.connect(gainNode);
	    // Connect gain node to destination
	    gainNode.connect(context.destination);

	    var gainval = intensity || 0.5;
	    gainNode.gain.value = gainval;

	    source[source.start ? 'start' : 'noteOn'](time);

	}
	this.soundAlready = function(lock,reset){
		var l = lock || 0;
		this.check = this.check || 0;
		var rs = reset || 0;

		if(rs == 1){
			this.check = 0;
			return -1;
		}
		if(this.check == 0 && l == 0){
			this.check = 1;
			return 0;
		}
		else
			return 1;
		
	}
}
function newMesh(){
    a = new THREE.Object3D();
 
    var geometry = new THREE.CylinderGeometry(1.4, 1.4, 70, 32);
    var material = new THREE.MeshPhongMaterial({
        color: 0xffff00
    });
    var cylinder = new THREE.Mesh(geometry, material);

    cylinder.rotation.x = Math.PI / 2;
    cylinder.position.set(0, 0, -40);
    cylinder.castShadow = true; cylinder.receiveShadow = true;

    var geometry1 = new THREE.CylinderGeometry(1.4, 0.8, 20, 32);
    var cylinder2 = new THREE.Mesh(geometry1, material);

    cylinder2.rotation.x = Math.PI / 2;
    cylinder2.position.set(0, 0, -85);
    cylinder2.castShadow = true; cylinder2.receiveShadow = true;

    var geometry3 = new THREE.SphereGeometry(1.5, 32, 32);
    var sphere = new THREE.Mesh(geometry3, material);
    sphere.position.set(0, 0, -95);
    sphere.castShadow = true; sphere.receiveShadow = true;

    a.add(cylinder);
    a.add(cylinder2);
    a.add(sphere);

    return a;
}