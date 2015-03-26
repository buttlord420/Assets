#pragma strict


var startButton : Texture2D;
var exitButton : Texture2D;

/*
var guif : Font;
var SpectrumSkin : GUISkin;
var displayErase : boolean;
*/

function Start () {
	startButton = Resources.Load("Textures/StartButton", Texture2D);
	exitButton = Resources.Load("Textures/ExitButton", Texture2D);

	//guif = Resources.Load("GUI_Components/Arabolic", Font) as Font;
	//SpectrumSkin = Resources.Load("GUI_Components/SpectrumSkin", GUISkin) as GUISkin;

}

function Update () {

}

function OnGUI() {

	GUI.backgroundColor = Color.white;
	GUI.skin.label.fontSize = 30;
	//GUI.skin = SpectrumSkin;
	//GUI.skin.font = guif;
	GUI.skin.box.fontSize = 30;


	
	//GUI.depth = 3;
	
	// Start Button
	if (GUI.Button (Rect((Screen.width/10)*1, (Screen.height/7)*5, Screen.width/2.5, Screen.height/6), startButton)) {
        Application.LoadLevel("TestMap1");
    }
    GUI.Box (Rect((Screen.width/10)*1, (Screen.height/7)*5, Screen.width/2.5, Screen.height/6), "Start"); 

	// Quit Button
    if (GUI.Button (Rect((Screen.width/9)*5, (Screen.height/7)*5, Screen.width/3, Screen.height/6), exitButton)) {
        Application.Quit();
    }
     GUI.Box (Rect((Screen.width/9)*5, (Screen.height/7)*5, Screen.width/3, Screen.height/6), "Quit"); 
     
}
