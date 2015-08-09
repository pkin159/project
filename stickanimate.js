//////////class for Stick and StickAnimate

var Stick = function(){
	this.bpm = 0;
	this.intensity = .3;
	this.thetaHit = -.2;
	this.thetaMax = this.intensity;
	this.thetaStandby = .1;
	this.S = 0;
	this.keyfames = [
		{key: 0, value: thetaStandby},
		{key: .3, value: thetaMax},
		{key: .5, value: thetaHit},
		{key: 1, value: thetaStandby}
	]
	this.mesh = new THREE.Object3D = NewMesh();
};

Stick.prototype.NewMesh = function(){
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

};