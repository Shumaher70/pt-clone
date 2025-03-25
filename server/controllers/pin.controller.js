import Pin from '../models/pin.model.js';

export const getPins = async (req, res) => {
  const pageNumber = parseInt(req.query.cursor) || 0;

  const LIMIT = 21;

  try {
    const pins = await Pin.find()
      .limit(LIMIT)
      .skip(pageNumber * LIMIT);

    const hasNextPage = pins.length === LIMIT;

    const nextCursor = hasNextPage ? pageNumber + 1 : null;

    return res.status(200).json({ pins, nextCursor });
  } catch (error) {
    console.error('Error fetching pins:', error);
    res
      .status(500)
      .json({ message: 'Failed to fetch pins', error: error.message });
  }
};
