import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { GameService} from '../services/game.service';
import { AuthService} from '../services/auth.service';
import { Router } from '@angular/router';

import { AlertifyService } from '../services/alertify.service';


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
  awaySelectedIndex = [];
  homeSelectedIndex = [];





  // build logic for current week
  constructor(private gameService: GameService, private auth: AuthService, private router: Router,private alertify: AlertifyService) { }

  ngOnInit() {
    let week;
    this.gameService.getWeek()
      .subscribe( data => {
        week = data;
        console.log(week.week)
        if (week.week === 'not allowed') { return this.router.navigate(['/timesUp']); }

        this.gameService.getGames(week.week)
          .subscribe( (games) => {
            this.games = games;
            console.log(this.games);
          }, err => {
            console.log(err);
          });
      }, err => {
        console.log(err);
      });

      this.auth.user.subscribe(user => {
        this.user = user;
      });
  }

  clicked(game, index) {
    console.log(game + index);
    this.picks[index] = game;

    console.log(this.awaySelectedIndex[index] )
    if(this.awaySelectedIndex[index] === false || this.awaySelectedIndex[index]  === undefined ){
      this.awaySelectedIndex[index] = true;
      this.homeSelectedIndex[index] = false;
    } else {
      this.awaySelectedIndex[index] = false;
      this.picks[index] = null;
    }



  }
  clickedHome(game, index){
    this.picks[index] = game;

    if(this.homeSelectedIndex[index] === false || this.homeSelectedIndex[index]  === undefined ){
      this.homeSelectedIndex[index] = true;
      this.awaySelectedIndex[index] = false;
    } else {
      this.homeSelectedIndex[index] = false;
      this.picks[index] = null;
    }

  }
  test() {
    console.log(this.picks)
    if (!this.picks.includes(undefined) && this.picks.length === this.games.length && !this.picks.includes(null)) {
      console.log('complete');
      // send week and picks to database
      const picked = {
        week: this.games[0].week,
        picks: this.picks,
        user: this.user
      };
      console.log(picked);

      this.gameService.postPick(picked).subscribe( () => {
        this.alertify.success('Picks Accepted for week ' + this.games[0].week);
        return this.router.navigate(['/complete']);
      }, err => this.alertify.error(err));

    } else {
       this.alertify.error('please fill out every game')
      console.log('not complete fill out every game');
    }

  }

}
