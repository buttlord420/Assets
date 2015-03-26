// testUnitModel
// Contains information about the model/box/etc. for the test unit
var testUn : testUnit;
var clock : float;
var originalR : float;
var originalG : float;
var originalB : float;

function Start () {
	selected = false;
	clock = 0.0;
}

function Update () {
	clock = clock + Time.deltaTime;
	renderer.material.color = Color(originalR,originalG,originalB);
	if(testUn.team == testUn.manager.activeTeam && testUn.manager.selected == null){
		glow();
	}
	else if(testUn.team != testUn.manager.activeTeam && testUn.manager.targeting){
		glow();
	}
	else if(testUn.manager.selected == this.testUn){
		glow();
	}
}

function OnMouseDown(){
	if(testUn.team == testUn.manager.activeTeam){
		// todo: reset previous click
		testUn.manager.selected = this.testUn;
	}
}

function glow(){
	renderer.material.color = Color(originalR+0.4*Mathf.Sin(4*clock),originalG+0.4*Mathf.Sin(4*clock),originalB+0.4*Mathf.Sin(4*clock));
}