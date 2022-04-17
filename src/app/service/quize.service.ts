import { Injectable } from '@angular/core';
import { Quiz } from '../quiz';

@Injectable({
  providedIn: 'root'
})
export class QuizeService {

  quizzes : Quiz[] =[
    {
      question : "first question",
      answer : [
        {option : 'alian' , correct :false,},
        {option : 'cristian' , correct :false,},
        {option : 'yasine' , correct :true,},
      ]
    },
    {
      question : "next question",
      answer : [
        {option : 'alian' , correct :false,},
        {option : 'cristian' , correct :false,},
        {option : 'yasine' , correct :true,},
      ]
    },
    {
      question : "last question",
      answer : [
        {option : 'alian' , correct :false,},
        {option : 'cristian' , correct :false,},
        {option : 'yasine' , correct :true,},
      ]
    },
  ]


  getQuizzes(){
    return this.quizzes
  }

  constructor() { }
}
