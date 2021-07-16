var logo = 0;

    setInterval(animacao, 800);

    function animacao(){

    if(logo<1){

        logo++;
        document.getElementById('logo').style.opacity = '1';

    }else{

        logo = 0; 
        document.getElementById('logo').style.opacity = '0';

    }};

    $ = function(id) {
        return document.getElementById(id);
      }
      
      var show = function(id) {
          $(id).style.display ='block';
      }
      var hide = function(id) {
          $(id).style.display ='none';
      }