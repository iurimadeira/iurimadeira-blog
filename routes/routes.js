Router.configure({ layoutTemplate: "layout" });

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

  // Portfolio
  this.route('portfolio', {
    path: "/portfolio",
    template: "portfolio"
  });

  // About
  this.route('about', {
    path: "/about",
    template: "about"
  });

  // Contact
  this.route('contact', {
    path: "/contact",
    template: "contact"
  });

});

Router.onAfterAction(function(){
  document.title = CONSTANTS.PAGE_TITLE;
});