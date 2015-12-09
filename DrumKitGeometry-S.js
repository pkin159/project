///////////////////
//helper
//give posititino 
// snare(x, y, z)
///////////////////
// ( var maindrum )是 Snare  和 Tom 鼓的部分不含支架
// ( var bassmain )是 Bass 鼓的部分
//  hithat.add(hithattop);//main hihat 
//  hithat.add(hithatbutton);//main
// 不需要的部分你就拿掉吧 ps. Bassstep是腳踏板之後才要加進來
function Snare() {
    
    var drum = new THREE.Object3D();
    var maindrum = new THREE.Object3D();

        var extrudeSettings = {
            amount: 12,
            steps: 1,
            bevelEnabled: false,
            curveSegments: 128
        };

        var arcShape = new THREE.Shape();
        arcShape.absarc(0, 5, 5, 0, Math.PI * 2, 0, false);

        var holePath = new THREE.Path();
        holePath.absarc(0, 5, 4.8, 0, Math.PI * 2, true);
        arcShape.holes.push(holePath);

        var geometry = new THREE.ExtrudeGeometry(arcShape, extrudeSettings);
        /////////////////////////////////////////////////////////////////////
        material = new THREE.MeshPhongMaterial({
            color: 0xff1234
        });

        mesh = new THREE.Mesh(geometry, material);
        mesh.rotation.x = Math.PI / 2
        mesh.position.set(0, 6, -5);
        mesh.castShadow = true; mesh.receiveShadow = true;

        var topGeometry = new THREE.CircleGeometry(5, 32);
        var topMaterial = new THREE.MeshPhongMaterial({
            color: 0xffffff
        });
        var topMesh = new THREE.Mesh(topGeometry, topMaterial);

        var buttonMesh = topMesh.clone();

        topMesh.rotation.x = -Math.PI / 2;
        topMesh.position.y = 5.5;
        topMesh.castShadow = true; topMesh.receiveShadow = true;
        buttonMesh.rotation.x = Math.PI / 2;
        buttonMesh.position.y = -5.5;
        buttonMesh.castShadow = true; buttonMesh.receiveShadow = true;
        
        //////////////////////
        var extrudeSettingsButton = {
            amount: 6,
            steps: 1,
            bevelEnabled: false,
            curveSegments: 128
        };

        var arcShapeButton = new THREE.Shape();
        arcShape.absarc(0, 5, 5, 0, Math.PI * 2, 0, false);

        var holePathButton = new THREE.Path();
        holePath.absarc(0, 5, 4.8, 0, Math.PI * 2, true);
        arcShape.holes.push(holePath);

        var geometryButton = new THREE.ExtrudeGeometry(arcShape, extrudeSettings);
        /////////////////////////////////////////////////////////////////////
        material = new THREE.MeshPhongMaterial({
            color: 0xD7D6D9
        });

        var meshButton = new THREE.Mesh(geometry, material);
        meshButton.rotation.x = Math.PI / 2
        meshButton.position.set(0, -4.75, -5.2);
        meshButton.scale.set(1.04, 1.04 , .12);
        meshButton.castShadow = true; meshButton.receiveShadow = true;
      
        var meshTop = meshButton.clone();
        meshTop.position.set(0, 6.25, -5.2);
        meshTop.castShadow = true; meshTop.receiveShadow = true;

        var standmaterial = new THREE.MeshPhongMaterial({
        	color:0xffffff
        })
        
        var standbutgeometry = new THREE.CylinderGeometry( 2.3, 2.3, 60, 32);
        var standbutmesh = new THREE.Mesh( standbutgeometry, standmaterial);
        standbutmesh.position.set ( 0, -60, 0);
        standbutmesh.castShadow = true; standbutmesh.receiveShadow = true;
        
        var lockmaterial = new THREE.MeshPhongMaterial({
        	color:0x000000
        });
        var lockbutgeometry = new THREE.CylinderGeometry( 7, 7, 8, 32);
        var lockbutmesh = new THREE.Mesh(lockbutgeometry, lockmaterial);
        lockbutmesh.position.set (0, -68, 0);
        lockbutmesh.castShadow = true; lockbutmesh.receiveShadow = true;

        maindrum.add(buttonMesh);
        maindrum.add(topMesh);
        maindrum.add(mesh);
        maindrum.scale.set(10, 3, 10);
        maindrum.add(meshButton);
        maindrum.add(meshTop);


    var standbutton = new THREE.Object3D();

        var standsupgeometry = new THREE.CylinderGeometry( 2.7, 2.7, 70, 32);
        var standsup1mesh = new THREE.Mesh(standsupgeometry, standmaterial);
        var standsup2mesh = standsup1mesh.clone();

        standsup1mesh.position.set( 0, -90, 20);
        standsup1mesh.rotation.x = -0.8;
        standsup1mesh.castShadow = true; standsup1mesh.receiveShadow = true;
    	standsup2mesh.position.set( 14.5, -90, -16); 
        standsup2mesh.rotation.z = 0.8;
        var standsup3mesh = standsup2mesh.clone();
        standsup2mesh.rotation.y = 0.8;
        standsup2mesh.castShadow = true; standsup2mesh.receiveShadow = true;
        standsup3mesh.position.set( -16.5, -90, -14);
        standsup3mesh.rotation.y = 2.5;
        standsup3mesh.castShadow = true; standsup3mesh.receiveShadow = true;
        
    
        standbutton.add(standsup1mesh);
        standbutton.add(standsup2mesh);
        standbutton.add(standsup3mesh);
        standbutton.position.set(0, 0, 0);

    var standtop = new THREE.Object3D();

        var connectgeometry = new THREE.BoxGeometry(7, 10, 7);
        var connectmaterial = new THREE.MeshPhongMaterial({color:0xffffff});
        var connect1mesh = new THREE.Mesh(connectgeometry, connectmaterial);
        var connect2mesh = new THREE.Mesh(connectgeometry, connectmaterial);
        var connect3mesh = new THREE.Mesh(connectgeometry, connectmaterial);    

        connect1mesh.castShadow = true; connect1mesh.receiveShadow = true;
        connect2mesh.castShadow = true; connect2mesh.receiveShadow = true;
        connect3mesh.castShadow = true; connect3mesh.receiveShadow = true;

        standtop.add(connect1mesh);
        standtop.add(connect2mesh);
        standtop.add(connect3mesh);

        connect1mesh.position.set(0, 29, 49);
        connect2mesh.position.set(42.5, 29, -24);
        connect3mesh.position.set(-42.5, 29, -24);

        connect1mesh.rotation.y = 0;
        connect2mesh.rotation.y = Math.PI*2/3;
        connect3mesh.rotation.y = -Math.PI*2/3;

        var standtopgeometry = new THREE.CylinderGeometry( 2.2, 2.2, 57.5, 32);
        var standtop1mesh = new THREE.Mesh(standtopgeometry, standmaterial);
        var standtop2mesh = new THREE.Mesh(standtopgeometry, standmaterial);
        var standtop3mesh = new THREE.Mesh(standtopgeometry, standmaterial);

        standtop1mesh.position.set(0, 15, 26.5);
        standtop2mesh.position.set(22.5, 15, -12.5);
        standtop3mesh.position.set(-22.5, 15, -12.5);

        standtop1mesh.castShadow = true; standtop1mesh.receiveShadow = true;
        standtop2mesh.castShadow = true; standtop2mesh.receiveShadow = true;
        standtop3mesh.castShadow = true; standtop3mesh.receiveShadow = true;

        standtop1mesh.quaternion.setFromEuler(new THREE.Euler( Math.PI/3, 0, 0, 'YXZ'));
        standtop2mesh.quaternion.setFromEuler(new THREE.Euler( Math.PI/3, Math.PI*2/3, 0, 'YXZ'));
        standtop3mesh.quaternion.setFromEuler(new THREE.Euler( Math.PI/3, -Math.PI*2/3, 0, 'YXZ'));
   
        standtop.add(standtop1mesh);
        standtop.add(standtop2mesh);
        standtop.add(standtop3mesh);

    var axisgeometry = new THREE.SphereGeometry (5, 64, 64);
    var axismaterial = new THREE.MeshPhongMaterial({color:0x000000});
    var axismesh = new THREE.Mesh(axisgeometry, axismaterial);
    axismesh.castShadow = true; axismesh.receiveShadow = true;

    var axis = new THREE.Object3D();
        maindrum.position.set(0, 47.5, 0);
        axis.add(axismesh);
        axis.add(standtop);
        axis.add(maindrum);

    axis.position.set(0 ,-50 ,0);
    axis.quaternion.setFromEuler(new THREE.Euler(0.25, 0, -0.25, 'XZY'));


    drum.add(axis);
    drum.add(standbutmesh);
    drum.add(lockbutmesh);
    drum.add(standbutton);
    //drum.position.set(x, y, z);
    
    //drum.rotation.x = Math.PI;

    return drum;

}
function Tom(x, y, z, euler){
        var drum = new THREE.Object3D();
    var maindrum = new THREE.Object3D();

        var extrudeSettings = {
            amount: 12,
            steps: 1,
            bevelEnabled: false,
            curveSegments: 128
        };

        var arcShape = new THREE.Shape();
        arcShape.absarc(0, 5, 5, 0, Math.PI * 2, 0, false);

        var holePath = new THREE.Path();
        holePath.absarc(0, 5, 4.8, 0, Math.PI * 2, true);
        arcShape.holes.push(holePath);

        var geometry = new THREE.ExtrudeGeometry(arcShape, extrudeSettings);
        /////////////////////////////////////////////////////////////////////
        material = new THREE.MeshPhongMaterial({
            color: 0xff1234
        });

        mesh = new THREE.Mesh(geometry, material);
        mesh.rotation.x = Math.PI / 2
        mesh.position.set(0, 6, -5);

        var topGeometry = new THREE.CircleGeometry(5, 32);
        var topMaterial = new THREE.MeshPhongMaterial({
            color: 0xffffff
        });
        var topMesh = new THREE.Mesh(topGeometry, topMaterial);

        var buttonMesh = topMesh.clone();

        topMesh.rotation.x = -Math.PI / 2;
        topMesh.position.y = 5.8;

        buttonMesh.rotation.x = Math.PI / 2;
        buttonMesh.position.y = -5.8;

        
        //////////////////////
        var extrudeSettingsButton = {
            amount: 6,
            steps: 1,
            bevelEnabled: false,
            curveSegments: 128
        };

        var arcShapeButton = new THREE.Shape();
        arcShape.absarc(0, 5, 5, 0, Math.PI * 2, 0, false);

        var holePathButton = new THREE.Path();
        holePath.absarc(0, 5, 4.8, 0, Math.PI * 2, true);
        arcShape.holes.push(holePath);

        var geometryButton = new THREE.ExtrudeGeometry(arcShape, extrudeSettings);
        /////////////////////////////////////////////////////////////////////
        material = new THREE.MeshPhongMaterial({
            color: 0xD7D6D9
        });

        var meshButton = new THREE.Mesh(geometry, material);
        meshButton.rotation.x = Math.PI / 2
        meshButton.position.set(0, -4.75, -5.2);
        //meshButton.position.set(0, 0, 0);
        meshButton.scale.set(1.04, 1.04 , .12);
      
        var meshTop = meshButton.clone();
        meshTop.position.set(0, 6.25, -5.2);
     
        maindrum.add(buttonMesh);
        maindrum.add(topMesh);
        maindrum.add(mesh);
        maindrum.scale.set(7, 5, 7);
        maindrum.add(meshButton);
        maindrum.add(meshTop);

    var stand = new THREE.Object3D();

        var standgeometry = new THREE.CylinderGeometry(2.5, 2.5, 60, 64);
        var standmaterial = new THREE.MeshPhongMaterial({color:0xffffff});
        var standmesh = new THREE.Mesh(standgeometry, standmaterial);

        stand.add(standmesh);

    var axis = new THREE.Object3D();
        var axisgeometry = new THREE.SphereGeometry (5, 64, 64);
        var axismaterial = new THREE.MeshPhongMaterial({color:0x000000});
        var axismesh = new THREE.Mesh(axisgeometry, axismaterial);

        var connectgeometry = new THREE.BoxGeometry(3, 10, 8);
        var connectmaterial = new THREE.MeshPhongMaterial({color:0xffffff});
        var connectmesh = new THREE.Mesh(connectgeometry, connectmaterial);
        connectmesh.position.set(-15, 0, 0);

        var bridgegeometry = new THREE.CylinderGeometry(2, 2, 15, 64);
        var bridgematerial = new THREE.MeshPhongMaterial({color:0xffffff});
        var bridgemesh = new THREE.Mesh(bridgegeometry, bridgematerial);
        bridgemesh.rotation.z = Math.PI/2;
        bridgemesh.position.set(-7.5, 0, 0);

        maindrum.position.set(-50, -10, 0);
        axis.add(axismesh);
        axis.add(maindrum);
        axis.add(connectmesh);
        axis.add(bridgemesh);
        axis.position.set(0, 30 , 0);
        var axisEuler = euler || new THREE.Euler(0,0,0,'XYZ');
        axis.quaternion.setFromEuler(axisEuler);

    drum.add(axis);
    drum.add(stand);
    drum.position.set(x, y, z);
    
    //drum.rotation.x = Math.PI;

    return drum;

}

