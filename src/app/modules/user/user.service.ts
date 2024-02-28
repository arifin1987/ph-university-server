import config from "../../config";
import { TAcademicSemester } from "../academicSemester/academicSemester.interface";
import { AcademicSemester } from "../academicSemester/academicSemester.model";
import { TStudent } from "../student/student.interface";
import { Student } from "../student/student.model";
import { TUser } from "./user.interface";

import { User } from "./user.model";
import { generateStudentId } from "./user.utils";

const createStudentIntoDB = async (password: string, payLoad: TStudent) => {
  // if password is not given, use default password
  // create a user object
  const userData: Partial<TUser> = {};

  userData.password = password || (config.default_password as string);

  // set student role
  userData.role = "student";
  // set student email
  userData.email = payLoad.email;

  // find academic semester info
  const admissionSemester = await AcademicSemester.findById(
    payLoad.admissionSemester
  );
  if (!admissionSemester) {
    throw new Error("semester not found");
  }

  // set  generated id
  userData.id = await generateStudentId(admissionSemester);
  console.log("user data", userData);
  const newUser = await User.create(userData);
  // create a student
  if (Object.keys(newUser).length) {
    payLoad.id = newUser.id;
    payLoad.user = newUser._id; //reference _id
    const newStudent = await Student.create(payLoad);
    return newStudent;
  }
};

export const UserServices = {
  createStudentIntoDB,
};
