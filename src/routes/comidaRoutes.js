import { Router } from "express"
import * as comidaController from './../controller/comidaController.js'

const router = Router();

router.get("/", comidaController.listAll);
router.get("/:id", comidaController.listOne)

export default router;