function Bass(x, y, z) {
    
    var bass  = new THREE.Object3D();

    var bassmain = new THREE.Object3D();
        var extrudeSettings = {
            amount: 12,
            steps: 1,
            bevelEnabled: false,
            curveSegments: 128
        };

        var arcShape = new THREE.Shape();
        arcShape.absarc(0, 5, 5, 0, Math.PI * 2, 0, false);

        var holePath = new THREE.Path();
        holePath.absarc(0, 5, 4.8, 0, Math.PI * 2, true);
        arcShape.holes.push(holePath);

        var geometry = new THREE.ExtrudeGeometry(arcShape, extrudeSettings);
        /////////////////////////////////////////////////////////////////////
        material = new THREE.MeshPhongMaterial({
            color: 0xff1234
        });

        mesh = new THREE.Mesh(geometry, material);
        mesh.rotation.x = Math.PI / 2
        mesh.position.set(0, 6, -5);

        var topGeometry = new THREE.CircleGeometry(5, 32);
        var topMaterial = new THREE.MeshPhongMaterial({
            color: 0xffffff
        });
        var topMesh = new THREE.Mesh(topGeometry, topMaterial);

        var buttonMesh = topMesh.clone();

        topMesh.rotation.x = -Math.PI / 2;
        topMesh.position.y = 5.5;

        buttonMesh.rotation.x = Math.PI / 2;
        buttonMesh.position.y = -5.5;

        
        //////////////////////
        var extrudeSettingsButton = {
            amount: 6,
            steps: 1,
            bevelEnabled: false,
            curveSegments: 128
        };

        var arcShapeButton = new THREE.Shape();
        arcShape.absarc(0, 5, 5, 0, Math.PI * 2, 0, false);

        var holePathButton = new THREE.Path();
        holePath.absarc(0, 5, 4.8, 0, Math.PI * 2, true);
        arcShape.holes.push(holePath);

        var geometryButton = new THREE.ExtrudeGeometry(arcShape, extrudeSettings);
        /////////////////////////////////////////////////////////////////////
        material = new THREE.MeshPhongMaterial({
            color: 0xD7D6D9
        });

        var meshButton = new THREE.Mesh(geometry, material);
        meshButton.rotation.x = Math.PI / 2
        meshButton.position.set(0, -4.75, -5.2);
    	meshButton.scale.set(1.04, 1.04 , .12);
      
        var meshTop = meshButton.clone();
        meshTop.position.set(0, 6.25, -5.2);
        
        bassmain.add(buttonMesh);
        bassmain.add(topMesh);
        bassmain.add(mesh);
        bassmain.scale.set(12.875, 6.4377, 12.875);
        bassmain.add(meshButton);
        bassmain.add(meshTop);
        bassmain.rotation.x = Math.PI / 2;

    var connectgeometry = new THREE.BoxGeometry(5, 11, 9);
    var connectmaterial = new THREE.MeshPhongMaterial({color:0xffffff});
    var connectmeshR = new THREE.Mesh(connectgeometry, connectmaterial);
    var connectmeshL = connectmeshR.clone();
    connectmeshR.position.set(65, 10, -10);
    connectmeshR.rotation.z = Math.PI/18;
    connectmeshL.position.set(-65, 10, -10);
    connectmeshL.rotation.z = -Math.PI/18;

    var standR = new THREE.Object3D();
        var standgeometry = new THREE.CylinderGeometry(2.2, 2.2, 80, 64);
        var standmaterial = new THREE.MeshPhongMaterial({color:0xffffff});
        var standRmesh = new THREE.Mesh(standgeometry, standmaterial);
        standRmesh.position.set(0, -40, 0);

        var axisgeometry = new THREE.SphereGeometry (4, 64, 64);
        var axismaterial = new THREE.MeshPhongMaterial({color:0x000000});
        var axismesh = new THREE.Mesh(axisgeometry, axismaterial);

        var footgeometry = new THREE.CylinderGeometry(2.5, 2.7, 5, 64);
        var footmaterial = new THREE.MeshPhongMaterial({color:0x000000});
        var footmesh = new THREE.Mesh(footgeometry, footmaterial);
        footmesh.position.set(0, -81, 0);

        standR.add(standRmesh);
        standR.add(axismesh);
        standR.add(footmesh);
    var standL = standR.clone();

        standR.position.set(69, 8, -10);
        standL.position.set(-69, 8, -10);
        standR.quaternion.setFromEuler(new THREE.Euler(Math.PI/9, 0, Math.PI/7), 'XZY');
        standL.quaternion.setFromEuler(new THREE.Euler(Math.PI/9, 0, -Math.PI/7), 'XZY');

    var connecttomgeometry = new THREE.BoxGeometry(40, 7, 15);
    var connecttommaterial = new THREE.MeshPhongMaterial({color:0xaaaaaa});
    var connecttommesh = new THREE.Mesh(connecttomgeometry, connecttommaterial);
    connecttommesh.position.set(0, 65, -10);

    bass.add(connecttommesh);
    bass.add(bassmain);
    bass.add(standR);
    bass.add(standL);
    bass.add(connectmeshR);
    bass.add(connectmeshL);
    bass.position.set(x, y, z);
    
    return bass;

}

