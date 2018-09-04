import * as uuid from 'uuid'
import db from '../sqlz/models/_index'
import { CounselorsInstance } from './../sqlz/models/counselors';

export function allCounselors(): Promise<any> {
  return db.Counselors.findAll();
}
