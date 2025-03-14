import { APIURL } from "../Lib/Api";
import axios from "axios";
import { Prisma } from "../Lib/Prisma";

class PokemonService {
    static async PokeCatch(id?: number) : Promise<any> {
        try {
            const poke = await Prisma.pokemon.findUnique({
                where: {id: id}
            });

            if(poke === null || poke.tries == 0 || poke.captured == true){
                return null
            }

            let tentativa = Math.floor(Math.random() * 254 + 1)
            console.log(tentativa)

            console.log("a")
            console.log(poke.capture_rate)
            if(tentativa < poke.capture_rate){
                await Prisma.pokemon.update({
                    where: {id: id},
                    data: {captured: true}
                })
                poke.captured = true
            }
            else{
                await Prisma.pokemon.update({
                    where: {id: id},
                    data: {tries: poke.tries-1}
                })
                poke.tries -= 1
            }
            return poke
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