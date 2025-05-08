import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { HttpClientModule } from '@angular/common/http';


@Component({
  selector: 'app-users',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {
[x: string]: any;
  characters: any[] = [];
  showCharacters = false;

  constructor(private apiService: ApiService) { }

  seeCharacters(): void {
    this.apiService.getCharacters().subscribe((data: any) => {
      this.characters = data.results.slice(0, 15);
      this.showCharacters = true;
    });

  }
  hideCharacters(): void {
    this.showCharacters = false;
  }



}
