//return the user display name from session
export function UserDisplayName(req){
    if(req.user){
        return req.user.displayName;
    }
    return '';
} 

export function AuthGuard(req, res, next){
    if(!req.isAuthenticated()){
        return res.redirect('/login')
    }
    next();
}