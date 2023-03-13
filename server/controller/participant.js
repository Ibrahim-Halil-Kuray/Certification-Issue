const Participant = require('../db-models/participants')

const getParticipant = async(req, res ) => {

    let participants = await Participant.find({ id: req.user.id}).lean();

    try{
        res.status(200).json({result : participants})
    }catch (err) {
        res.status(500).json({ error: err.message });
    }

}

const createParticipant = async (req, res) => {

    let participant = new Participant({id:1})

    try{

       await participant.save();
       res.status(201).json({result: participant})

    }catch(err) {
        res.status(500).json({ error: err.message });
    }
}

module.exports = {
    getProjects,
    createProject,
  };