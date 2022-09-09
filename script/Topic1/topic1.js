String.prototype.tpl = function(o) { 
    var r = this ; 
    for (var i in o) { 
        r = r.replace(new RegExp("\\$"+i, 'g'),o[i])  
    } 
    return r 
}

var listItemTpl = `<li><a href='#' onclick='load("$url")'>$label</a></li>`;
var listItemTpl2 = `<li><a href='#' onclick='load2("$url")'>$label</a></li>`;

$(document).ready(main);

function main() {
    $.ajax({
        type: 'GET',
        dataType: 'json',
        url: 'filelist.json',
        success: function(d) {
            for (var i=0; i<d.length; i++) {
                // alert(d)
                $('#list').append(listItemTpl.tpl({url:d[i].url, label: d[i].label}))
                $('#list2').append(listItemTpl2.tpl({url:d[i].url, label: d[i].label}))
            }	

           
        },
        error: function() {
            alert('No document to show')
        }
    });
    
    
    $('#showasides').click(function() {
        if (this.checked)
             $('.person').addClass('text-aside')

            // $('.aside').addClass('text-aside')
        else
            $('.person').removeClass('text-aside')
    })
    $('#showspeeches').click(function() {
        if (this.checked) 
            $('.place').addClass('text-speeches')
            // $('q.speech').addClass('text-speeches')
        else
            $('.place').removeClass('text-speeches')
    })
    $('#showquotes').change(function() {
        if (this.checked) 
            $('.event').addClass('text-speeches')
            // $('q:not(.speech)').addClass('text-quotes')
        else
            $('.event').removeClass('text-quotes')
    })
}

function load(file) {
    $.ajax({
        method: 'GET',
        url: file,
        success: function(d) {
            // alert(file)
            $('#file').html(d)
            $('#title').html($('#file h4'))
            // $('.show').prop("checked", false)
            // addIds()
            // filltabs()
        },
        error: function() {
            alert('Could not load file '+file)
        }
    });
}

function load2(file) {
    $.ajax({
        method: 'GET',
        url: file,
        success: function(d) {
            // alert(file)
            $('#file2').html(d)
            $('#title2').html($('#file2 h4'))
            // $('.show').prop("checked", false)
            // addIds()
            // filltabs()
        },
        error: function() {
            alert('Could not load file '+file)
        }
    });
}

function addIds() {
    // addId('.aside','aside')
    // addId('q.speech', 'speech')
    // addId('q:not(.speech)', 'quote')


    addId('.person','aside')
    addId('.place', 'speech')
    addId('.event', 'quote')
}

function addId(what, prefix) {
    var id = '0'
    var elements = $(what); 
    for (var i=0; i<elements.length; i++) {
        elements[i].id = prefix + "-" + id++
    }
}
function filltabs(){
    // filltab("#file .aside","list-aside","#asides")
    // filltab("#file q.speech","list-speech","#speeches")
    // filltab("#file q:not(.speech)","list-quote","#quotes")
     filltab("#file .person","list-aside","#asides")
    filltab("#file .place","list-speech","#speeches")
    filltab("#file .event","list-quote","#quotes")
}

function filltab(what,style,where) {
    var list = `<li class="list $style"><a href="#" onclick="goto('$place')">$content</a></li>`
    var elements = $(what); 
    $(where+' ul').empty(); 
    for (var i=0; i<elements.length; i++) {
        $(where+' ul').append(list.tpl({
            style:style, 
            place: '#'+elements[i].id,
            content: elements[i].innerHTML
        }) )
    }
}

function goto(id) {
    var t = $(id)[0].offsetTop;
    $('body').animate({ scrollTop: t }, 200);
    $(id).addClass('animate');
    setTimeout(function(){
        $(id).removeClass('animate');
    },5000);
}