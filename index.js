var fetchCommentsPage = require('youtube-comment-api');

var getCommentsStream = require('./lib/get-comments-stream');
var filterCommentsStream = require('./lib/filter-comments-stream');
var limitCommentsStream = require('./lib/limit-comments-stream');
var mockCommentsStream = require('./lib/mock-comments-stream');

module.exports = function (videoId) {
	return getCommentsStream(videoId, fetchCommentsPage);
};

module.exports.get = module.exports;
module.exports.filter = filterCommentsStream;
module.exports.limit = limitCommentsStream;
module.exports.mock = mockCommentsStream;
