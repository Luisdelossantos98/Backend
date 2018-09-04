import { Express } from 'express';
import { StudentController } from '../endpoints/_index';


export function routes(app: Express) {
  // GET ROUTE FOR GETTING ALL STUDENTS
  app.get('/api/students', StudentController.StudentGet.allStudents);
  // /api/students    GET
  // POST ROUTE FOR SAVING A STUDENT
}
