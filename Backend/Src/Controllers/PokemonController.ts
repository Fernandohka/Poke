import express, { Request, Response, Router } from "express";
import PokemonService from "../Services/PokemonService";

class PokemonController {

    static async CatchPokemon(req: Request, res: Response) : Promise<any> {
        const { id } = req.params

        try {
            let data = await PokemonService.PokeCatch(+id)
            if(data === null)
                res.status(200).json({message: "Pokemon can't be catch"})
            else if(data.captured){
                res.status(200).json({message: "Pokemon " + data.name + " captured", pokemon: data})
            }
            else {
                res.status(200).json({message: "Pokemon " + data.name + " escaped", pokemon: data})
            }
        } catch (error) {
            console.log(`An error has occurred: ${error}`)
        }
    }

    static async GetAllPoke(req: Request, res: Response) : Promise<any> {
        try {
            let data = await PokemonService.GetAllPoke()
            res.status(200).json({message: "Pokemon data", pokemon: data})
        } catch (error) {
            console.log(`An error has occurred: ${error}`)
        }
    }

    static async GetTeam(req: Request, res: Response) : Promise<any> {
        try {
            let data = await PokemonService.GetTeam()
            res.status(200).json({message: "Pokemon data", pokemon: data})
        } catch (error) {
            console.log(`An error has occurred: ${error}`)
        }
    }
}

export default PokemonController;