import { CanActivateFn } from '@angular/router';

export const classroomGuard: CanActivateFn = (route, state) => {
  return true;
};
