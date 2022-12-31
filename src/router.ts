import { Router } from "express";
import docsRoutes from "./common/docs/docs.routes";
import { petRoutes } from "./components/pet";

const router = Router();
const routerV1 = Router();

router.use("/v1", routerV1);

routerV1.use("/docs", docsRoutes);
routerV1.use("/pets", petRoutes);

export default router;
