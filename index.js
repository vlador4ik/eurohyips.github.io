
 setInterval(function() {
     let curDate = document.querySelector('.current_date'),
         d = new Date(),
         p = new Date(d.getTime() - 0 * 86400000),
         year = d.getFullYear(),
         hours = d.getHours(),
         minutes = d.getMinutes(),
         sec = d.getSeconds(),
         monthA = 'January, February, March, April, May, Jun, July, August, September, October, November, December'.split(',');
     if (hours < 10) {
         hours = '0' + hours;
     }
     if (minutes < 10) {
         minutes = '0' + minutes;
     }
     if(sec < 10) {
         sec = '0' + sec;
     }
     curDate.innerHTML = (p.getDate() + ' ' + monthA[p.getMonth()] + ', ' + year + ' ' + hours + ' : ' + minutes + ' : ' + sec);
 }, 1000);


    var dropdown = document.getElementsByClassName("added_menu");
    var i;

    for (i = 0; i < dropdown.length; i++) {
        dropdown[i].addEventListener("click", function() {
            this.classList.toggle("openMenu");
        });
    }
 document.addEventListener('scroll', function() {
     var mainMenu = document.querySelector('.main_menu');
     var yOffset = window.pageYOffset;
     if (yOffset > 600) {
         mainMenu.classList.add('full_width')
     } else {
         mainMenu.classList.remove('full_width')
     }
 });



