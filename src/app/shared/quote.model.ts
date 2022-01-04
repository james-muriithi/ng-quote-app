export class Quote {
  constructor(
    public author: string,
    public quote: string,
    public createdAt: Date,
    public likes: number = 0,
    public dislikes: number = 0,
    public id: string = Quote.generateRandomId()
  ) {}

  static generateRandomId() {
    return Math.random().toString(16).slice(2);
  }
}
