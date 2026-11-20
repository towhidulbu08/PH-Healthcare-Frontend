import { z } from "zod";

export const MAX_FILE_SIZE = 5;
export const MAX_BIO_LENGTH = 1000;

export const MAX_FILE_SIZE_BYTES = MAX_FILE_SIZE * 1024 * 1024;

export const MAX_ADDITIONAL_FILES = 5;

export const ACCEPTED_FILE_TYPES = [
  "application/pdf",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  "image/png",
  "image/jpeg",
];

export function isAcceptedFileSize(fileSize: number) {
  return fileSize <= MAX_FILE_SIZE_BYTES;
}

export function isAcceptedFileType(fileType: string) {
  return ACCEPTED_FILE_TYPES.includes(fileType);
}

export const doctorApplicationSchema = z.object({
  name: z.string().trim().min(2, "Name must be at least 2 characters long"),

  email: z.email("Invalid email address").trim(),
  phone: z.string().trim().min(5, "Contact number is invalid"),

  address: z
    .string()
    .trim()
    .min(5, "Address must be at least 5 characters long"),
  specialization: z.string().trim().min(2, "Specialization is required"),

  licenseNumber: z.string().trim().min(3, "License number is required"),

  qualifications: z.string().trim().min(2, "Qualifications are required"),

  // Handles converting incoming FormData strings like "12" into an integer number
  experienceYears: z.string().trim(),
  bio: z
    .string()
    .trim()
    .max(MAX_BIO_LENGTH, `Bio cannot exceed${MAX_BIO_LENGTH} characters`),
  // Handles converting incoming FormData strings like "150.00" into a float number
  consultationFee: z.string().trim(),
});