function Hihat(x, y, z){
    var hithat = new THREE.Object3D();
    
	var hithattop = new THREE.Object3D();
    
    var	geometry = new THREE.CylinderGeometry( 9, 50, 3, 128);
    geometry.openEnded = true;
    var material = new THREE.MeshPhongMaterial({
    	color:0xffff00
    });
	var mesh = new THREE.Mesh(geometry, material);
    
    var geometrytop = new THREE.CylinderGeometry( 2, 10, 3, 128);
    var meshtop = new THREE.Mesh( geometrytop, material);
       
    meshtop.position.y = 3;
    console.log(geometry.openEnded);
    
    hithattop.add(mesh);
    hithattop.add(meshtop);
    hithattop.position.set( 0, 60, 0);
    
    var hithatbutton = hithattop.clone();
	hithatbutton.position.set( 0, 50, 0);
    hithatbutton.rotation.x = Math.PI;
    
    ////////////////////////////////////////////////////////////////stander
    /////top
    var middlegeometry = new THREE.CylinderGeometry( 1, 1, 10, 32);
    var middlematerial = new THREE.MeshPhongMaterial({
    	color:0xffffff
    })
    var middlemesh = new THREE.Mesh( middlegeometry, middlematerial);
    
    middlemesh.position.set ( 0, 55, 0);
    
    var standtopgeometry = new THREE.CylinderGeometry( 1.7, 1.7, 30, 32);
    var standmaterial = new THREE.MeshPhongMaterial({
    	color:0xffffff
    })
    var standtopmesh = new THREE.Mesh( standtopgeometry, standmaterial);
    standtopmesh.position.set ( 0, 70, 0);
    
    var locktopgeometry = new THREE.CylinderGeometry( 3, 3, 4, 32);
    var lockmaterial = new THREE.MeshPhongMaterial({
    	color:0x000000
    });
    var locktopmesh = new THREE.Mesh(locktopgeometry, lockmaterial);
    locktopmesh.position.set (0, 65, 0);
    ////////////////////////////////////////////////////////////////////////
    ///button
    var standbutgeometry = new THREE.CylinderGeometry( 2.3, 2.3, 160, 32);
    var standbutmesh = new THREE.Mesh( standbutgeometry, standmaterial);
    standbutmesh.position.set ( 0, -30, 0);
    
    var lockbutgeometry = new THREE.CylinderGeometry( 4, 4, 4, 32);
    var lockbutmesh = new THREE.Mesh(lockbutgeometry, lockmaterial);
    lockbutmesh.position.set (0, 45, 0);
    
    var lockbut2geometry = new THREE.CylinderGeometry( 5, 5, 8, 32);
    var lockbut2mesh = new THREE.Mesh(lockbut2geometry, lockmaterial);
    lockbut2mesh.position.set (0, -60, 0);
    
    var standsupgeometry = new THREE.CylinderGeometry( 2.7, 2.7, 80, 32);
    var standsup1mesh = new THREE.Mesh(standsupgeometry, standmaterial);
    var standsup2mesh = standsup1mesh.clone();
    
    standsup1mesh.position.set( 0, -90, 28);
    standsup1mesh.rotation.x = -0.7;
	standsup2mesh.position.set( 22.5, -90, -17); 
    standsup2mesh.rotation.z = 0.7;
    var standsup3mesh = standsup2mesh.clone();
    standsup2mesh.rotation.y = 0.7;
    standsup3mesh.position.set( -23.5, -90, -17);
    standsup3mesh.rotation.y = 2.5;
    
    
    hithat.add(standtopmesh);
    hithat.add(locktopmesh);
    hithat.add(hithattop);//main
    hithat.add(middlemesh);
    hithat.add(hithatbutton);//main
    hithat.add(standbutmesh);
    hithat.add(lockbutmesh);
    hithat.add(standsup1mesh);
    hithat.add(standsup2mesh);
    hithat.add(standsup3mesh);
    hithat.add(lockbut2mesh);
    
    hithat.position.set ( x, y, z );
    
    return hithat;
    
}

