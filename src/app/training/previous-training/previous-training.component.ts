import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Exercise } from '../exercise.model';

@Component({
  selector: 'app-previous-training',
  templateUrl: './previous-training.component.html',
  styleUrl: './previous-training.component.css'
})
export class PreviousTrainingComponent {

  displayedColumns = ["date", "name", "duration", "calories", "status"];
  exerciseSource = new MatTableDataSource<Exercise>();

}
