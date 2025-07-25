import Note from "../models/Node.js";

export async function getAllNotes(_, res){
  try{
    const notes = await Note.find().sort({createdAt: -1}); // -1 will sort in desc. order (newest first)
    res.status(200).json(notes)

  } catch (error){
    console.error("Error in getAllNotes controller", error);
    res.status(500).json({message:"Internal server error"});
  }
}

export async function getNoteById(req,res){
  try{
    const note = await Note.findById(req.params.id)
    if(!note) return res.status(404).json({message: "Note not found"})
    res.json(note);
  } catch(error){
    console.error("Error in getNoteById controller", error);
    res.status(500).json({message:"Internal server error"});
  }
}

export async function createNote(req, res){
  try{
    const {title, content} = req.body
    const note = new Note({title, content})

    const savedNote = await note.save()
    res.status(201).json(savedNote);
  } catch(error){
    console.error("Error in getAllNotes controller", error);
    res.status(500).json({message:"Internal server error"});
  }
}

export async function updateNode(req, res) {
  try{
    const {title, content} = req.body
    const updatedNote = await Note.findByIdAndUpdate(req.params.id,{title, content},
      {
        new: true,
      }
    )
    if(!updatedNote) return res.status(404).json({message: "Note not found"})
    res.status(200).json(updatedNote);
  } catch(error){
    console.error("Error in updateNode", error);
    res.status(500).json({message:"Internal server error"});
  }
}

export async function deleteNode(req, res){
  try{
    const deletedNote = await Note.findByIdAndDelete(req.params.id);
    if(!deletedNote) return res.status(404).json({message: "Note not found"})
    res.status(200).json({message: "Deleted the note succesfully"})
  }catch(error){
    console.error("Error in delteNode controller", error);
    res.status(500).json({message:"Internal server error"});
  }
};