
$('.page .singer ul li').on('click', function () {
    $(this).children('div').slideToggle(300);
    $(this).children('h2').toggleClass('collapsed');
    $('.page .singer ul li div').not($(this).children('div')).slideUp(300);
    $('.page .singer ul li h2').not($(this).children('h2')).addClass('collapsed');
});

$('.bar').on('click', function () {
    $('aside .main').animate({
        'width': 'show'
    }, 400);

    $('aside').css('background-color', 'rgba(255, 0, 0, 0.748)');

    setTimeout(() => {
        $(this).addClass('stop');
    }, 400);
});


$('.page aside .main .box span').on('click', function () {
    $('aside .main').animate({
        'width': 'hide'
    }, 400);

    $('aside').css('background-color', 'transparent');

    $('.bar').removeClass('stop');
});


const aside = document.querySelector('aside');
const quit = document.querySelector('.page aside .main .box span');

document.addEventListener('click', function (event) {
    if (event.target != aside && !aside.contains(event.target)) {
        quit.click();
    }
});

const bar = document.querySelector('.bar');
const join = document.querySelector('.join');

window.addEventListener('scroll', function () {

    if (this.scrollY > bar.offsetTop) {
        bar.classList.replace('text-white', 'text-black')
    }
    else {
        bar.classList.replace('text-black', 'text-white');
    }

    if (this.scrollY > join.offsetTop - this.innerHeight + bar.offsetTop) {
        $('.bar').fadeOut(200);
    }
    else {
        $('.bar').fadeIn(200);
    }
});


function dateDiff(date1, date2) {
    let temp = [];
    let num = [24, 60, 60, 60];
    let d = (date2 - date1) / (1000 * 60 * 60 * 24);
    for (let i = 0; i < 4; i++) {
        temp.push(parseInt(d));
        d = (d - parseInt(d)) * num[i];
    }

    return temp;
}


let partyDate = new Date('2025-03-03T00:00:01Z');
const d = ['D', 'H', 'M', 'S']
const row = $('.page .counter .row');

for (let i = 0; i < row.children().length; i++) {
    row.children().eq(i).children().eq(0).html(dateDiff(new Date(), partyDate)[i] + ` ${d[i]}`);
}



setInterval(() => {

    const date = dateDiff(new Date(), partyDate);

    for (let i = 0; i < row.children().length; i++) {
        row.children().eq(i).children().eq(0).html(dateDiff(new Date(), partyDate)[i] + ` ${d[i]}`);
    }

    if(date[0] == 0 && date[1] == 0 && date[2] == 0 && date[3] == 0){
        partyDate.setFullYear(partyDate.getFullYear()+1); 
    }
    

}, 1000);


/* 

1day
2h
33m
54s


*/