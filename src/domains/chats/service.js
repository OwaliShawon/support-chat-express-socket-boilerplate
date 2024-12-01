const Chat = require("./schema");

const createChatRequest = async (req, res, next) => {
  try {
    const { title, description } = req.body;

    const createChat = await Chat.create(req.body);

    return res.json({
      status: 201,
      message: "Chat created successfully",
      data: createChat,
    });
  } catch (error) {
    throw new Error(error);
  }
};

module.exports = {
  createChatRequest,
};
