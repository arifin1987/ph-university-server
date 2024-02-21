import { Schema } from "mongoose";
import { TAcademicSemester } from "./academicSemester.interface";

const academicSemesterSchema = new Schema<TAcademicSemester>({
  name: {
    type: String,
    required: true,
  },
  year: {
    type: Date,
    required: true,
  },
  code: {
    type: String,
    required: true,
  },
});
