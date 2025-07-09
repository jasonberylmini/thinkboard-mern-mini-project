import express from "express"
import { getAllNotes, createNote, updateNode, deleteNode, getNoteById } from "../controllers/notesController.js";

const router = express.Router();

router.get("/", getAllNotes);
router.get("/:id", getNoteById);
router.post("/", createNote);
router.put("/:id", updateNode);
router.delete("/:id", deleteNode);


/* 
app.get("/api/routes", (req,res) =>{
  // send the routes
  res.status(200).send("you got 4 routes");
});

app.post("/api/routes", (req,res) =>{
  res.status(201).json({message: "Post created sucessfully"});
});

app.put("/api/notes", (req, res) => {
  res.status(200).json({message: "post updated successfully"});
});

app.delete("/api/notes", (req, res) => {
  res.status(200).json({message: "post deleted successfully"});
});
 */
export default router;