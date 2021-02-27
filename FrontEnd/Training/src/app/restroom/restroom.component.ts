import { RestRoom } from './../models/RestRoom';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { RestroomService } from '../services/restroom.service';

@Component({
  selector: 'app-restroom',
  templateUrl: './restroom.component.html',
  styleUrls: ['./restroom.component.css']
})
export class RestroomComponent implements OnInit {

  public restRoomTitle = 'Rest_Rooms';
  public selectedRestRoom: RestRoom = new RestRoom();

  restRoomForm = new FormGroup({
    id: new FormControl(''),
    name: new FormControl(''),
    capacity: new FormControl('')
  });

  public restRooms: RestRoom[] = [];

  constructor(private fb: FormBuilder,
              private restRoomService: RestroomService) {
    this.createForm();
  }

  createForm() {
    this.restRoomForm = this.fb.group({
      id: [''],
      name: ['', Validators.required],
      capacity: ['', Validators.required]
    });
  }

  ngOnInit() {
    this.loadRestRooms();
  }

  loadRestRooms() {
    this.restRoomService.getAll().subscribe(
      (result: RestRoom[]) => {
        this.restRooms = result;
      },
      (error: any) => {
        console.log(error);
      }
    );
  }

  selectRestRoom(restRoom: RestRoom) {
    this.selectedRestRoom = restRoom;
    this.restRoomForm.patchValue(restRoom);
  }

  newRestRoom() {
    this.selectedRestRoom = new RestRoom();
    this.selectedRestRoom.id = -1;
    this.restRoomForm.patchValue(this.selectedRestRoom);
  }

  saveRestRoom(restRoom: RestRoom) {
    if (this.selectedRestRoom.id === -1) {
      restRoom.id = 0;
      this.restRoomService.save(restRoom).subscribe(
        (result: any) => {
          console.log(result);
          this.selectedRestRoom = result;
          this.loadRestRooms();
        },
        (error: any) => {
          console.log(error);
        }
      )
    } else {
      this.restRoomService.edit(restRoom).subscribe(
        (result: any) => {
          console.log(result);
          this.selectedRestRoom = result;
          this.loadRestRooms();
        },
        (error: any) => {
          console.log(error);
        }
      )
    }
  }

  deleteRestRoom(restRoom: RestRoom) {
    this.restRoomService.delete(restRoom.id).subscribe(
      (result: any) => {
        console.log(result);
        this.loadRestRooms();
      },
      (error: any) => {
        console.log(error);
      }
    )
  }

  onSubmit() {
    this.saveRestRoom(this.restRoomForm.value);
  }

  goBack() {
    this.selectedRestRoom = new RestRoom();
  }

}
