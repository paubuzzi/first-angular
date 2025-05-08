import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CharactersComponent } from "./characters/characters.component";
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  imports: [CharactersComponent, HttpClientModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'first-angular';


}
