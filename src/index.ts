import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
express().get('/', (req, res) => res.status(200).json({ message: 'success' })).listen(process.env.PORT || 3000);

import initialise from './discord/discordClient';
initialise();