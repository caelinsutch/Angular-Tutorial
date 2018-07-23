
import { Like } from './Likes';

let likes = new Like(12);

likes.click();

likes.like = 18;

console.log(likes.like);