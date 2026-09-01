// Validates the body of POST /api/quiz/start before it reaches the controller.
export const validateStartGame = (req, res, next) => {
  const { name } = req.body;

  if (!name || typeof name !== "string" || !name.trim()) {
    return res
      .status(400)
      .json({ message: "A player name is required to start" });
  }

  next();
};

// Validates the body of POST /api/quiz/answer before it reaches the controller.
export const validateSubmitAnswer = (req, res, next) => {
  const { playerId, submittedAnswer } = req.body;

  if (!playerId || typeof playerId !== "string") {
    return res.status(400).json({ message: "playerId is required" });
  }

  // MongoDB ObjectIds are always a 24-character hex string.
  if (!/^[0-9a-fA-F]{24}$/.test(playerId)) {
    return res.status(400).json({ message: "playerId is not a valid id" });
  }

  if (!submittedAnswer || typeof submittedAnswer !== "string") {
    return res.status(400).json({ message: "submittedAnswer is required" });
  }

  next();
};
