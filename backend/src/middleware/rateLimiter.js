import ratelimit from "../config/upstash.js";

const rateLimiter = async (req,res,next) => {
  try{
    const key = req.ip || "anonymous"; // identify user by IP
    const { success } = await ratelimit.limit(key);
    
    if(!success){
      return res.status(429).json({
        message:"Too many requests, please try again later."
      });
    }
    next();
    console.log("Rate limiter hit");
  } catch(error){
    console.log("Rate limit error", error);
    next(error);
  }
};

export default rateLimiter