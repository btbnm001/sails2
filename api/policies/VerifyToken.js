var jwt = require('jsonwebtoken')
var CST = sails.config.CST;

module.exports = function(req, res, next)
{
    if (req.signedCookies.sailsjwt)
    {
        return jwt.verify(req.signedCookies.sailsjwt, CST.KEY, async function(err, payload) 
        {
            if (err || !payload.i_d) 
                return _invalid(req, res)

            /*var user = await User.findOne(payload.i_d)
            if (!user) 
                return _invalid(req, res)
            */
            //req.user = user
            return next()
        })
    }

    if (req.header('authorization')) 
    {
        var token = req.header('authorization').split('Bearer ')[1]
        if (!token)
            return _invalid(req, res)
        
        return jwt.verify(token, CST.KEY, async function(err, payload)
        {
            if (err || !payload.i_d) 
                return _invalid(req, res)

            /*var user = await User.findOne(payload.i_d)
            if (!user) 
                return _invalid(req, res)
            */
            //req.user = user
            return next()
        })
    }
    
    return _invalid(req, res)
}

function _invalid(req, res)
  {
    //req là AJAX/sockets...
    if (req.wantsJSON)
      return res.sendStatus(401)
    return res.redirect('/user/loginPage')
  }