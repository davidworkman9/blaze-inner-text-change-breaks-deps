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
      document.getElementById('greeting').title = $('input').val();
      document.getElementById('greeting').innerText = $('input').val();
      $('input').val('');
    }
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
