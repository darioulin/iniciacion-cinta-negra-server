import {
  createPost,
  getPost,
} from '../actions/postActions';

const books = [
  {
    title: 'Harry Potter and the Chamber of Secrets',
    author: 'J.K. Rowling',
  },
  {
    title: 'Jurassic Park',
    author: 'Michael Crichton',
  },
];

const resolvers = {
  Query: {
    books: () => books,
    getPost: async (parent, args, context, info) => {
      try {
        return await getPost();
      } catch (error) {
        return null;
      }
    }
  },
  Mutation: {
    addPost: async (parent, args, context, info) => await createPost(args.data)
  }
}

export default resolvers;
