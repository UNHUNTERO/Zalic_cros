import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InsquareService {
  
  
  constructor() { }

  checkNumberInSquare(numberToCheck: number) {
    const squareCoordinates: [number, number][] = [[0, 0], [-2, 0], [-2, 2], [0, 2]];
    const xCoordinates = squareCoordinates.map((coord) => coord[0]);
    const yCoordinates = squareCoordinates.map((coord) => coord[1]);
  

    const minX = Math.min(...xCoordinates);
    const maxX = Math.max(...xCoordinates);

  

    if (numberToCheck >= minX && numberToCheck <= maxX && numberToCheck) {
      return true;
    }
    
    return false;
  }
}
