const aiUtils = require('../utils/ai.utils');

module.exports.getReview = async (req,res) => {
  const code = req.body.code;

  if(!code) {
    return res.status(400).json({ message: 'Code is required' });
  }

  const response = await aiUtils.generateContent(code);

  res.send(response);
}