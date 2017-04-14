/**
 * Created by Reyona on 2016/4/8.
 */

var mongoose=require('mongoose');
var Schema=mongoose.Schema;

var UserSchema=new Schema({
    name:{type:String,unique:true},
    password:{type:String,unique:false}
});
exports.User=mongoose.model('User',UserSchema);



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








