import { Component, OnInit } from '@angular/core';
import { GameService} from '../services/game.service';
import { AuthService} from '../services/auth.service';
import { weeks } from '../models/weeks';


@Component({
  selector: 'app-pick-em',
  templateUrl: './pick-em.component.html',
  styleUrls: ['./pick-em.component.css']
})
export class PickEmComponent implements OnInit {
  games;
  picks = [];
  today = new Date();
  user;
  winResults;
  userPick;


  // build logic for current week
  constructor(private gameService: GameService, private auth: AuthService) { }

  ngOnInit() {
    let date = new Date();
    const week9 = new Date(2019, 9, 29);
    console.log(week9.toDateString())
    console.log(date)
    date.setDate(date.getDate() + 2)
    console.log(date)
    date.setHours(4)
    console.log(date)
    const week = this.getWeek(date);
    console.log(week)
    console.log('.....................')

    this.gameService.getGames(week)
      .subscribe( (data) => {
        this.games = data;
        console.log(this.games);
      }, err => {
        console.log(err);
      });

    this.gameService.getResults('7')
      .subscribe( data => {
        this.winResults = data;
      });

    this.gameService.getPicks('7', 'nick.chlam@rht.com')
      .subscribe( data => {
        this.userPick = data;
      });

      this.auth.user.subscribe(user => {
        this.user = user;
      });
  }

  clicked(game, index) {
    console.log(game + index);
    this.picks[index] = game;



  }
  getWeek(date): string {
    const week8 = new Date(2019, 9, 22);
    const week9 = new Date(2019, 9, 29);
    const week10 = new Date(2019, 10, 5);
    const week11 = new Date(2019, 10, 12);
    const week12 = new Date(2019, 10, 19);
    const week13 = new Date(2019, 10, 26);
    const week14 = new Date(2019, 11, 3);
    const week15 = new Date(2019, 11, 10);
    const week16 = new Date(2019, 11, 17);
    const week17 = new Date(2019, 11, 24);

    let week = '';
    switch (date) {
      case date >= week8 && date <= week8.setDate(week8.getDate() + 2) && date <= week8.setHours(22) :
        week =  '8';
        return week;
      case date >= week9 && date <= week9.setDate(week9.getDate() + 2) && date <= week9.setHours(22):
        week =  '9';
        break;
      case date >= week10 && date <= week10.setDate(week10.getDate() + 2) && date <= week10.setHours(22):
        week =  '10';
        break;
      case date >= week11 && date <= week11.setDate(week11.getDate() + 2) && date <= week11.setHours(22) :
        week =  '11';
        break;
      case date >= week12 && date <= week12.setDate(week12.getDate() + 2) && date <= week12.setHours(22)  :
        week =  '12';
        break;
      case date >= week13 && date <= week13.setDate(week13.getDate() + 2) && date <= week13.setHours(22)  :
        week =  '13';
        break;
      case date >= week14 && date <= week14.setDate(week14.getDate() + 2) && date <= week14.setHours(22)  :
        week =  '14';
        break;
      case date >= week15 && date <= week15.setDate(week15.getDate() + 2) && date <= week15.setHours(22)  :
        week =  '15';
        break;
      case date >= week16 && date <= week16.setDate(week16.getDate() + 2) && date <= week16.setHours(22)  :
        week =  '16';
        break;
      case date >= week17 && date <= week17.setDate(week17.getDate() + 2) && date <= week17.setHours(22)  :
        week =  '17';
        break;

      default:
          week = '0';
          console.log('in break')
          console.log(date)
          break;
    }
      return week;

  }
  test() {
    console.log('user picks')
    console.log(this.userPick)
    console.log('win results')
    console.log(this.winResults)


    console.log(this.games[0].week);
    console.log(this.picks);

    if (!this.picks.includes(undefined) && this.picks.length === this.games.length ) {
      console.log('complete');
      // send week and picks to database
      const picked = {
        week: this.games[0].week,
        picks: this.picks,
        user: this.user
      };
      console.log(picked);
      this.gameService.postPick(picked).subscribe(data => {
        console.log(data)
      })

    } else { console.log('not complete fill out every game'); }
  }

}
