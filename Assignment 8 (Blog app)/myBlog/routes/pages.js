const express = require('express');
const router = express.Router();
const blogpost = require('../models/blogpost');

//Show All Blog Posts
router.get('/blog', async(req,res)=>{

    try{
        const blogposts = await blogpost.find();
        // console.log(blogposts);
        res.render('blog/index', {blogposts});
    }
    catch(e){
        console.log(e.message);
        req.flash('error','Cannot Find Posts');
        res.redirect('/error');
    }
})

//Get form for creating a New Blog Post
router.get('/blog/new',(req,res)=>{
    
    res.render('blog/new');
})

//Create a New Blog Post
router.post('/blog', async(req,res)=>{

    try{
        await blogpost.create(req.body.post);
        req.flash('success','New Post Created Successfully')
        res.redirect('/blog');
    }
    catch(e){
        console.log(e.message);
        req.flash('error','Cannot Create New Post, Something went wrong!!')
        res.redirect('/error');
    }
}) 

//Show a particular Blog Post
router.get('/blog/:id',async(req,res)=>{
    
    try{
        const post = await blogpost.findById(req.params.id);
        res.render('blog/show', {post});
    }
    catch(e){
        console.log(e.message);
        req.flash('error','Unable to find the Post');
        res.redirect('/error');
    }
})

//getting form for Editing Blog Post
router.get('/blog/:id/edit', async(req,res)=>{

    try{
        const post = await blogpost.findById(req.params.id);
        res.render('blog/edit', {post});
    }
    catch(e){
        console.log(e.message);
        req.flash('error','Failed To Edit This Post');
        res.redirect('/error');
    }
})

//updating the Blog Post
router.patch('/blog/:id', async(req,res)=>{

    try{
        await blogpost.findByIdAndUpdate(req.params.id,req.body.post);
        req.flash('success','Post updated successfully');
        res.redirect(`/blog/${req.params.id}`);
    }
    catch(e){
        console.log(e.message);
        req.flash('error','Failed to Update the Post');
        res.redirect('/error');
    }
})

//Delete a Blog Post
router.delete('/blog/:id', async(req,res)=>{

    try{
        await blogpost.findByIdAndDelete(req.params.id);
        res.redirect('/blog');
    }
    catch(e){
        console.log(e.message);
        req.flash('error','Failed to Delete the Post');
        res.redirect('/error');
    }
})

//error Page
router.get('/error',(req,res)=>{
    res.render('error');
})

module.exports = router;