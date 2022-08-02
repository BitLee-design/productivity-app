import { Router } from "express";

import { getActivities, addActivity } from "../controllers/activity.controller";

const router = Router();

/* Creating a route for the get request. */
router.get("/activities", getActivities);
/* Creating a route for the post request. */
router.post("/activity", addActivity);

export default router;