using UnityEngine;
using System.Collections;

public enum GunnerState {IDLE, AIMING, MOVING, SHIELD, OVERWATCH};

public class GunnerMovement : MonoBehaviour {
	public float moveSpeed;
	GunnerState state = GunnerState.IDLE;
	int movementStepsToTake = 50;
	int movementStepsLeft = 0;
	Vector2 nextPosition = new Vector2();
	Transform pointerObject;

	void Start() {
		this.pointerObject = GameObject.Find ("Pointer").transform;
	}
	
	void FixedUpdate() {
		switch (this.state) {
		case GunnerState.IDLE:
			break;
		case GunnerState.MOVING:
			this.transform.position = Vector2.Lerp (this.transform.position,
			                               this.nextPosition,
			                               this.moveSpeed);
			this.movementStepsLeft--;
			break;
		default:
			break;
		}

		if (Input.GetMouseButtonDown (0)) {
			if (this.state == GunnerState.AIMING) {
				// nextPosition is our heading
				this.nextPosition = (Vector2)Camera.main.ScreenToWorldPoint (Input.mousePosition) -
					(Vector2)this.transform.position;
				float distanceToNextpoint = nextPosition.magnitude;
				// Normalize our position
				this.nextPosition /= distanceToNextpoint;
				this.nextPosition *= moveSpeed;
				pointerObject.position = nextPosition;
				this.state = GunnerState.MOVING;
				this.movementStepsLeft = movementStepsToTake;
			}
		}
		if (this.state == GunnerState.MOVING && this.movementStepsLeft <= 0) {
			this.state = GunnerState.IDLE;
		}

	}

	void Update() {
		switch (this.state)
		{
		case GunnerState.IDLE:


	void OnMouseDown() {
		switch (this.state) {
		case GunnerState.IDLE:
			this.state = GunnerState.AIMING;
			break;
		default:
			break;
		}
	}

}