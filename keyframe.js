// keyframe animation

var keyframes = [];  // array of objects
var thetaMax = 3;
var thetaHit = -2;

var keyframesL = [
    {key: 0, value: thetaMax},
    {key: 0.5, value: thetaHit},
    {key: 1, value: thetaMax}
];

var keyframesR = [
    {key: 0, value: thetaHit},
    {key: 0.5, value: thetaMax},
    {key: 1, value: thetaHit}
];

function Interpolator (keyframes, s) {
    for (var i = 0; i < keyframes.length; i++) {
        if (s > keyframes[i].key)
            continue;
        else {
            if (i != 0) --i;
            break;  // between i & i+1
        }
    }
    
    return keyframes[i].value + (s - keyframes[i].key)/(keyframes[i+1].key - keyframes[i].key)*
        (keyframes[i+1].value - keyframes[i].value);
}

for (var s = 0.; s <= 1; s+= 0.0625)
    console.log (s + ': ' + Interpolator ( keyframesL, s) + ': ' + Interpolator(keyframesR, s));