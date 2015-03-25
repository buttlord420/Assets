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

	// TODO: Initiate Terrain Things Here
	
	// TODO: Initiate Devices Here
	
	// TODO: Initiate Teams Here
	//teamAInit();
	//teamBInit();
	
	// TODO: Show Begin Screen
	
}

// Team Initialization
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
	
	unitScript.init(t);													// Initialize Unit
	team.Add(tileScript);												// Add Unit to Team Array
	unitScript.name = "Unit" + team.length;								// Number Unit
	
}

function Update () {
	
}

}