Template.signature.helpers({
  'myName': function(){
    return Session.get('myName');
  },
  'myTitle': function(){
    return Session.get('myTitle');
  },
  'titleInfo':function(){
    var name = Session.get('myName');
    var title = Session.get('myTitle');
    checkLength = (name.length > 1 && title.length > 1);
    if(checkLength){
      return true;
    } else {
      return false;
    }
  },
  'officeNumber': function(){
    return Session.get('officeNumber');
  },
  'mobileNumber': function(){
    return Session.get('mobileNumber');
  },
  'faxNumber': function(){
    return Session.get('faxNumber');
  },
  'skypeName': function(){
    return Session.get('skypeName');
  },
  'ichatName': function(){
    return Session.get('ichatName');
  },
  'linkedIn': function(){
    return Session.get('linkedIn');
  },
});
