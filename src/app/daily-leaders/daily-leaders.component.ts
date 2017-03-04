import { Component, OnInit } from '@angular/core';
import { DailyLeadersService } from '../_service/daily-leaders.service';

import { Player } from '../_model/player';

@Component({
  selector: 'app-daily-leaders',
  templateUrl: './daily-leaders.component.html',
  styleUrls: ['./daily-leaders.component.css']
})
export class DailyLeadersComponent implements OnInit {

  players: Player[] = [];

  constructor(private dailyLeadersService: DailyLeadersService) {
    this.dailyLeadersService = dailyLeadersService;
  }

  ngOnInit() {
    this.dailyLeadersService.getPlayers().subscribe(data => this.players = data);
  }
}
