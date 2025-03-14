import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Pokemon } from "../models/Pokemon";

export interface PokeData {
    message: string,
    pokemon: Pokemon[]
}

@Injectable({
    providedIn: 'root'
})

export class PokemonService {
    private apiUrl = "http://localhost:8080/api"

    constructor(private http: HttpClient) { }

    getAllPoke() : Observable<PokeData> {
        return this.http.get<PokeData>(this.apiUrl + "/pokemon")
    }

    getTeam() : Observable<PokeData> {
        return this.http.get<PokeData>(this.apiUrl + "/team")
    }
}