import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MessageService } from './message.service';
import { Observable, catchError, map, of, tap } from 'rxjs';
import { Hero } from '../interfaces/hero';
import { HeroService } from './hero.service';

export class HeroServiceImpl extends HeroService {
}
