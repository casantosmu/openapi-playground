import { Request, Response } from "express";
import statusCodes from "../../common/constants/statusCodes";
import { GetAllPetsParameters, Pet } from "./pet.interfaces";
import { getAllPetsService } from "./pet.services";

export type PetsResponse = Pet[];

/**
 * This controller handles the GET /pets route, which returns a list of pets.
 * @route GET /pets
 */
export const getPetsController = async (
  req: Request<{}, {}, {}, GetAllPetsParameters>,
  res: Response
) => {
  const response: PetsResponse = await getAllPetsService(req.query);

  res.status(statusCodes.ok).json(response);
};
