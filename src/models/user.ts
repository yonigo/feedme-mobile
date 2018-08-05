export class User {
  id: string;
  username: string;
  details: Object;

  constructor(username: string, details: Object) {
    this.details = details;
    this.username = username;
  }
}
