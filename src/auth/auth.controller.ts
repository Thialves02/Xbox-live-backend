import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginRequestBody } from './model/LoginRequestBody';

@Controller()
export class AuthController {
    constructor(private readonly authService: AuthService){}
    @Post('login')
    @HttpCode(HttpStatus.OK)
    login(@Body()dto:LoginRequestBody){
        return this.authService.login(dto)
    }
}
