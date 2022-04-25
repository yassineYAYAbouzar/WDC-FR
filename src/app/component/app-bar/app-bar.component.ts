import { Component, OnInit } from '@angular/core';
import { AccountService } from '../../service/account.service';
import { TokenService } from '../../service/token.service';

@Component({
  selector: 'app-app-bar',
  templateUrl: './app-bar.component.html',
  styleUrls: ['./app-bar.component.css']
})
export class AppBarComponent implements OnInit {

  currentUser :any
  constructor(private accountService : AccountService ,
              private tokenService : TokenService) { }


  ngOnInit(): void {
    this.accountService.authStatus.subscribe(res=>{
      this.currentUser = this.tokenService.getInfo()
      console.log(this.currentUser?.sub)
    })
  }

}
