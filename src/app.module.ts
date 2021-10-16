import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsuarioModule } from './usuario/usuario.module';
import { PerfilModule } from './perfil/perfil.module';
import { JogoModule } from './jogo/jogo.module';
import { GeneroModule } from './genero/genero.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [UsuarioModule, PerfilModule, JogoModule, GeneroModule, AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
