var secureRandom = require('secure-random');

module.exports.CST = 
{
      KEY: secureRandom(256, {type: 'Buffer'}),

      /*INVALID: function(req, res)
      {
        //req là AJAX/sockets...
        if (req.wantsJSON)
          return res.sendStatus(401)
        return res.redirect('/user/login')
      },*/
};

