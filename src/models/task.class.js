import { LEVELS } from "./levels.enum";

export class Task {
  name = "";
  description = "";
  completed = false;
  level = LEVELS.NORMAL;

  constructor(name, description, level, completed) {
    this.name = name;
    this.description = description;
    this.completed = completed;
    this.level = level;
  }
}
