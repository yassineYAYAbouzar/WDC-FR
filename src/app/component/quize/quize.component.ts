import { Component, OnInit } from '@angular/core';
import { Quiz } from '../../quiz';
import { QuizeService } from '../../service/quize.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-quize',
  templateUrl: './quize.component.html',
  styleUrls: ['./quize.component.sass']
})
export class QuizeComponent implements OnInit {

  quizzes! : Quiz[]
  currentQuiz = 0;
  answerSelected = false
  lastIndex= false
  correctAnswer =  0
  inCorrectAnswer =  0
  constructor(private route: ActivatedRoute,private quizeService : QuizeService) { }

  ngOnInit() {
    //read from the dynamic route and load the proper quiz data
    this.quizeService.getQuestions(this.route.snapshot.params['quizId'])
      .subscribe(questions => {
        this.quizzes = questions;
      });
  }
  
  onAnswer(correct : boolean){
    this.answerSelected = true
    if(correct){
      this.correctAnswer++
    }else{
      this.inCorrectAnswer++
    }
  }
  next(){
    this.answerSelected = false
    this.currentQuiz++
    if(this.quizzes?.length == this.currentQuiz){
        console.log("hello")
    }
  }
  refresh(){
    this.currentQuiz =0
    this.currentQuiz =0
    this.inCorrectAnswer =0
  }
  goback(){
    this.currentQuiz >0 ? this.lastIndex = false : this.lastIndex = true
  }

}
