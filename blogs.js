class BlogUser {
  /**
   * 
   * @param {string} username 
   * @param {string} fullName 
   */
  constructor(username, fullName) {
    this.username = username;
    this.fullName = fullName;
    this.posts = [];
  }

  /**
   * Create a new post
   * @param {string} title - The title of the post
   * @param {string} content - The content of the post
   */
  createPost(title, content) {
    const newPost = new BlogPost(title, content, this.username);
    this.posts.push(newPost);
    console.log(`New post created by ${this.username}: "${newPost.title}"`);
  }

  /**
   * Edit an existing post
   * @param {number} postId - The ID of the post to edit
   * @param {string} title - The new title of the post
   * @param {string} content - The new content of the post
   */
  editPost(postId, title, content) {
    const post = this.posts.find(post => post.id === postId);
    if (post) {
      post.title = title;
      post.content = content;
      console.log(`Post "${post.title}" by ${this.username} has been edited.`);
    } else {
      console.log(`Post with ID ${postId} not found.`);
    }
  }

  /**
   * Delete the last post
   * @param {number} postId - The ID of the post to delete
   */
  deletePost(postId) {
    const postIndex = this.posts.findIndex(post => post.id === postId);
    if (postIndex !== -1) {
      const deletedPost = this.posts.splice(postIndex, 1)[0];
      console.log(`Post "${deletedPost.title}" by ${this.username} has been deleted.`);
    } else {
      console.log(`Post with ID ${postId} not found.`);
    }
  }

  /**
   * Display all posts by the user
   */
  displayPosts() {
    if (this.posts.length === 0) {
      console.log(`${this.username} has no posts.`);
    } else {
      console.log(`Posts by ${this.username}:`);
      this.posts.forEach(post => {
        console.log(`- Title: ${post.title}`);
        console.log(`  Content: ${post.content}`);
        console.log(`  Author: ${post.author}`);
        console.log(`  Created At: ${post.createdAt}`);
        console.log(`  Post ID: ${post.id}`);
      });
    }
  }
}

class BlogPost {
  static currentId = 0; // Static property to keep track of the post ID
  
  /**
   * 
   * @param {string} title 
   * @param {string} content 
   * @param {string} author 
   */
  constructor(title, content, author) {
    this.title = title;
    this.content = content;
    this.author = author;
    this.createdAt = new Date();
    this.id = ++BlogPost.currentId; // Assign a unique ID to each post
  }
}

// Create users
const user1 = new BlogUser('johnDoe', 'John Doe');
const user2 = new BlogUser('janeSmith', 'Jane Smith');

// Users create posts
user1.createPost('My First Post', 'This is the content of my first post.');
user1.createPost('My Second Post', 'This is the content of my second post.');
user2.createPost('Hello World', 'Hello everyone, this is my first blog post!');

// Display posts
user1.displayPosts();
user2.displayPosts();

// Edit posts
user1.editPost(1, 'My Updated First Post', 'This is the updated content of my first post.');

// Delete posts
user1.deletePost(2);

// Display posts again
user1.displayPosts();
