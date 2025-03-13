import express from 'express'
import ApiController from '../Controllers/ApiController'

const router = express.Router()

// router.get('/:id', ApiController.GetPokemon)
router.get('/', ApiController.Init)

export default router;