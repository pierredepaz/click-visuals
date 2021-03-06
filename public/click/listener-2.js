var socket = io.connect('localhost');

var virus = false;
var posture = false;

socket.on('connect', function(){
  console.log('visuals socket connected!');
});

socket.on('switch-scene', function(data){
    state = data.scene;
    console.log('switching scene to',data.scene);

    switch(state){
      case 'virus':
        setup_virus();
        break;
      case 'posture':
        setup_posture();
        break;
      case 'expression':
        setup_expression();
        break;
      case 'flicker':
        setup_flicker();
        break;
      case 'transition':
        setup_transition();
        break;
      default:
        console.log('no state selected');
        break;
    }
});

//SWIPE CONTROL
socket.on('title', function(data){
    t_title(data.index);
});

socket.on('swipe', function(data){
    t_swipe(data.index, data.direction);
});


//FLICKER CONTROL
socket.on('flicker-update-columns', function(data){
  if(data.display == 2)
    f_updateColumns(data.columns);
});

socket.on('flicker-update-rows', function(data){
  if(data.display == 2)
    f_updateRows(data.rows);
});

socket.on('flicker-update-frequency', function(data){
  if(data.display == 2)
    f_updateFrequency(data.freq);
});

socket.on('flicker-update-speed', function(data){
  if(data.display == 2)
    f_updateSpeed(data.speed);
});

socket.on('flicker-update-offset', function(data){
  if(data.display == 2)
    f_updateOffset(data.offset);
});

socket.on('flicker-toggle-chromatic', function(data){
  if(data == 2)
    f_toggleChromatic();
});



//VIRUS CONTROL
socket.on('virus-add-individual', function(data){
  if(data == 2)
    add_virus();
});

socket.on('virus-update-speed-2', function(data){
  if(data.display == 2)
    update_virus_speed(data.speed);
});



//POSTURE CONTROL
socket.on('posture-set', function(data){
  // if(data.display == 2)
    posture_set(data.posture);
});

socket.on('posture-reset', function(display){
  // if(display == 2)
    posture_reset();
});

socket.on('posture-shadow', function(display){
  // if(display == 2)
    posture_shadow();
});

socket.on('posture-unshadow', function(display){
  // if(display == 2)
    posture_unshadow();
});

socket.on('posture-dance', function(display){
  // if(display == 2)
    posture_dance();
});



//EXPRESSION CONTROL
socket.on('expression-update-speed', function(data){
  if(data.display == 2)
    expression_updateSpeed(data.speed);
});

socket.on('expression-set', function(data){
  if(data.display == 2)
    expression_set(data.expression);
});

socket.on('expression-toggle', function(data){
  if(data == 2)
    toggleMoveFPoints();
});
