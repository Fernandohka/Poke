import axios from "axios";
import { APIURL } from "../Lib/Api";
import { Prisma } from "../Lib/Prisma.ts"

class ApiService {
    static async GetAllPokemon() : Promise<any> {
        try {
            const response = await axios.get(`${APIURL}/pokemon-species/?limit=1302`)

            await Prisma.pokemon.deleteMany();

            response.data.results.forEach(async e => {
                var pokeSpecie = (await axios.get(e.url)).data
                var poke = (await axios.get(pokeSpecie.varieties[0].pokemon.url)).data
                await Prisma.pokemon.create({
                    data: {
                        name: e.name,
                        id: pokeSpecie.id,
                        capture_rate: pokeSpecie.capture_rate,
                        image: poke.sprites.front_default
                    }
                });
            });

            return;
        } catch (error) {
            console.log(`Ocorreu um erro ao cadastrar os dados: ${error}`)
        }
    }
}

export default ApiService;