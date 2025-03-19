import express from 'express';

import * as Pin from '../controllers/pin.controller.js';

const router = express.Router();

router.get('/', Pin.getPins);

export default router;
