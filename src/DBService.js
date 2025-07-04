const fs = require('fs');
const path = require('path');

class DBService {
    constructor() {
        this.token = ""
        this.users = [];
        this.posts = [];
        this.loadStateFromDisk();
        this.perister = setInterval(()=> {
            this.persist();
        }, 5000);
    }

    persist() {
        const filePath = path.join(__dirname, 'data.json');
        const data = {
            users: this.users,
            posts: this.posts,
            token : this.token
        }
        const serializedData = JSON.stringify(data);
        fs.writeFileSync(filePath, serializedData);
    }

    loadStateFromDisk() {
        try {
            const filePath = path.join(__dirname, 'data.json');
            const persistedData = fs.readFileSync(filePath, 'utf-8');
            const data = JSON.parse(persistedData);
            this.users = data.users;
            this.posts = data.posts;
            this.token = data.token;
        } catch(e) {
            console.log("can't restore data, data file not found");
        }
    }

    // Users
    addUser(user){
        // validate user object before pushing
        this.users.push(user);
    }
    updateUser (user) {
        const existingUserIndex = this.users.findIndex(u => u.id === user.id);
        if (existingUserIndex < 0) throw new Error("user not found with the id");
        this.users[existingUserIndex] = user;
    }
    removeUser(userId){
        this.users = this.users.filter(user => user.id.toString() !== userId.toString());
    }

    getUsers(){
        return this.users;
    }

    getUserById(userId) {
        const user = this.users.find(user => user.id.toString() === userId.toString());
        return user;
    }

    // posts
    addPost(post){
        this.posts.push(post);
    }

    getPosts(){
        return this.posts;
    }

    removePost(postId){
        // Fixed: comparing post.id instead of post.postId
        this.posts = this.posts.filter(post => post.id.toString() !== postId.toString());
    }
} 

const dbService = new DBService();

module.exports = dbService;