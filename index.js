 var curDate = document.querySelector('.current_date'),
d = new Date(),
p = new Date(d.getTime() - 0 * 86400000),
year = new Date().getFullYear(),
monthA = 'January, February, March, April, May, Jun, July, August, September, October, November, December'.split(',');
curDate.innerHTML = (p.getDate() + ' ' + monthA[p.getMonth()] + ' ' + year );
    // let elements = document.querySelector('.added_menu');
    // this.classList.toggle("openMenu");
    var dropdown = document.getElementsByClassName("added_menu");
    var i;

    for (i = 0; i < dropdown.length; i++) {
        dropdown[i].addEventListener("click", function() {
            this.classList.toggle("openMenu");
            var dropdownContent = this.nextElementSibling;
            // if (dropdownContent.style.display === "block") {
            //     dropdownContent.style.display = "none";
            // } else {
            //     dropdownContent.style.display = "block";
            // }
        });
    }

