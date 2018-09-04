import * as uuid from 'uuid'
import db from '../sqlz/models/_index'
import { StudentInstance } from './../sqlz/models/student';

export function allStudents(): Promise<any> {
  return db.Student.findAll();
}
