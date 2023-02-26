import { v4 as uuidv4 } from 'uuid';
import { Content, Entry, ID, Photo, Post, User, Location, Comment } from '../types';

// Generate random IDs using the uuid library
const generateID = (): string => uuidv4();

// Generate a random date within the past year
const generateDate = (): Date => {
    const now = new Date();
    const pastYear = now.getTime() - 365 * 24 * 60 * 60 * 1000;
    return new Date(pastYear + Math.random() * (now.getTime() - pastYear));
};

// Generate a random location
const generateLocation = (): Location => ({
    city: 'New York',
    country: 'USA',
    coordinates: {
        x: Math.random().toString(),
        y: Math.random().toString(),
    },
});

// Generate a random content object
const generateContent = (): Content => ({
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    images: [generateID(), generateID(), generateID()],
});

// Generate a random entry object
const generateEntry = (): Entry => ({
    id: generateID(),
    author: generateID(),
    likes: Math.floor(Math.random() * 100),
    comments: [],
    createdAt: generateDate(),
    updatedAt: generateDate(),
});

// Generate a random user object
const generateUser = (): User => ({
    id: generateID(),
    firstname: 'John',
    lastname: 'Doe',
    username: '@johndoe',
    birthdate: new Date('1990-01-01'),
    gender: 'male',
    avatar: generateID(),
    location: generateLocation(),
    phone: '555-555-5555',
    role: 'user',
    entries: {
        posts: [generateID(), generateID(), generateID()],
        comments: [generateID(), generateID(), generateID()],
        photos: [generateID(), generateID(), generateID()],
    },
    likes: {
        posts: [generateID(), generateID(), generateID()],
        comments: [generateID(), generateID(), generateID()],
        photos: [generateID(), generateID(), generateID()],
    },
    friends: [generateID(), generateID(), generateID()],
    following: [generateID(), generateID(), generateID()],
    followers: [generateID(), generateID(), generateID()],
});

// Generate a random post object
const generatePost = (): Post => ({
    ...generateEntry(),
    content: generateContent(),
});

// Generate a random comment object
const generateComment = (postID: ID): Comment => ({
    ...generateEntry(),
    content: generateContent(),
    post: postID,
});

// Generate a random photo object
const generatePhoto = (): Photo => ({
    ...generateEntry(),
    path: 'https://example.com/image.jpg',
});

// Generate an array of users
const users: User[] = Array.from({ length: 10 }, () => generateUser());

// Generate an array of posts
const posts: Post[] = Array.from({ length: 10 }, () => generatePost());

// Generate an array of comments
const comments: Comment[] = Array.from({ length: 10 }, () =>
    generateComment(posts[Math.floor(Math.random() * posts.length)].id)
);

// Generate an array of photos
const photos: Photo[] = Array.from({ length: 10 }, () => generatePhoto());

// Export the mock data
export { users, posts, comments, photos };
