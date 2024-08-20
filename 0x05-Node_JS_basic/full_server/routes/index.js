import express from 'express';
import AppController from '../controllers/AppController';
import StudentsController from '../controllers/StudentsController';

function controllerRouting(app) {
  const router = express.Router();
  app.use('/', router);

  // Handle the root route
  router.get('/', (req, res) => {
    AppController.getHomepage(req, res);
  });

  // Handle /students route
  router.get('/students', (req, res) => {
    const database = process.argv[2];
    if (!database) {
      return res.status(500).send('Database file not provided');
    }
    StudentsController.getAllStudents(req, res, database);
  });

  // Handle /students/:major route
  router.get('/students/:major', (req, res) => {
    const database = process.argv[2];
    if (!database) {
      return res.status(500).send('Database file not provided');
    }
    StudentsController.getAllStudentsByMajor(req, res, database);
  });

}

export default controllerRouting;
