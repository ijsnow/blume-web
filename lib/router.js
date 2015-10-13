/*
 *    Later I will have a base controller for pages that can be used when not logged in
 *    and a base controller for logged in users
 */
 AdminController = RouteController.extend({
  onBeforeAction: function() {
    user = Meteor.user();
    if(!Roles.userIsInRole(user, ['admin'])) {
      this.redirect('home');
      this.stop();
    }
    this.next();
  }
} );

// LoggedOutController = RouteController.extend({
//
// } );

MasterAdminController = RouteController.extend({
  onBeforeAction: function() {
    user = Meteor.user();
    if(!Roles.userIsInRole(user, ['masterAdmin'])) {
      this.redirect('home');
      this.stop();
    }
    this.next();
  }
} );

Router.configure({
  layoutTemplate: 'loggedInLayout'
} );

Router.map(function() {

  this.route('home', {
    path: '/' ,
    template: 'home',
    layoutTemplate: 'landingLayout'
  } );

  this.route('demo',{
    path: '/Demo',
    template: 'units',
    layoutTemplate: 'layout',
    waitOn: function () {
      return Meteor.subscribe('demoUnits');
    },
    action: function () {
      if (this.ready())
        this.render();
    }
  } );

  this.route('signIn',{
    path: '/SignIn',
    template: 'signInForm',
    layoutTemplate: 'layout'
  } );

  this.route('register',{
    path: '/Register',
    template: 'registerForm',
    layoutTemplate: 'layout'
  } );

  this.route('Packets', {
    path: '/Packets',
    template: 'packets',
    controller: 'AdminController',
    waitOn: function () {
      return Meteor.subscribe('packets');
    },
    action: function () {
      if (this.ready())
        this.render();
    }
  } );

  this.route('unit', {
    path: 'unit/:unitId',
    template: 'units',
    controller: 'AdminController',
    waitOn: function () {
      return Meteor.subscribe('getUnit', this.params.unitId);
    },
    data: function () {
      if (this.ready()) {
        return {
          currentUnitId: this.params.unitId
        };
      }
    },
    action: function () {
      if (this.data()) {
        this.render();
      }
    }
  } );

  this.route('manageUsers', {
    template: 'manageUsers',
    path: '/ManageUsers',
    controller: 'MasterAdminController',
    waitOn: function() {
      Meteor.subscribe('allusers');
    },
    action: function () {
      if (this.ready())
        this.render();
    }
  } );

  this.route('emails', {
    template: 'emailsList',
    path: '/Emails',
    controller: 'AdminController',
    waitOn: function () {
      return Meteor.subscribe('newsLetterEmails');
    },
    action: function () {
      if (this.ready())
        this.render();
    }
  } );
} );
