export class User {
  id: number;
  username: string;
  details: Object;

  constructor(username: string, details: Object) {
    this.details = details;
    this.username = username;
  }
}
