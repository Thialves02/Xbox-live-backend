// NestJS
import { ExecutionContext, Inject, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';

// Password
import { AuthGuard } from '@nestjs/passport';

// RxJs
import { of } from 'rxjs';
import { map, mergeMap, takeWhile, tap } from 'rxjs/operators';

// Services
import { UsuarioService } from 'src/usuario/usuario.service';

// Models
import { UserFromJwt } from './model/UserFromJwt';
import { AuthRequest } from './model/AuthRequest';

// Decorators
import { IS_PUBLIC_KEY } from './public.decorator';


@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') {
  constructor(
    private reflector: Reflector,
    @Inject(UsuarioService) private readonly usuarioService: UsuarioService,
  ) {
    super();
  }

  canActivate(context: ExecutionContext) {
    const isPublic = this.reflector.getAllAndOverride<boolean>(IS_PUBLIC_KEY, [
      context.getHandler(),
      context.getClass(),
    ]);

    if (isPublic) {
      return true;
    }

    const canActivate = super.canActivate(context);

    if (typeof canActivate === 'boolean') {
      return canActivate;
    }

    return of(canActivate).pipe(
      mergeMap((value) => value),
      takeWhile((value) => value),
      map(() => context.switchToHttp().getRequest<AuthRequest>()),
      mergeMap((request) =>
        of(request).pipe(
          map((req) => {
            if (!req.usuario) {
              throw Error('User was not found in request.');
            }

            return req.usuario;
          }),
          mergeMap((userFromJwt: UserFromJwt) =>
            this.usuarioService.findById(userFromJwt.id),
          ),
          tap((usuario) => {
            request.principal = usuario;
          }),
        ),
      ),
      map((usuario) => Boolean(usuario)),
    );
  }
}