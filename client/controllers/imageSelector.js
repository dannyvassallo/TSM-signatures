Template.imageSelector.events({
  'click .image-type': function(event){
    var el = event.target
    var imagePath = $(el).data('image');
    $('#sigImage').attr('src', imagePath);
  }
});
