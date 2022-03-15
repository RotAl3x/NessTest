import { Component, OnInit, ViewChild } from '@angular/core';
import { Data } from '../../interfaces/data.interface';
import { DataService } from '../../services/data.service';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';
import { SearchComponent } from '../search/search.component';
import { classes } from '../../data/data';

@Component({
  selector: 'app-classes-table',
  templateUrl: './classes-table.component.html',
  styleUrls: ['./classes-table.component.scss'],
})
export class ClassesTableComponent implements OnInit {
  @ViewChild(SearchComponent)
  private search!: SearchComponent;
  classes: Data[] = [];
  initialClasses!: Data[];
  name!: string;
  searchName!: string;

  constructor(private dataService: DataService, public dialog: MatDialog) {
    this.classes = dataService.getClasses();
    this.initialClasses = classes;
  }

  ngOnInit(): void {}

  openDialog(data: Data) {
    const dialogRef = this.dialog.open(DialogComponent);

    dialogRef.afterClosed().subscribe((result) => {
      if (result) this.dataService.update(result, data);
    });
    this.initialClasses = classes;
  }

  percentage(data: Data): number {
    return Math.round((data.students.length / data.maxNoOfStudents) * 100);
  }

  deleteClass(data: Data) {
    try {
      this.dataService.deleteClass(data);
      if (this.initialClasses !== this.classes)
        this.classes.splice(classes.indexOf(data), 1);
    } catch (e) {
      console.error(e);
    } finally {
      this.initialClasses = classes;
    }
  }

  isFull(data: Data) {
    return data.maxNoOfStudents - data.students.length > 0;
  }

  filterClasses(searchTerm: string) {
    this.classes = this.initialClasses;
    this.classes = this.classes.filter(
      (x) => eval('x' + '.' + searchTerm).indexOf(this.searchName) !== -1
    );
  }
}
