export class Quote {
  constructor(
    public id: any,
    public author: string,
    public quote: string,
    public createdAt: Date,
    public likes: number = 0,
    public dislikes: number = 0
  ) {}

  static generateRandomId() {
    return Math.floor(Math.random() * 100);
  }
}
