import { Router } from "express"
import * as comidaController from './../controller/comidaController.js'

const router = Router();

router.get("/", comidaController.listAll);
router.get("/:id", comidaController.listOne);
router.post("/", comidaController.create);
router.delete("/:id", comidaController.deletar);
router.put("/:id", comidaController.update);

export default router;