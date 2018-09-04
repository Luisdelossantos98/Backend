import { Express } from 'express';
import { CounselorsController } from '../endpoints/_index';


export function routes(app: Express) {
  // GET ROUTE FOR GETTING ALL Counselors
  app.get('/api/Counselors', CounselorsController.CounselorGet.allCounselors);
  // /api/students    GET
  // POST ROUTE FOR SAVING A Counselors
}
