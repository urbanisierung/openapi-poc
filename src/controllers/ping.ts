import { Body, Get, Post, Route, Security } from 'tsoa'
import { v4 } from 'uuid'
import { logger } from '../utils/Logger'

/* eslint-disable class-methods-use-this */
interface PingResponse {
  message: string
}

interface PingPostBody {
  name2: string
}

@Route('api/ping')
export default class PingController {
  @Security('bearer')
  @Get('/')
  public async getMessage(): Promise<PingResponse> {
    const response = await new Promise<PingResponse>((resolve, reject) => {
      resolve({
        message: 'pong',
      })
    })
    return response
  }

  @Security('bearer')
  @Get('/nice/nice')
  public getNice(): PingResponse {
    return {
      message: 'nice',
    }
  }

  @Security('bearer')
  @Post('/:name')
  public async create(
    name: string,
    @Body() body: PingPostBody
  ): Promise<{ id: string }> {
    logger.info(`${name} and ${body.name2}`)
    const response = await new Promise<{ id: string }>((resolve, reject) => {
      resolve({
        id: v4(),
      })
    })
    return response
  }
}
