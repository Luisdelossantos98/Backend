import { Request, Response } from 'express'
import { StudentDao } from '../../dao/_index';

export function allStudents(req: Request, res: Response) {
  return StudentDao.allStudents()
    .then(students => res.status(200).send(students))
    .catch(err => res.boom.badRequest(err));
}

export function searchStudent(req: Request, res: Response) {

}
