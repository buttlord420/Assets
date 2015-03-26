// TestManager.js
// Prototype

// Imports

public class GameManager extends MonoBehaviour
{

// Declarations
var aTeamFolder : GameObject;
var bTeamFolder : GameObject;
var deviceFolder : GameObject;
var terrainFolder : GameObject;
var aTeam : Array;
var bTeam : Array;
var devices : Array;
var terrain : Array;
var inputBool : boolean;
var pauseMenuBool : boolean;

var spawnBool : boolean;
var startBool : boolean;

var selected;
var aTurn : boolean;
var activeTeam : Array;

function Start () {

	aTeamFolder = new GameObject();
	aTeamFolder.name = "Team A";
	aTeam = new Array();
	bTeamFolder = new GameObject();
	bTeamFolder.name = "Team B";
	bTeam = new Array();
	deviceFolder = new GameObject();
	deviceFolder.name = "Devices";
	devices = new Array();
	terrainFolder = new GameObject();
	terrainFolder.name = "Terrain";
	terrain = new Array();
	
	inputBool = false;
	pauseMenuBool = false;
	spawnBool = true;
	startBool = true;

	// TODO: Initiate Terrain Things Here
	
	// TODO: Initiate Devices Here
	
	// TODO: Show Begin Screen
	testSpawn();
}

// Team Initialization
function testSpawn(){
	for(i=0; i < 5; i++){
		addTestUnit(-4, 2*i-4, aTeam, aTeamFolder);
		aTeam[i].model.renderer.material.color = Color(1,0,0);
		aTeam[i].model.originalR = 1;
		aTeam[i].model.originalG = 0;
		aTeam[i].model.originalB = 0;
	}
	for(i=0; i < 5; i++){
		addTestUnit(4, 2*i-4, bTeam, bTeamFolder);
		bTeam[i].model.renderer.material.color = Color(0,0,1);
		bTeam[i].model.originalR = 0;
		bTeam[i].model.originalG = 0;
		bTeam[i].model.originalB = 1;
	}
}

function teamAInit() {
	// stuff
}

function teamBInit() {
	// stuff
}

// Add Functions
function addTestUnit(xPosition: float, yPosition: float, team: Array, teamFolder: GameObject) {
	
	var unitObject = new GameObject();									// Create a new empty game object that will hold a character.
	var unitScript = unitObject.AddComponent("testUnit");				// Add the testUnit.js script to the object.
	
	unitScript.transform.parent = teamFolder.transform;					// Assign Hierarchy
	unitScript.transform.position = Vector3(xPosition,yPosition,1);		// Position the character at x,y.								
	
	unitScript.init(this,team);											// Initialize Unit
	team.Add(unitScript);												// Add Unit to Team Array
	unitScript.name = "Unit" + team.length;								// Number Unit
	
}

function Update () {
	
	checkConditions();
	
	if(aTurn){
	
	
	
	
	
	}else{
	
	
	
	
	
	
	}
}

function checkConditions(){

	if(startBool){
		// Todo: Instructions
		var vrand = Random.value;
		if(vrand > 0.5){
			aTurn = true;
			activeTeam = aTeam;
		}
		else{
			aTurn = false;
			activeTeam = bTeam;
		}
		startBool = false;
	}
	if (Input.GetKeyUp(KeyCode.Escape)){
		if(!pauseMenuBool){
			Time.timeScale = 0;
			pauseMenuBool = !pauseMenuBool;
		}
		else{
			Time.timeScale = 1;
			pauseMenuBool = !pauseMenuBool;
		}
	}
	if(aTeam.length == 0){
		win(bTeam);
	}
	if(bTeam.length == 0){
		win(aTeam);
	}

}

function switchTurn(){
	aTurn = !aTurn;
	selected = null;
	if(activeTeam != aTeam)
		activeTeam = aTeam;
	else activeTeam = bTeam;
}

function win(team: Array){
	if(team == bTeam){
		print("Blue Wins");
		// Todo: Win Screen A
	}else{
		print("Red Wins");
		// Todo: Win Screen B
	}
	Application.LoadLevel("Start");
}

}