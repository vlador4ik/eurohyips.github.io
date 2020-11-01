 var curDate = document.getElementById('current_date'),
d = new Date(),
p = new Date(d.getTime() - 0 * 86400000),
year = new Date().getFullYear(),
monthA = 'January, February, March, April, May, Jun, July, August, September, October, November, December'.split(',');
curDate.innerHTML = (p.getDate() + ' ' + monthA[p.getMonth()] + ' ' + year );
