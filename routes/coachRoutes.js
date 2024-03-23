import expres from "express";
import {
  deleteACoach,
  getAllCoach,
  getSingleCoach,
  getTodaysBookings,
} from "../controller/coachController.js";
const coachRouter = expres.Router();

coachRouter.get("/allCoach", getAllCoach);
coachRouter.get("/singleCoach/:id", getSingleCoach);
coachRouter.get('/allBookings', getTodaysBookings)

coachRouter.delete("/delete", deleteACoach);

export default coachRouter;
