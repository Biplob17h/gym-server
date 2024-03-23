import expres from "express";
import { getAllCoach, getSingleCoach } from "../controller/coachController.js";
const coachRouter = expres.Router();

coachRouter.get("/allCoach", getAllCoach);
coachRouter.get("/singleCoach/:id", getSingleCoach);

export default coachRouter;
