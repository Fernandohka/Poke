import express from 'express'
import PokemonController from '../Controllers/PokemonController'

const router = express.Router()

router.post('/catch/:id', PokemonController.CatchPokemon)
router.get('/pokemon', PokemonController.GetAllPoke)
router.get('/team', PokemonController.GetTeam)

export default router;