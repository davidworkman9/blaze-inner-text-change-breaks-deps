if (Meteor.isClient) {
  Session.setDefault('greeting', 'hello world!');
  Template.hello.greeting = function () {
    return Session.get('greeting');
  };

  Template.hello.events({
    'click #session': function (e) {
      Session.set('greeting', $('input').val());
      $('input').val('');
    },
    'click #jquery': function () {
      $('h1').text($('input').val());
      $('input').val('');
    }
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
