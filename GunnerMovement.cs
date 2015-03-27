using UnityEngine;
using System.Collections;

public enum GunnerState {IDLE, AIMING, MOVING, SHIELD, OVERWATCH};

public class GunnerMovement : MonoBehaviour {
	public float moveRadius;
	float lerpSpeed = 0.01f;
	public float currentMoveState = 0f;
	public GunnerState state = GunnerState.IDLE;
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
			                               currentMoveState);
			currentMoveState += lerpSpeed;
			if (currentMoveState >= 1f)
			{
				this.transform.position = this.nextPosition;
				this.currentMoveState = 0f;
				this.state = GunnerState.IDLE;
			}
			break;
		default:
			break;
		}

		if (Input.GetMouseButtonDown (0)) {
			if (this.state == GunnerState.AIMING) {
				// nextPosition is our heading
				this.nextPosition = (Vector2)Camera.main.ScreenToWorldPoint (Input.mousePosition);
				pointerObject.position = nextPosition;
				this.state = GunnerState.MOVING;
			}
		}

	}


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