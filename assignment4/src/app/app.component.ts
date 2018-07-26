import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  tweet = {
    body: "Lorem Ipsum",
    likesCount: 5,
    isActive: false
  };

  onLikeChange(likeStatus) {
    console.log(likeStatus);

    this.tweet.likesCount += (likeStatus) ? 1 : -1;

    console.log(this.tweet.likesCount)
  }

}
