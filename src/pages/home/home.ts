import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { QuestionService } from '../../app/question.service';

@Component({
  selector: 'page-home',
  template: `
  <div>
    <h2>Job Application for Heroes</h2>
    <app-dynamic-form [questions]="questions"></app-dynamic-form>
  </div>
  `,
  providers: [QuestionService]
})
export class HomePage {
  questions: any[];

  constructor(public navCtrl: NavController,
    service: QuestionService) {
    this.questions = service.getQuestions();
  }
}
