/**
 * Created by Reyona on 2016/4/8.
 */

var mongoose=require('mongoose');
var Schema=mongoose.Schema;

var ProbdataSchema=new Schema({
    "_id" : {type:Schema.ObjectId,unique:true},
    "name" : {type:String,unique:false},
    "L" : {type:String,unique:false},
    "R" : {type:String,unique:false},
    "key" : {type:String,unique:false},
    "data" : {type:String,unique:false},
    "data extraction from" : {type:String,unique:false},
    "data extraction to" : {type:String,unique:false},
    "execution time" : {type:String,unique:false},
    "ignore" : {type:Boolean,unique:false},
    "cleaned" : {type:Boolean,unique:false},
    "specFileName" : {type:String,unique:false},
    "isReprocess" : {type:Boolean,unique:false},
    "updatedAt" : {type:Date,unique:false},
    "createdAt" : {type:Date,unique:false},
    "logs" : {type:String,unique:false},
    "__v" : {type:Number,unique:false}
});
exports.Probdata=mongoose.model('Probdata',ProbdataSchema);



/*
var UserDao=function(UserModel){

    this.login=function(userName,password){//if exsit return true
        return UserModel.find({name:userName,password:password},function(err,result){
            if(err){
                console.log(err);
                return false;
            }
            return result!=null;
        });
    };

    this.findAll=function(){
        return UserModel.find({},function(err,result){
            if(err){
                console.log(err);
            }
            return result;
        });
    };

    this.insert=function(newUsers){
        UserModel.create(newUsers,function(err){
            if(err){
                console.log(err);
            } else {
                console.log('Insert: '+JSON.stringify(newUsers));
            }
        });
    };

    this.remove=function(criteria){
        UserModel.remove(criteria,function(err){
            if(err){
                console.log(err);
            } else {
                console.log('Remove: '+JSON.stringify(criteria));
            }
        });
    };

    this.update=function(criteria,update){
        var options={upsert:true};
        UserModel.update(criteria,update,options,function(err){
            if(err){
                console.log(err);
            } else {
                console.log('Update: '+JSON.stringify(update));
            }
        });
    };

};

module.exports=UserDao;
*/








