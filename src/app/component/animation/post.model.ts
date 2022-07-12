export class PostModel {
  title: string | undefined;
  description: string | undefined;
  status: string | undefined;
  id: string | undefined;
  constructor(item: PostModel) {
    this.id = item.id;
    this.title = item.title;
    this.description = item.description;
    this.status = item.status;
  }
}
