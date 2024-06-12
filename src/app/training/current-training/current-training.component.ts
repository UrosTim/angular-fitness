import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { StopTrainingComponent } from './stop-training/stop-training.component';
import { DialogRef } from '@angular/cdk/dialog';

@Component({
  selector: 'app-current-training',
  templateUrl: './current-training.component.html',
  styleUrl: './current-training.component.css'
})
export class CurrentTrainingComponent implements OnInit{

  progress = 0;
  timer: any;

  constructor(private dialog: MatDialog) {}

  ngOnInit(): void {
    this.timer = setInterval (() => { 
      this.progress += 1;
      if(this.progress >= 100) {
        clearInterval(this.timer);
      }
    }, 25)
  }

  onStop() {
    clearInterval(this.timer);
    const dialogRef = this.dialog.open(StopTrainingComponent, {
      data: {
        progress: this.progress
      }
    });

    dialogRef.afterClosed().subscribe(result =>{
      if (result) {
        clearInterval(this.timer)
      } else {
        this.onResume()
      }
    })
  }

  onResume() {
    this.timer = setInterval (() => { 
      this.progress += 1;
      if(this.progress >= 100) {
        clearInterval(this.timer);
      }
    }, 25)
  }
}
