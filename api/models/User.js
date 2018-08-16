/**
 * User.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

//module.exports = 
var User =
{
	/*_id:
		{
			type: 'number',
			primaryKey: true,
		},*/
		/*mail: 
		{
            type: 'string',
			primaryKey: true,
        },*/
		
  	attributes: 
	{
		//createdAt: false,
		//updatedAt: false,
		
		//copy model.js
		id: { type: 'number', autoIncrement: true, },
		//dontUseObjectIds: 'true'
		
        
		mail: 
		{
            type: 'string',
        },
		
        name:
		{
            type: 'string',
        },
		
		//xóa default attributes tạo bởi sails ### add new mới tháy kq ###
		//cách 1: overwrite 
		/*toJSON: function ()
		{
		  var obj = this.toObject();
		  delete obj.createdAt;
		  delete obj.updatedAt;
		  //delete obj._id;
		  return obj;
		}
		sails 1.0 thay thế bằng customToJSON và phải đặt trong "methods:"
		*/
		
	},
	
	methods:
	{
		//customToJSON: function ()
		//{
		//	return _.omit(this, [/*'createdAt'*/, 'name'])
		//},
		
		//cách 2
		/*createdAt: function ()
		{
		  var obj = this.toObject();
		  delete obj.createdAt;
		  //delete obj.updatedAt;
		  //delete obj._id;
		  return obj;
		}*/
	}
};
module.exports = User;