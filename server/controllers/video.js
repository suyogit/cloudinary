import Video from "../models/Video.js";

export const createVideo = async (req, res, next) => {
  const { imgUrl, videoUrl } = req.body;

  if (!imgUrl || !videoUrl) {
    res.status(400);
    return next(new Error("imgUrl & videoUrl fields are required"));
  }

  try {
    // Create a new instance of the Video model
    const video = new Video({
      imgUrl,
      videoUrl,
    });

    // Save the instance to the database
    await video.save();

    res.status(201).json({
      success: true,
      video,
    });
  } catch (error) {
    console.log(error);
    res.status(500);
    next(error);
  }
};
