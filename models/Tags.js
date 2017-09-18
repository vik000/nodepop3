const mongoose = require('mongoose');

// Tag Schema
const tagSchema = mongoose.Schema({
	name:{
		type: String,
		required: true
	}
	//, create_date:{
	// 	type: Date,
	// 	default: Date.now
	// }
});

const Tag = module.exports = mongoose.model('Tag', tagSchema);

// Get Genres
module.exports.getTags = (callback, limit) => {
	Tag.find(callback).limit(limit);
}

// Add Genre
module.exports.addTag = (tag, callback) => {
	Tag.create(tag, callback);
}

// Update Genre
module.exports.updateTag = (id, tag, options, callback) => {
	var query = {_id: id};
	var update = {
		name: tag.name
	}
	Tag.findOneAndUpdate(query, update, options, callback);
}


// Delete Genre
module.exports.removeTag = (id, callback) => {
	var query = {_id: id};
	Tag.remove(query, callback);
}
