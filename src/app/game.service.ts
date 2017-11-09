import { Injectable } from '@angular/core';

@Injectable()
export class GameService {

  gameBoardState: Boolean[] = [undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined]

  constructor() { }

  checkEndGame(): Boolean {
    if (this.gameBoardState.indexOf(undefined) === -1)
      return true;
    return false;
  }
}
