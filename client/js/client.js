if (Meteor.isClient) {
	Template.mainLayout.helpers({
		'currentYear': function(){
			return new Date().getFullYear();
		}
	});
}