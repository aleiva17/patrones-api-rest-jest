import { Problem } from "../interfaces/problem.interface";
import ProblemModel from "../models/problem";

const insertProblem = async (item: Problem) => {
  const responseInsert = await ProblemModel.create(item);
  return responseInsert;
};

const getProblemsService = async () => {
  const responseProblems = await ProblemModel.find({});
  return responseProblems;
}

const getProblemService = async (id: string) => {
  const responseProblems = await ProblemModel.findOne({_id: id});
  return responseProblems;
}

const updateProblemService = async (id: string, data: Problem) => {
  const responseProblem = await ProblemModel.findByIdAndUpdate(
    { 
      _id: id 
    }, 
    data,
    {
      new: true
    });
  return responseProblem;
}

const deleteProblemService = async (id: string) => {
  const responseProblem = await ProblemModel.remove({ _id: id });
  return responseProblem;
}

export { insertProblem, getProblemsService, getProblemService, updateProblemService, deleteProblemService };