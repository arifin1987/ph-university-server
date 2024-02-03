import { z } from "zod";

const userNameValidationSchema = z.object({
  firstName: z.string().min(1).max(255),
  middleName: z.string().min(1).max(255).optional(),
  lastName: z.string().min(1).max(255),
});

const guardianValidationSchema = z.object({
  fatherName: z.string().min(1).max(255),
  fatherOccupation: z.string().min(1).max(255),
  fatherContactNo: z.string().min(1).max(255),
  motherName: z.string().min(1).max(255),
  motherOccupation: z.string().min(1).max(255),
  motherContactNo: z.string().min(1).max(255),
});

const localGuardianValidationSchema = z.object({
  name: z.string().min(1).max(255),
  occupation: z.string().min(1).max(255),
  contactNo: z.string().min(1).max(255),
  address: z.string().min(1).max(255),
});

const studentValidationSchema = z.object({
  id: z.string().min(1).max(255),
  name: userNameValidationSchema,
  gender: z.enum(["male", "female"]),
  dateOfBirth: z.string().min(1).max(255),
  email: z.string().email(),
  contactNo: z.string().min(1).max(255),
  emergencyContactNo: z.string().min(1).max(255),
  bloodGroup: z.enum(["A+", "A-", "O+", "B+"]),
  presentAddress: z.string().min(1).max(255),
  permanentAddress: z.string().min(1).max(255),
  guardian: guardianValidationSchema,
  localGuardian: localGuardianValidationSchema,
  profileImg: z.string().min(1).max(255).optional(),
  isActive: z.enum(["active", "blocked"]),
});

export default studentValidationSchema;
