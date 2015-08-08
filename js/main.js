// add scripts

$(document).on('ready', function() {


  // create list
  $('form').on('submit', function(event) {
    var toDoClass = null;
    event.preventDefault();
    var $toDoItem = $('input').val();
    // console.log($toDoItem.length);
    if (parseInt($toDoItem.length) > 10) {
      //set one class if it's greater then 10
      console.log($toDoItem.length);
      toDoClass = "long";
    } else {
      toDoClass = "short";
    }
    $('input:text').val('');


    $('#all-ideas').append('<div class="' + toDoClass + ' test make-me-draggable double-click-remove fixed"><p class="text-nowrap">' + $toDoItem + '</p></div>');

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

    // $( "#draggable5" ).draggable({ containment: "parent" });

  $('#left').on('click', function() {
    var leftArrow = $("<i class='glyphicon glyphicon-arrow-left make-me-draggable double-click-remove enlarge rotatable fixed'></i>");
    $('#arrow-landing').append($(leftArrow));
  });

  $('#right').on('click', function() {
    var rightArrow = $("<i class='glyphicon glyphicon-arrow-right make-me-draggable double-click-remove enlarge rotatable fixed'></i>");
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

    // var params = {
    //         // Callback fired on rotation start.
    //         start: function(event, ui) {
    //         },
    //         // Callback fired during rotation.
    //         rotate: function(event, ui) {
    //         },
    //         // Callback fired on rotation end.
    //         stop: function(event, ui) {
    //         },
    //         // Set the rotation center at (25%, 75%).
    //         rotationCenterX: 25.0,
    //         rotationCenterY: 75.0
    //     };
    //     $('.rotatable').rotatable(params);

});


