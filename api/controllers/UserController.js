/**
 * UserController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = 
{
	all: function (req, res) 
	{
		User.find()
			.then(function (users)
			{
				if(!users || users.length == 0) 
				{
					return res.send(
					{
						"success": false,
						"message": "No records found in DB"
					});
				}

				return res.send/*json*/(
				//{
					/*"success": true,
					"message": "Records fetched",
					"data":*/ users/*.pop().toJSON() //báo lỗi cú pháp nếu ko xóa {}, hình như 1.0 chỉ cần res.json*/
				//} nếu để sẽ xuất hiện node users
				);
			})
			.catch(function (err) 
			{
				//sails.log.debug(err);
				return res.send(
				{
					"success": false,
					"message": "Unable to fetch records" + err
				});
			});
			
	},
	
	find: function (req,res) 
	{
		var mail = req.param('mail');
		if (!mail) return res.send("No mail specified.", 500);
		
		User.find( {mail:mail} )
			.then(function (user) 
			{
				if(!user || user.length == 0) 
				{
					return res.send(
					{
						"success": false,
						"message": "No record found in DB"
					});
				}

				return res.send(
				{
					/*"success": true,
					"message": "Records fetched",
					"data":*/ user
				});
			})
			.catch(function (err) 
			{
				//sails.log.debug(err);
				return res.send(
				{
					"success": false,
					"message": "Unable to fetch records" + err
				});
			});
	},
			
	add: function (req, res) 
	{
		var param = 
		{
			mail: req.param('mail'),
			name: req.param('name'),
		}
		
		User.create(/*req.params.all()*/param)
			.then(function() 
			{
				return res.send(
				{
					"success": true,
					"message": "add success",
				});
			})
			.catch(function (err) 
			{
				//sails.log.debug(err);
				return res.send(
				{
					"success": false,
					"message": "add fail"
				});
			});
	},
	
	upd: function (req, res) 
	{
		var i_d = /*"ObjectId(''" +*/ req.param("id") /*+ "'')"*/;
		var name = req.param("name");
		var mail = req.param("mail");

		User.update( {id:i_d}, {mail:mail, name: name})
			.then(function (user)
			{
				return res.send(
				{
					"success": true,
					"message": "Record updated",
					"data": user
				});
			})
			.catch(function (err) {
				//sails.log.debug(err);
				return res.send(
				{
					"success": false,
					"message": "Unable to update record"
				});
			});
	},
	
	del: function (req, res) 
	{//req.body;
		var i_d = /*"ObjectId(''" +*/ req.param("id") /*+ "'')"*/;
//return res.redirect("http://localhost:1337?id="+i_d);
		User.destroy( {id:i_d} )
			.then(function (user)
			{
				return res.send(
				{
					"success": true,
					"message": "Record deleted successfully",
					"data": user
				});
			})
			.catch(function (err) {
				//sails.log.debug(err);
				return res.send(
				{
					"success": false,
					"message": "Unable to delete record"
				});
			});
	},
	
	action: function(req, res) { sails.log.info(req.body); }
	
};

