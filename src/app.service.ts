import { Injectable, Delete } from '@nestjs/common';
import * as uuidv4 from 'uuid/v4';

@Injectable()
export class AppService {
  DATABASE = [];

  getlist() {
    if (this.DATABASE.length) {
      return this.DATABASE;
    } else {
      return 'Empty Array';
    }
  }

  delete(id1) {
    for (let i = 0; this.DATABASE.length > i; i++) {
      if (this.DATABASE[i].uuidv4 === id1) {
        const index = this.DATABASE.indexOf(id1);
        this.DATABASE.splice(index, 1);
        return this.DATABASE;
      }
    }
  }

  createdb1(insert) {
    insert.uuidv4 = uuidv4();
    this.DATABASE.push(insert);
    return this.DATABASE;
  }

  updateExpression1(update, id1) {
    let data;
    for (let i = 0; i <= this.DATABASE.length - 1; i++) {
      const temp = this.DATABASE[i].uuidv4;
      data = 0;

      if (this.DATABASE[i].uuidv4 === id1) {
        this.DATABASE[i].name = update.name;
        this.DATABASE[i].id = update.id;
        this.DATABASE[i].age = update.age;
        return this.DATABASE;
      }
    }
    if (data === 0) {
      return 'Empty Array';
    }
  }
}