function Chair(x, y, z){
    
    var chair = new THREE.Object3D();
    
    
	var standgeometry = new THREE.CylinderGeometry( 8, 8, 80, 32 );
    var standmaterial = new THREE.MeshPhongMaterial({
    	color: 0x000000
    });
    var standmesh = new THREE.Mesh(standgeometry, standmaterial);
    var standbuttongeometry = new THREE.CylinderGeometry( 8, 60, 15, 32 );
    var standbuttonmesh = new THREE.Mesh(standbuttongeometry, standmaterial);
    
    var sitgeometry = new THREE.CylinderGeometry( 45, 45, 20, 32);
    var sitmesh = new THREE.Mesh(sitgeometry, standmaterial);
    
    standbuttonmesh.position.set(0, 0, 0);
    standmesh.position.set(0, 45, 0);
    sitmesh.position.set(0, 85, 0);
    
    
    chair.add(sitmesh);
    chair.add(standbuttonmesh);
    chair.add(standmesh);
    chair.position.set( x, y, z );
    return chair;
}

function BassStep(){
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
function newMesh(){
    a = new THREE.Object3D();
 
    var geometry = new THREE.CylinderGeometry(1.4, 1.4, 70, 32);
    var material = new THREE.MeshPhongMaterial({
        color: 0xffff00
    });
    var cylinder = new THREE.Mesh(geometry, material);

    cylinder.rotation.x = Math.PI / 2;
    cylinder.position.set(0, 0, -40);

    var geometry1 = new THREE.CylinderGeometry(1.4, 0.8, 20, 32);
    var cylinder2 = new THREE.Mesh(geometry1, material);

    cylinder2.rotation.x = Math.PI / 2;
    cylinder2.position.set(0, 0, -85);

    var geometry3 = new THREE.SphereGeometry(1.5, 32, 32);
    var sphere = new THREE.Mesh(geometry3, material);
    sphere.position.set(0, 0, -95);

    a.add(cylinder);
    a.add(cylinder2);
    a.add(sphere);

    return a;
}