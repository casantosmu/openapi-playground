import logger from "../../common/logger";
import { fakePets } from "./pet.faker";
import { GetAllPetsParameters, Pet } from "./pet.interfaces";

export const getAllPetsService = async (query: GetAllPetsParameters) => {
  logger.debug("Get pets. Not listed yet");

  return new Promise<Pet[]>((resolve, reject) => {
    resolve(fakePets);
  });
};
