import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { HttpClientModule } from '@angular/common/http';


interface Character {
  id: number;
  name: string;
  image: string;
}

@Component({
  selector: 'app-characters',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent {
  characters: Character[] = [];
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
