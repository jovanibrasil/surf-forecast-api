import { Controller, Get } from '@overnightjs/core';
import { Request, Response } from 'express';

@Controller('forecast')
export class ForecastController {

  @Get()
  public getForecastForLoggedUser(_: Request, res: Response): void {
    res.send({
      "forecast": "123456"
    });
  }

}