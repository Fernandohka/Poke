import { Component, OnInit } from '@angular/core';
import { PokeData, PokemonService } from '../../services/pokemonService';
import { Observable } from 'rxjs';
import {MatCardModule} from '@angular/material/card';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pokedex-page',
  imports: [MatCardModule, CommonModule],
  templateUrl: './pokedex-page.component.html',
  styleUrl: './pokedex-page.component.css'
})
export class PokedexPageComponent implements OnInit{

  pokemon: Observable<PokeData> | undefined

  constructor(
    private service: PokemonService
  ) {}

  ngOnInit(): void {
    this.setPokemon()
  }

  setPokemon(): void {
    this.pokemon = this.service.getAllPoke()
  }
}
