import { Component, OnInit } from '@angular/core';
import { GameService} from '../services/game.service';
import { AuthService} from '../services/auth.service';
import { weeks } from '../models/weeks';
import { Router } from '@angular/router';


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
  constructor(private gameService: GameService, private auth: AuthService, private router: Router,) { }

  ngOnInit() {
    let week;
    this.gameService.getWeek()
      .subscribe( data => {
        week = data;

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
