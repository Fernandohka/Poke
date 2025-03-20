import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PokeData, PokemonService } from '../../services/pokemonService';

@Component({
  selector: 'app-home-page',
  imports: [CommonModule],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent implements OnInit {
  pokemon: Observable<PokeData> | undefined
  
  constructor(
    private service: PokemonService
  ) {}
  
  ngOnInit(): void {
    
  }
  
  tryCatch(): void {
    var tentativa = Math.floor(Math.random() * 254 + 1)
    this.pokemon = this.service.catch(tentativa)
  }

}
