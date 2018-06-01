export class Event {
  constructor(
    public id: string,
    public title: string,
    public description: string,
    public starts_at: Date,
    public votes: number
  ) {}
  }
