// Global helper object
globalHelpers = {
  currentPath: function () {
    return Router.current().route._path;
  },
  isHome: function () {
    return globalHelpers.currentPath() === '/';
  }
}

Template.registerHelper('userEmail', function () {
  var user = Meteor.user();
  if (user && user.emails)
    return user.emails[0].address;
});

Template.registerHelper('screenSize', function () {
	return { height: $(window).height(), width: $(window).width() };
});

Template.registerHelper('isHome', function(){
  return globalHelpers.isHome();
});
