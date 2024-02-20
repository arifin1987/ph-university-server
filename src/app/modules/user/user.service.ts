import config from "../../config";
import { TStudent } from "../student/student.interface";
import { Student } from "../student/student.model";
import { TUser } from "./user.interface";

import { User } from "./user.model";

const createStudentIntoDB = async (password: string, studentData: TStudent) => {
  // if password is not given, use default password
  // create a user object
  const userData: Partial<TUser> = {};
  if (!password) {
    userData.password = config.default_password as string;
  } else {
    userData.password = password;
  }
  userData.email = studentData.email;
  // set student role
  userData.role = "student";
  // set manually generated id
  userData.id = "203010001";
  console.log("user data", userData);
  const newUser = await User.create(userData);
  // create a student
  if (Object.keys(newUser).length) {
    studentData.id = newUser.id;
    studentData.user = newUser._id; //reference _id
    const newStudent = await Student.create(studentData);
    return newStudent;
  }
};

export const UserServices = {
  createStudentIntoDB,
};
