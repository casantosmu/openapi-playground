import { Router } from "express";
import asyncWrapper from "../../common/utils/asyncWrapper";
import { getPetsController } from "./pet.controller";

const router = Router();

router.get("/", asyncWrapper(getPetsController));

export default router;
