import { GoogleGenerativeAI } from '@google/generative-ai';
import { GeminiAPI } from './constants';
const genAI = new GoogleGenerativeAI(GeminiAPI);

export default genAI;
