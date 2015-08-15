// add scripts

$(document).on('ready', function() {


  // create list
  $('form').on('submit', function(event) {
    var ideaClass = null;
    event.preventDefault();
    var $ideaItem = $('input').val();
    // console.log($ideaItem.length);
    if (parseInt($ideaItem.length) > 10) {
      //set one class if it's greater then 10
      console.log($ideaItem.length);
      ideaClass = "long";
    } else {
      ideaClass = "short";
    }
    $('input:text').val('');


    $('#all-ideas').append('<div class="' + ideaClass + ' test make-me-draggable alsoDrag double-click-remove fixed"><p class="text-nowrap">' + $ideaItem + '</p></div>');

  });

  // remove items when they are clicked on
  $(this).on('dblclick', '.double-click-remove', function(event) {
    $(this).remove();
  });

  // make items draggable
  $(document).on("mouseenter", '.make-me-draggable', function(e){
    var item = $(this);
    if (!item.is('.ui-draggable')) {
         item.draggable({ containment: "#containment-wrapper", scroll: false });
    }
  });


  $('#left').on('click', function() {
    var leftArrow = $("<i class='glyphicon glyphicon-arrow-left make-me-draggable alsoDrag double-click-remove enlarge rotatable fixed'></i>");
    $('#arrow-landing').append($(leftArrow));
  });

  $('#right').on('click', function() {
    var rightArrow = $("<i class='glyphicon glyphicon-arrow-right make-me-draggable alsoDrag double-click-remove enlarge rotatable fixed'></i>");
    $('#arrow-landing').append($(rightArrow));
  });

  $('#up').on('click', function() {
    var upArrow = $("<i class='glyphicon glyphicon-arrow-up make-me-draggable double-click-remove enlarge rotatable fixed'></i>");
    $('#arrow-landing').append($(upArrow));
  });

  $('#down').on('click', function() {
    var downArrow = $("<i class='glyphicon glyphicon-arrow-down make-me-draggable double-click-remove enlarge rotatable fixed'></i>");
    $('#arrow-landing').append($(downArrow));
  });



});


