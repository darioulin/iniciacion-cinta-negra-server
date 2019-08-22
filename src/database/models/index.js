import mongoose from 'mongoose';

import userSchena from '../schemas/userSchema';
import postSchema from '../schemas/postSchema';



const UserModel = mongoose.model('users', userSchena);
const PostModel = mongoose.model('posts', postSchema);

export {
  UserModel,
  PostModel,
};
