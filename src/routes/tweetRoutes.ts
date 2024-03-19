import { Router } from "express";

const router = Router();

// Tweet CRUD

//** create tweet */
router.post("/", (req, res) => {
  res.status(501).json({ error: "not implemented" });
});

//** get all Tweet */
router.get("/", (req, res) => {
  res.status(501).json({ error: "not implemented" });
});

//** get one Tweet */
router.put("/:id", (req, res) => {
  const { id } = req.params;
  res.status(501).json({ error: `not implemented: ${id}` });
});

//** delete Tweet */
router.delete("/:id", (req, res) => {
  const { id } = req.params;
  res.status(501).json({ error: `not implemented: ${id}` });
});

export default router;
