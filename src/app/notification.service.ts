import { Injectable } from '@angular/core';
import {MatSnackBar, MatSnackBarModule} from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor(
    private _snackBar:MatSnackBar
  ) { }

  notification(mensage:string){

    this._snackBar.open(mensage, 'Ok', {
      duration:3000,
      verticalPosition:'top',
      horizontalPosition:'center'
    })


  }
}
