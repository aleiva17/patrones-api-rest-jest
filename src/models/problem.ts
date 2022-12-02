import { Schema, Types, model, Model } from "mongoose";
import { Problem, testCase } from "../interfaces/problem.interface";

const ProblemSchema = new Schema<Problem>(
  {
    title: {
      type: String,
      required: true
    },
    statement: {
      type: String,
      required: true
    },
    level: {
      type: String,
      enum:["Easy", "Medium", "Hard"],
      required: true
    },
    testCases: {
      type: [{
        input: String, 
        output: String
      }],
      required: true
    }
  },
  {
    timestamps: true,
    versionKey: false
  }
);

const ProblemModel = model("Problems", ProblemSchema);
export default ProblemModel;