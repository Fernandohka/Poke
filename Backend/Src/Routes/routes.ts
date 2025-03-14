import { Express } from 'express';
import express from 'express'
import ApiRoutes from './Api.ts'
import PokeRoutes from './Poke.ts'

export default function (app: Express) {
    app
        .use(express.json())
        .use('/api', ApiRoutes)
        .use('/api', PokeRoutes)
}