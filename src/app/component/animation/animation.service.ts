import { map } from 'rxjs/operators';
import { HttpService } from '../../service/common/http/http.service';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { PostModel } from './post.model';

@Injectable({
  providedIn: 'root',
})
export class AnimationService {
  constructor(private httpService: HttpService) {
    // this.itemListener();
  }
  apiUrl = '/tasks';
  error = new Subject<string>();
  itemListenerSubject = new Subject<PostModel>();

  list: PostModel[] = [];

  addItem(inpurString: string): void {
    const body = {
      title: inpurString,
      description: inpurString,
    };
    this.httpService.postHttpMethod(this.apiUrl, body).subscribe(
      (res) => {
        console.log('======post return res: ', res);
      },
      (err) => {
        this.error.next(err.message);
      }
    );
  }

  itemListener(): void {
    setInterval(() => {
      this.getItems().subscribe((res) => {
        res.forEach((item) => {
          if (!this.list.some((listItem) => listItem.id === item.id)) {
            this.itemListenerSubject.next(item);
            this.list.push(new PostModel(item));
          }
        });
      });
    }, 1000);
  }

  getItems(): Observable<PostModel[]> {
    return this.httpService.getHttpMethod(this.apiUrl).pipe(
      map((responseData: PostModel[]) => {
        const items: PostModel[] = responseData;
        return items;
      })
    );
  }

  onClickGetItems(): void {
    this.getItems().subscribe((res) => {
      res.forEach((item) => {
        if (!this.list.some((listItem) => listItem.id === item.id)) {
          this.itemListenerSubject.next(item);
          this.list.push(new PostModel(item));
        }
      });
    });
  }

  deleteItem(item: PostModel): void {
    this.list.splice(
      this.list.findIndex((i) => i.id === item.id),
      1
    );

    this.httpService.deleteHttpMethod(this.apiUrl + '/' + item.id).subscribe(
      (res) => {},
      (err) => {
        this.error.next(err.message);
      }
    );
  }
}
