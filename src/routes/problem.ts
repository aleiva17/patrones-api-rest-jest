import { Router } from "express";
import { 
  deleteProblem, 
  getProblem, 
  getProblems, 
  postProblem, 
  updateProblem 
} from "../controllers/problem";

const router = Router();

router.get("/", getProblems);
router.get("/:id", getProblem);

router.post("/", postProblem);

router.put("/:id", updateProblem);

router.delete("/:id", deleteProblem)

export { router };