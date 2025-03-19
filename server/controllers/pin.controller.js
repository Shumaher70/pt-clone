import Pin from '../models/pin.model.js';

export const getPins = async (req, res) => {
  try {
    const pins = await Pin.find();

    return res.status(200).json(pins);
  } catch (error) {
    console.error('Error fetching pins:', error);
    res
      .status(500)
      .json({ message: 'Failed to fetch pins', error: error.message });
  }
};
