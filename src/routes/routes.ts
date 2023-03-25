import { Router } from 'oak'
import { ApiRouter } from './api/api.routes.ts'

export const RootRouter = new Router()

RootRouter.use('/api', ApiRouter.routes(), ApiRouter.allowedMethods())