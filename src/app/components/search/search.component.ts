import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {

  @Output() searchName = new EventEmitter<string>();
  @Output() searchTerm = new EventEmitter<string>();

  public name!: string;
  labels: string[] = ['name', 'teacher']
  selected: string=this.labels[0];

  search(name: any, term: string) {
    this.searchName.emit(name.target.value);
    this.searchTerm.emit(term);
  }
}
