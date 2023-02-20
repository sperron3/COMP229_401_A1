import express from 'express';

import passport from 'passport';

//Import User Model
import User from '../models/user.js';

//Import Display Name Utility
import {UserDisplayName} from '../utils/index.js';

//Display Functions

//Login
export function DisplayLoginPage(req, res, next){
    if(!req.user){
        return res.render('index', {title: 'Login', 
                                    page: 'auth/login', 
                                    messages: req.flash('loginMessage'),
                                    displayName: UserDisplayName(req)
                                    });
    }
    return res.redirect('/contacts-list'); 
}

//Processing Functions
export function ProcessLoginPage(req, res, next){
    passport.authenticate('local', function(err, user, info){
        if(err){
            console.error(err);
            res.end(error);
        }
        if (!user){
            req.flash('loginMessage', 'Authentication Error');
            return res.redirect('/login');
        }
        req.logIn(user, function(err){
            if(err){
                console.error(err);
                res.end(err);
            }
            return res.redirect('/contacts-list');
        })
    })(req, res, next);
}

export function ProcessLogoutPage(req, res, next){
    req.logOut(function(err) {
        if(err){
            console.error(err);
            res.end(err);
        }

        console.log('Logout Successful');
    })
    res.redirect('/login');
}