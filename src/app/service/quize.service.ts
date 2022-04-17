import { Injectable } from '@angular/core';
import { Quiz } from '../quiz';
import { HttpClient} from '@angular/common/http';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class QuizeService {

  quizzes?: Quiz[] 

  public getQuestions(fileName: string) {
    return this.http.get<any[]>(`../../assets/${fileName}.json`).pipe(
      map((result :any[]) => {
        return result.map(r => new Quiz(r.question, r.answer));
      })
    );
  }

  getQuizzes(){
    return this.quizzes
  }

  constructor(private http: HttpClient) {}
}
