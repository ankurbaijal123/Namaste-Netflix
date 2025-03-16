import OpenAI from 'openai';
//import { OpenAI_Key } from './constants';
const OpenAI_Key ="yo"
const client = new OpenAI({
  apiKey: OpenAI_Key, // Ensure OpenAI_Key is set correctly in your environment
  dangerouslyAllowBrowser: true,
});

export default client;