const Mentor = require('../models/Mentor')

module.exports = {
  async getAll (req, res) {
    const mentors = await Mentor.find({})
    res.status(200).json(mentors)
  },
  
  async alterMentor (req, res) {
    await Mentor.updateOne({ _id: req.params.id }, { $set: req.body })
    res.status(200).send()
  },
}