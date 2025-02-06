import { SetMetadata } from '@nestjs/common';
import { Role } from '.prisma/alzaahir-dev/client';

export const Roles = (...roles: Role[]) => SetMetadata('roles', roles); 