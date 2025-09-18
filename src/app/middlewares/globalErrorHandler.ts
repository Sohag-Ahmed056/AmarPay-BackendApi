import { Request, Response, NextFunction } from "express";
import { enVars } from "../config/env";
import { TErrorSources } from "../types/error.types";
import { handleDuplicateError } from "../errorHelpers/handleDuplicateError";
import { handleCastError } from "../errorHelpers/handleCastError";
import { handleZodError } from "../errorHelpers/handleZodError";
import { handleValidationError } from "../errorHelpers/handleValidationError";
import AppError from "../errorHelpers/appError";

/**
 * Global Express Error Handler
 */
export const globalErrorHandler = async (
  error: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    // Ignore favicon requests to avoid noise
    if (req.originalUrl === "/favicon.ico") {
      return res.sendStatus(204);
    }

    // Log error in development
    if (enVars.NODE_ENV === "development") {
      console.error(error);
    }

    const errorSources: TErrorSources[] = [];
    let errorStatusCode = 500;
    let errorMessage = "Something went wrong. Internal server error.";

    // Handle duplicate key error (MongoDB)
    if (error.code === 11000) {
      const duplicateError = handleDuplicateError(error);
      errorStatusCode = duplicateError.errorStatusCode;
      errorMessage = duplicateError.errorMessage;
    }

    // Handle Mongoose CastError
    else if (error.name === "CastError") {
      const castError = handleCastError(error);
      errorStatusCode = castError.errorStatusCode;
      errorMessage = castError.errorMessage;
    }

    // Handle Zod validation errors
    else if (error.name === "ZodError") {
      const zodError = handleZodError(error, errorSources);
      errorStatusCode = zodError.errorStatusCode;
      errorMessage = zodError.errorMessage;
    }

    // Handle Mongoose ValidationError
    else if (error.name === "ValidationError") {
      const validationError = handleValidationError(error, errorSources);
      errorStatusCode = validationError.errorStatusCode;
      errorMessage = validationError.errorMessage;
    }

    // Handle custom AppError
    else if (error instanceof AppError) {
      errorStatusCode = error.statusCode;
      errorMessage = error.message;
    }

    // Fallback for native JS Error
    else if (error instanceof Error) {
      errorStatusCode = 500;
      errorMessage = error.message;
    }

    // Ensure res is valid
    if (res && typeof res.status === "function") {
      return res.status(errorStatusCode).json({
        success: false,
        message: errorMessage,
        error:
          enVars.NODE_ENV === "development"
            ? {
                name: error.name,
                message: error.message,
                errorSources,
                issues: error.issues || null,
              }
            : null,
        stack: enVars.NODE_ENV === "development" ? error.stack : null,
      });
    } else {
      // fallback if res is not Express Response
      console.error("Cannot send response, res is invalid:", res);
    }
  } catch (handlerError) {
    // Catch any unexpected errors inside the error handler itself
    console.error("Error inside globalErrorHandler:", handlerError);
    if (res && typeof res.status === "function") {
      res.status(500).json({
        success: false,
        message: "Internal Server Error (from error handler)",
      });
    }
  }
};
