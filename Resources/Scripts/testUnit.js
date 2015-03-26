// Test Unit
// Early Development Unit for testing

var model : testUnitModel;
var manager : GameManager;
var team : Array;
var isMoving : boolean;
var speed : float;
var dash : float;
var distance : float;

function init(managerVar: GameManager, teamVar: Array) {
	var modelObject = GameObject.CreatePrimitive(PrimitiveType.Quad);	// Create a quad object for holding the testUnit texture.
	modelObject.SetActive(false);										// Turn off the object so its script doesn't do anything until we're ready.
	//Destroy(modelObject.collider);
	model = modelObject.AddComponent("testUnitModel");						// Add a testUnitModel script to control visuals of the testUnit.
	model.testUn = this;
	
	model.transform.parent = transform;									// Set the model's parent to the testUnit (this object).
	model.transform.localPosition = Vector3(0,0,0);						// Center the model on the parent.
	model.name = "Test Unit Model";											// Name the object.
	
	model.renderer.material.mainTexture = Resources.Load("Textures/FILLERGUNNER1", Texture2D);	// Set the texture.  Must be in Resources folder.
	model.renderer.material.color = Color(1,1,1);												// Set the color (easy way to tint things).
	model.renderer.material.shader = Shader.Find ("Transparent/Diffuse");						// Tell the renderer that our textures have transparency.

	/*box = modelObject.AddComponent("BoxCollider2D");					// Add boxcollider.
	box.center = model.transform.position;								// Center the boxcollider on the unit.
	box.size = Vector3(1,1,4);
	box.isTrigger = true;*/
	
	manager = managerVar;
	team = teamVar;
	speed = 2;
	dash = 1;
	isMoving = false;
	distance = 0.0;
	modelObject.SetActive(true);
}

function getDistance(){
	return distance;
}

function resetDistance(){
	distance = 0.0;
}

function canAct(){
	if(speed + dash - distance > 0)
		return true;
	else return false;
}