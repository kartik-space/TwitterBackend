import { Router } from "express";

const router = Router();

// USER CRUD

//** create user */
router.post("/", (req, res) => {
  res.status(501).json({ error: "not implemented" });
});

//** get all user */
router.get("/", (req, res) => {
  res.status(501).json({ error: "not implemented" });
});

//** get one user */
router.put("/:id", (req, res) => {
  const { id } = req.params;
  res.status(501).json({ error: `not implemented: ${id}` });
});

//** delete user */
router.delete("/:id", (req, res) => {
  const { id } = req.params;
  res.status(501).json({ error: `not implemented: ${id}` });
});

export default router;
