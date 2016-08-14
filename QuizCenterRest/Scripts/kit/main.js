$(function () {
    $('.globe').on('click', function () {
        $('.icons').slideToggle();
    })
});

function setLinkLine(linkArrey, hrefArrey)
{
    var div = $('#linkLine');
    div.empty();
    for (var i = 0; i < linkArrey.length; ++i) {
        var link = "<a href='#" + hrefArrey[i] + "'>" + linkArrey[i] + "</a> / ";
        div.append(link);
    }
}

