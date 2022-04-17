import { Component, OnInit } from '@angular/core';
import { Quiz } from '../../quiz';
import { QuizeService } from '../../service/quize.service';

@Component({
  selector: 'app-quize',
  templateUrl: './quize.component.html',
  styleUrls: ['./quize.component.sass']
})
export class QuizeComponent implements OnInit {

  quizzes? : Quiz[]
  currentQuiz = 0;
  answerSelected = false
  constructor(private quizeService : QuizeService) { }

  ngOnInit(): void {
    this.quizzes = this.quizeService.getQuizzes()
  }
  onAnswer(correct : boolean){
    this.answerSelected = true
    setTimeout(() => {
      this.currentQuiz++
      this.answerSelected = false
    }, 300);
  }

}
