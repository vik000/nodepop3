"use strict";

const mongoose = require('mongoose');

//definie un esquema:
const tagSchema = mongoose.Schema({
  name:{
    type:String,
}});

//Añadimos método estático:
// spotSchema.statics.list=function(filter,limit,skip,callback){ //list es el nombre que le damos.
//   const query= Spot.find(filter);
//   query.skip(skip);
//   query.limit(limit);
//   query.exec(callback);//ejecutamos la consulta en esta línea
// };

//crear el modelo:
var Tag = module.exports = mongoose.model('Tag',tagSchema); //en teoría no hace falta hacer =module.exports

//Función get para tags:
module.exports.getTag=function(callback,limit){
  Tag.find(callback);
}

//Función para add tags:
module.exports.addTag=function(callback,tag){
  Tag.save(tag, callback);
}
