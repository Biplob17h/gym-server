import Booking from "../model/bookingModel.js";
import User from "../model/userModel.js";

const createABooking = async (req, res) => {
  try {
    const { date, coachId, time, userEmail } = req.body;

    // coach
    const coach = await User.findOne({ _id: coachId }).select([
      "-password",
      "-role",
      "-workTime",
      "-alert",
    ]);

    const bookingData = {
      date,
      coachEmail: coach.email,
      time,
      coach,
      userEmail,
    };

    // booking
    const booking = new Booking(bookingData);
    const result = await booking.save();

    res.status(200).json({
      status: "success",
      message: "booking created successfully",
      coach,
      result,
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      error: error.message,
    });
  }
};



export { createABooking };
