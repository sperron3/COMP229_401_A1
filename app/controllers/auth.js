import express from 'express';

import passport from 'passport';

//Import User Model
import User from '../models/user.js';

//Display Functions

//Login
export function DisplayLoginPage(req, res, next){
    if(!req.user){
        return res.render('index', {title: 'Login', 
                                    page: 'auth/login', 
                                    messages: req.flash('loginMessage')});
    }
    return res.redirect('auth/login'); 
}

export function ProcessLoginPage(req, res, next){
    passport.authenticate('local', function(err, user, info){
        if(err){
            console.error(err);
            res.end(error);
        }
        if (!user){
            req.flash('loginMessage', 'Authentication Error');
        }
        req.logIn(user, function(err){
            if(err){
                console.error(err);
                res.end(err);
            }
            return res.redirect('/contactList');
        })
    })(req, res, next);
}

export function ProcessLogoutPage(req, res, next){
    req.logOut(function(err) {
        if(err){
            console.error(err);
            res.end(err);
        }

        console.log('user logged out successfully');
    })

    res.redirect('/login')
}