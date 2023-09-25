import { Response } from "express";
export const isSuccessful = (response: any, message: string, res: Response) => {
  res.status(200).json({
    data: response,
    status: 200,
    error: false,
    message: message,
  });
};
export const isBadRequest = (response: any, message: string, res: Response) => {
  res.status(400).json({
    data: response || null,
    status: 400,
    error: true,
    message: message,
  });
};
export const isNotFound = (response: any, message: string, res: Response) => {
  res.status(404).json({
    data: response,
    status: 404,
    error: true,
    message: message,
  });
};
export const isServerError = (
  response: any,
  message: string,
  res: Response,
) => {
  res.status(500).json({
    data: response,
    status: 500,
    error: true,
    message: message,
  });
};
export const isCreated = (response: any, message: string, res: Response) => {
  res.status(201).json({
    data: response,
    status: 201,
    error: false,
    message: message,
  });
};
export const isUnauthorized = (
  response: any,
  message: string,
  res: Response,
) => {
  res.status(401).json({
    data: response,
    status: 401,
    error: true,
    message: message,
  });
};
export const isForbidden = (response: any, message: string, res: Response) => {
  res.status(403).json({
    data: response,
    status: 403,
    error: true,
    message: message,
  });
};
export const isConflict = (response: any, message: string, res: Response) => {
  res.status(409).json({
    data: response,
    status: 409,
    error: true,
    message: message,
  });
};
export const isError = (response: any, message: string, res: Response) => {
  res.status(422).json({
    data: response,
    status: 422,
    error: true,
    message: message,
  });
};
