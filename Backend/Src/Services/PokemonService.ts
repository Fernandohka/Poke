import { APIURL } from "../Lib/Api";
import axios from "axios";
import { Prisma } from "../Lib/Prisma";

class PokemonService {
    static async PokeCatch(id?: number) : Promise<any> {
        try {
            let tentativa = Math.floor(Math.random() * 254 + 1)

            const poke = await Prisma.pokemon.findUnique({
                where: {id: id}
            });

            if(poke === null){
                return
            }

            if(poke.capture_rate < tentativa){
                await Prisma.pokemon.update({
                    where: {id: id},
                    data: {captured: true}
                })
            }
            else{
                await Prisma.pokemon.update({
                    where: {id: id},
                    data: {tries: poke.tries-1}
                })
            }
            return
        } catch (error) {
            console.log(`Ocorreu um erro: ${error}`)
        }
    }

    static async GetAllPoke() : Promise<any> {
        try {
            const pokemon = await Prisma.pokemon.findMany();

            return pokemon
        } catch (error) {
            console.log(`Ocorreu um erro: ${error}`)
        }
    }

    static async GetTeam() : Promise<any> {
        try {
            const team = await Prisma.pokemon.findMany({
                where: {captured: true}
            });

            return team
        } catch (error) {
            console.log(`Ocorreu um erro: ${error}`)
        }
    }
}

export default PokemonService;