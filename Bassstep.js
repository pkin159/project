function BassStepMesh(){
    a = new THREE.Object3D();
    
    var bottongeometry = new THREE.BoxGeometry( 35, 3, 80 );
    var bottonmaterial = new THREE.MeshPhongMaterial( {color: 0x000000} );
    var botton = new THREE.Mesh( bottongeometry, bottonmaterial );

    var stepbodygeometry = new THREE.BoxGeometry(20, 3, 60);
    var stepbodymaterial = new THREE.MeshPhongMaterial({color:0x888888});
    var stepbody = new THREE.Mesh(stepbodygeometry,stepbodymaterial);
    stepbody.position.set(0, 0, 32);

    var connectstepgeometry = new THREE.CylinderGeometry(3, 3, 20, 64);
    var connectstepmaterial = new THREE.MeshPhongMaterial({color:0x555555});
    var connectstep = new THREE.Mesh(connectstepgeometry,connectstepmaterial);
    connectstep.rotation.z = Math.PI/2;

    var stepbassgeometry = new THREE.BoxGeometry(20,3,18);
    var stepbass = new THREE.Mesh(stepbassgeometry,stepbodymaterial);
    stepbass.position.set(0, 3, -30);
    
    ///////////////////////Steptrun
    var steptrun = new THREE.Object3D();
    steptrun.add(stepbody);
    steptrun.add(connectstep);
    steptrun.position.set(0, 3, -20);
    steptrun.quaternion.setFromAxisAngle(new THREE.Vector3(1, 0, 0), -Math.PI/6);

    var standRgeometry = new THREE.CylinderGeometry(2, 2.5, 50, 64);
    var standRmaterail = new THREE.MeshPhongMaterial({color:0xAAAAAA});
    var standR = new THREE.Mesh(standRgeometry, standRmaterail);
    standR.position.set(15, 25, 35);

    var standL = standR.clone();
    standL.position.set(-15, 25, 35);

    var lockgeometry = new THREE.CylinderGeometry(3, 3, 4.5, 64);
    var lockmaterial = new THREE.MeshPhongMaterial({color:0x000000});
    var lockR = new THREE.Mesh(lockgeometry, lockmaterial);
    lockR.position.set(15, 48, 35);
    lockR.rotation.z = Math.PI/2;

    var lockL = lockR.clone();
    lockL.position.set(-15, 48, 35);
    lockL.rotation.z = Math.PI/2;

    var bridgegeometry = new THREE.CylinderGeometry(1, 1, 30, 64);
    var bridgematerail = new THREE.MeshPhongMaterial({color:0xffffff});
    var bridge = new THREE.Mesh(bridgegeometry, bridgematerail);
    bridge.position.set(0, 48, 35);
    bridge.rotation.z = Math.PI/2;

    var hittrun = new THREE.Object3D();

    var axisgeometry = new THREE.CylinderGeometry(3, 3, 5, 64);
    var axismaterial = new THREE.MeshPhongMaterial({color:0xaaaaaa});
    var axis = new THREE.Mesh(axisgeometry, axismaterial);
    axis.rotation.z = Math.PI/2;

    var connectstickgeometry = new THREE.BoxGeometry(3, 5, 4);
    var connectstickmaterail = new THREE.MeshPhongMaterial({color:0xffffff});
    var connectstick = new THREE.Mesh(connectstickgeometry, connectstickmaterail);
    connectstick.position.set(-1.5, 2, 2);
    hittrun.add(connectstick);

    var stickgeometry = new THREE.CylinderGeometry(1, 1, 30, 64);
    var stickmaterail = new THREE.MeshPhongMaterial({color:0xffffff});
    var stick = new THREE.Mesh(stickgeometry, stickmaterail);
    stick.position.set(-1.5, 15, 2);   
    hittrun.add(stick);

    var headboxgeometry = new THREE.BoxGeometry(4, 6.5, 5);
    var headboxmaterail = new THREE.MeshPhongMaterial({color:0x000000});
    var headbox = new THREE.Mesh(headboxgeometry, headboxmaterail);
    headbox.position.set(-1.5, 33, 2);
    hittrun.add(headbox);

    var headbox2geometry = new THREE.CylinderGeometry(4, 4, 3, 64);
    var headbox2materail = new THREE.MeshPhongMaterial({color:0x000000});
    var headbox2 = new THREE.Mesh(headbox2geometry, headbox2materail);
    headbox2.position.set(-1.5, 33, 4); 
    headbox2.rotation.x = Math.PI/2;
    hittrun.add(headbox2);

    var headgeometry = new THREE.CylinderGeometry(4, 4, 1, 64);
    var headmaterail = new THREE.MeshPhongMaterial({color:0xffffff});
    var head = new THREE.Mesh(headgeometry, headmaterail);
    head.position.set(-1.5, 33, 6); 
    head.rotation.x = Math.PI/2;
    hittrun.add(head);

    hittrun.add(axis);
    hittrun.position.set(0, 48, 35);
    hittrun.quaternion.setFromAxisAngle(new THREE.Vector3(1, 0, 0), -Math.PI/6);

    a.add(botton);
    a.add(steptrun);
    a.add(stepbass);
    a.add(standR);
    a.add(standL);
    a.add(lockR);
    a.add(lockL);
    a.add(bridge);
    a.add(hittrun);

    return [a, steptrun, hittrun];
    }