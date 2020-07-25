import {Request, Response} from 'express'
import {Controller, Get, Post, Middleware} from '@overnightjs/core'
import {Logger} from '@overnightjs/logger'

@Controller('api')
export class UrlController {
  @Post(':msg')
  private postUrl(req: Request, res: Response) {
    Logger.Info(req.params.msg)
    return res.status(200).json({
      message: 'running'
    })
  }
}