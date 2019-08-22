import mongoose from 'mongoose';

import { PostModel } from '../database/models/index';

export const createPost = async (postData) => {
  try {
    return await PostModel.create(postData);
  } catch (error) {
    return null;
  }
}

export const getPost = async () => {
  try {
    return await PostModel.find();
  } catch (error) {
    return null;
  }
};

