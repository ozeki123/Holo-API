import express from 'express';
import Experiences from '../models/Experiences.js';

const expRouter = express.Router();

//Create group
expRouter.get('/', async (req, res) => {
  try{
    const experiences = await Experiences.find();
    res.json(experiences);
  } catch(err) {
    res.status(500).json({message: err.message});
  }
})

expRouter.get('/:id', async(req, res) => {
  try{
    const experiences = await Experiences.findById(req.params.id);
    res.json(experiences);
  } catch(err) {
    res.status(501).json({message: err.message});
  }
})

expRouter.post('/', async (req, res) => {
  const experience = new Experiences(req.body);
  try{
    const savedExperience = await experience.save();
    res.status(201).json(savedExperience);
  } catch(err){
    res.status(400).json({message: err.message})
  }
})

expRouter.put('/:id', async(req, res) => {
  const experience = await Experiences.findById(req.params.id);
  if(!experience) {
    return res.status(400).json({message: 'Group not found'})
  }
  try{
    const updatedExperience = await Experiences.updateOne({_id: req.params.id}, {$set: req.body});
    res.status(200).json(updatedExperience)
  } catch(err){
    res.status(400).json({message: err.message})
  }
})

expRouter.delete('/:id', async(req, res) => {
  const experience = await Experiences.findById(req.params.id);
  if(!experience) {
    return res.status(400).json({message: 'Group not found'});
  }
  try{
    const deletedExperience  = await Experiences.deleteOne({_id: req.params.id});
    res.status(200).json(deletedExperience)
  } catch(err) {
    res.status(400).json({message: err.message})
  }
})



export default expRouter;