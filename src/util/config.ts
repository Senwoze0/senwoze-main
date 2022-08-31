import path from 'path';
import { IConfig } from "../types/config";

// CHANGE THIS TO CONFIG PATH
const CONFIG_PATH = path.resolve(__dirname, '../config.json');
export const config: IConfig = require(CONFIG_PATH);