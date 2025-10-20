import { Router } from "express"
import * as comidaController from './../controller/comidaController.js'

const router = Router();

router.get("/", comidaController.listAll);

export default router;