import { Request, Response } from "express";
import { 
  insertProblem, 
  getProblemsService, 
  getProblemService, 
  updateProblemService,
  deleteProblemService
} from "../services/problem";
import { handleHttp } from "../utils/error.handle";

const getProblem = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const response = await getProblemService(id);
    const data = response ? response : "NOT_FOUND";
    res.status(200).send(data);
  } catch (e) {
    handleHttp(res, "ERROR_GET_PROBLEM");
  }
};

const getProblems = async (req: Request, res: Response) => {
  try {
    const response = await getProblemsService();
    res.status(200).send(response)
  } catch (e) {
    handleHttp(res, "ERROR_GET_PROBLEMS");
  }
};

const updateProblem = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const data = req.body;
    const response = await updateProblemService(id, data);
    res.send(response);
  } catch (e) {
    handleHttp(res, "ERROR_UPDATE_PROBLEM");
  }
};

const postProblem = async (req: Request, res: Response) => {
  try {
    const { body } = req;
    const responseItem = await insertProblem(body);
    res.send(responseItem);
  } catch (e) {
    handleHttp(res, "ERROR_POST_PROBLEM", e);
  }
};

const deleteProblem = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const response = await deleteProblemService(id);
    res.send(response)
  } catch (e) {
    handleHttp(res, "ERROR_DELETE_PROBLEM");
  }
};

export { getProblem, getProblems, updateProblem, postProblem, deleteProblem };