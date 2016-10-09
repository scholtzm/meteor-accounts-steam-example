Template.main.helpers({
  id: function() {
    return Meteor.user().profile.id;
  }
});

Template.main.events({
  'click #login': () => {
    Meteor.loginWithSteam();
  },
  'click #logout': () => {
    Meteor.logout();
  }
});
