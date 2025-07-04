const rootRouter = require('express').Router();
const userRouter = require('./userRouter');
const postRouter = require("./posts");
const { authorize } = require("../middlewares/auth");

rootRouter.use('/users',authorize(['admin', 'member']), userRouter);

rootRouter.use('/posts' , authorize(['admin', 'member']), postRouter);

module.exports = rootRouter;
