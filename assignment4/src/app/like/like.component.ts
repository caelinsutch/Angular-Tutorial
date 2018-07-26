import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css']
})
export class LikeComponent {

  @Input('likesCount') likesCount: number;
  @Input('tweetBody') tweetBody: string;
  @Output('isLiked') isLiked = new EventEmitter();

  isSelected = false;

  onClick() {
    this.isSelected = !this.isSelected;
    console.log("clicked");
    this.isLiked.emit(this.isSelected)
  }



}
