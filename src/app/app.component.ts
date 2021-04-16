import {Component, OnInit} from '@angular/core';
import {Friend} from './friend';
import {AddFriendService} from './add-friend.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'angular-friendbook';
  languages = ['PHP', 'JavaScript', 'TypesScript', 'C#'];
  friendModel = new Friend(null, null, null, null, null);
  allFriends: Friend[] = [];

  private addFriendService: AddFriendService;

  ngOnInit(): any { this.dataGet('http://localhost:9000/allFriends'); }

  dataSend(): void{
    this.addFriendService.addfriend(this.friendModel).subscribe(
      succes =>  this.dataGet('http://localhost:9000/allFriends')
    ,
      error => 'it didnt work');
  }

   async dataGet(url: string): Promise<any>{
     return await fetch(url, {method: 'get', headers: {'content-type': 'application/json'}})
       .then(res => res.json())
       .then( res => {
         console.log(res);
         this.allFriends = res; });
   }



  constructor(addFriendService: AddFriendService) {
    this.addFriendService = addFriendService;
    // addFriendService.getfriend();
    // this.dataGet('http://localhost:9000/allFriends').then(response => console.log(response));
      }

}

