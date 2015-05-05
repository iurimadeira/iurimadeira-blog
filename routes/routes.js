Router.configure({ layoutTemplate: "mainLayout" });

Router.map(function () {

	// Posts Index
  this.route('indexPosts', {
    path: "/",
    template: "indexPosts",
    data: function () {
    	return Posts.find({});
  	}
  });

  // Posts Show
  this.route('showPosts', {
    path: "/posts/:postUrl",
    template: "showPosts",
    data: function () {
    	return Posts.findOne({postUrl: this.params.postUrl});
  	}
  });

});

Router.onAfterAction(function(){
  document.title = CONSTANTS.PAGE_TITLE;
});