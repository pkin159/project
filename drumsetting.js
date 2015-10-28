function drumSet(x, y, z) {
    
    var drum = new THREE.Object3D();

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
	//meshButton.position.set(0, 0, 0);
    meshButton.scale.set(1.04, 1.04 , .12);
  
    var meshTop = meshButton.clone();
    meshTop.position.set(0, 6.25, -5.2);
    
    var standmaterial = new THREE.MeshPhongMaterial({
    	color:0xffffff
    })
    
    var standbutgeometry = new THREE.CylinderGeometry( 2.3, 2.3, 70, 32);
    var standbutmesh = new THREE.Mesh( standbutgeometry, standmaterial);
    standbutmesh.position.set ( 0, -70, 0);
    
    
    var lockmaterial = new THREE.MeshPhongMaterial({
    	color:0x000000
    });
    var lockbut2geometry = new THREE.CylinderGeometry( 5, 5, 8, 32);
    var lockbut2mesh = new THREE.Mesh(lockbut2geometry, lockmaterial);
    lockbut2mesh.position.set (0, -70, 0);
    
    var standsupgeometry = new THREE.CylinderGeometry( 2.7, 2.7, 50, 32);
    var standsup1mesh = new THREE.Mesh(standsupgeometry, standmaterial);
    var standsup2mesh = standsup1mesh.clone();
    
    standsup1mesh.position.set( 0, -90, 20);
    standsup1mesh.rotation.x = -0.8;
	standsup2mesh.position.set( 14.5, -90, -16); 
    standsup2mesh.rotation.z = 0.8;
    var standsup3mesh = standsup2mesh.clone();
    standsup2mesh.rotation.y = 0.8;
    standsup3mesh.position.set( -16.5, -90, -14);
    standsup3mesh.rotation.y = 2.5;
    
    var maindrum = new THREE.Object3D();
    
    maindrum
    
    maindrum.add(buttonMesh);
    maindrum.add(topMesh);
    maindrum.add(mesh);
    maindrum.scale.set(10, 3, 10);
    maindrum.add(meshButton);
    maindrum.add(meshTop);
    maindrum.rotation.x = 0.25;
    maindrum.rotation.z = -0.25;
    drum.add(maindrum);
    drum.add(standbutmesh);
    drum.add(standsup1mesh);
    drum.add(standsup2mesh);
    drum.add(standsup3mesh);
    drum.add(lockbut2mesh);
    drum.position.set(x, y, z);
    
    scene.add(drum);

}


function bassbrumSet(x, y, z) {
    var bass = new THREE.Object3D();
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
    
    
    bass.add(buttonMesh);
    bass.add(topMesh);
    bass.add(mesh);
    bass.scale.set(12.875, 6.4377, 12.875);
    bass.add(meshButton);
    bass.add(meshTop);
    bass.rotation.x = Math.PI / 2;
    bass.position.set(x, y, z);
    
    scene.add(bass);

}

function hithatSet(x, y, z){
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
    hithat.add(hithattop);
    hithat.add(middlemesh);
    hithat.add(hithatbutton);
    hithat.add(standbutmesh);
    hithat.add(lockbutmesh);
    hithat.add(standsup1mesh);
    hithat.add(standsup2mesh);
    hithat.add(standsup3mesh);
    hithat.add(lockbut2mesh);
    
    hithat.position.set ( x, y, z );
    
    scene.add(hithat);
    
}

function chairSet(x, y, z){
    
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
    scene.add(chair);
}