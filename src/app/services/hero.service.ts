import { MessageService } from './message.service';
import { Observable, of } from 'rxjs';
import { Hero } from '../interfaces/hero';
import { HttpHeaders } from '@angular/common/http';

export abstract class HeroService {
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  constructor(protected messageService: MessageService) {}

  /** GET heroes from the server */
  abstract getHeroes(): Observable<Hero[]>;

  /** GET hero by id. Return `undefined` when id not found */
  abstract getHeroNo404<Data>(id: number): Observable<Hero>;

  /** GET hero by id. Will 404 if id not found */
  abstract getHero(id: number): Observable<Hero>;

  /* GET heroes whose name contains search term */
  abstract searchHeroes(term: string): Observable<Hero[]>;

  //////// Save methods //////////

  /** POST: add a new hero to the server */
  abstract addHero(hero: Hero): Observable<Hero>;

  /** DELETE: delete the hero from the server */
  abstract deleteHero(id: number): Observable<Hero>;

  /** PUT: update the hero on the server */
  abstract updateHero(hero: Hero): Observable<any>;

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   *
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  protected handleError<T>(operation: string, result?: T) {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  /** Log a HeroService message with the MessageService */
  protected log(message: string) {
    this.messageService.add(`HeroService: ${message}`);
  }
}
