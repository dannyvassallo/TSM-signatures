Template.sigForm.events({
  'keyup #nameInput': function(event){
    var myName = event.target.value;
    Session.set('myName', myName);
  },
  'keyup #positionInput': function(event){
    var myTitle = event.target.value;
    Session.set('myTitle', myTitle);
  },
  'keyup #officeNumberInput': function(event){
    var officeNumber = event.target.value;
    Session.set('officeNumber', officeNumber);
  },
  'keyup #mobileNumberInput': function(event){
    var mobileNumber = event.target.value;
    Session.set('mobileNumber', mobileNumber);
  },
  'keyup #faxNumberInput': function(event){
    var faxNumber = event.target.value;
    Session.set('faxNumber', faxNumber);
  },
  'keyup #skypeNameInput': function(event){
    var skypeName = event.target.value;
    Session.set('skypeName', skypeName);
  },
  'keyup #ichatNameInput': function(event){
    var ichatName = event.target.value;
    Session.set('ichatName', ichatName);
  },
  'keyup #linkedInInput': function(event){
    var linkedIn = event.target.value;
    Session.set('linkedIn', linkedIn);
  }
});
