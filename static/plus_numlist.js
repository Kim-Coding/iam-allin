function pl(x) {
    let num = document.getElementById(x);
    $.ajax({
        url: '/mynumlist/plus/',
        type: 'POST',
        data: {'num': num.name},
    });
    num.parentNode.removeChild(num);
}
function dl(x) {
    let num = document.getElementById(x);
    $.ajax({
        url: '/mynumlist/delete/',
        type: 'POST',
        data: {'num': num.name},
    });
    num.parentNode.removeChild(num);
}