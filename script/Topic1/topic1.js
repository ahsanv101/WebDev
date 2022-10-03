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
    
    $('#peop').click(function() {
        if (this.checked)
            //  $('.person').addClass('text-aside')

            $('.people').addClass('text-people')
        else
            $('.people').removeClass('text-people')
            // $('.person').removeClass('text-aside')
    })


    $('#plac').click(function() {
        if (this.checked) 
        $('.place').addClass('text-place')
        // $('q.speech').addClass('text-speeches')
    else
        // $('q.speech').removeClass('text-speeches')
        $('.place').removeClass('text-place')
    })

    $('#eve').change(function() {
        if (this.checked) 
            $('.event').addClass('text-event')
            // $('q:not(.speech)').addClass('text-quotes')
        else
            // $('q:not(.speech)').removeClass('text-quotes')
            $('.event').removeClass('text-event')
    })

    $('#conce').change(function() {
        if (this.checked) 
            $('.concept').addClass('text-concept')
            // $('q:not(.speech)').addClass('text-quotes')
        else
            // $('q:not(.speech)').removeClass('text-quotes')
            $('.concept').removeClass('text-concept')
    })

    $('#oppi').change(function() {
        if (this.checked) 
            $('.opinion').addClass('text-opinion')
            // $('q:not(.speech)').addClass('text-quotes')
        else
            // $('q:not(.speech)').removeClass('text-quotes')
            $('.opinion').removeClass('text-opinion')
    })

    


    // $('#showasides').click(function() {
    //     if (this.checked)
    //         //  $('.person').addClass('text-aside')

    //         $('.aside').addClass('text-aside')
            
    //     else
    //         $('.aside').removeClass('text-aside')
    //         // $('.person').removeClass('text-aside')
    // })
    // $('#showspeeches').click(function() {
    //     if (this.checked) 
    //         // $('.place').addClass('text-speeches')
    //         $('q.speech').addClass('text-speeches')
    //     else
    //         $('q.speech').removeClass('text-speeches')
    //         // $('.place').removeClass('text-speeches')
    // })
    // $('#showquotes').change(function() {
    //     if (this.checked) 
    //         // $('.event').addClass('text-speeches')
    //         $('q:not(.speech)').addClass('text-quotes')
    //     else
    //         $('q:not(.speech)').removeClass('text-quotes')
    //         // $('.event').removeClass('text-quotes')
    // })
}

function load(file) {
    $.ajax({
        method: 'GET',
        url: file,
        success: function(d) {
            // alert(file)
            $('#file').html(d)
            $('#title').html($('#file h4'))
            $('.show').prop("checked", false)
            addIds()
            filltabs()
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
            $('.show').prop("checked", false)
            addIds()
            filltabs2()
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

    // addId('.person','aside')
    // addId('.place', 'speech')
    // addId('.event', 'quote')

    addId('.people','people')
    addId('.place', 'place')
    addId('.event', 'event')
    addId('.concept', 'concept')
    addId('.opinion', 'opinion')

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
    
    
    // filltab("#file .person","list-aside","#asides")
    // filltab("#file .place","list-speech","#speeches")
    // filltab("#file .event","list-quote","#quotes")

   

    filltab("#file .people","list-people","#peoples")
    filltab("#file .place","list-place","#places")
    filltab("#file .event","list-event","#events")
    filltab("#file .concept","list-concept","#concepts")
    filltab("#file .opinion","list-opinion","#opinions")
}

function filltabs2(){
    // filltab("#file .aside","list-aside","#asides")
    // filltab("#file q.speech","list-speech","#speeches")
    // filltab("#file q:not(.speech)","list-quote","#quotes")
    
    // filltab("#file2 .person","list-aside","#asides2")
    // filltab("#file2 .place","list-speech","#speeches2")
    // filltab("#file2 .event","list-quote","#quotes2")



    filltab("#file2 .people","list-people2","#peoples2")
    filltab("#file2 .place","list-place2","#places2")
    filltab("#file2 .event","list-event2","#events2")
    filltab("#file2 .concept","list-concept2","#concepts2")
    filltab("#file2 .opinion","list-opinion2","#opinions2")
}


function filltab(what,style,where) {
    var list = `<li class="list $style"><a href="#" onclick="goto('$place','$content')">$content</a></li>`
    var elements = $(what); 
    $(where+' ul').empty(); 

    const counts = {};
    
     for (var i=0; i<elements.length; i++) {
        var el = elements[i].innerHTML;
        let c = el.toUpperCase();
        elements[i].innerHTML = c;
        var el2 = elements[i].innerHTML;
        
        var el3 = elements[i].id;

        
        
        counts[el2] = counts[el2] ? counts[el2].concat(['#'+el3]): new Array('#'+el3);       
        // console.log(elements[i].innerHTML,elements[i].id)

    }

    console.log(counts);

    for (let x in counts) {
       // console.log);
       // console.log(counts)
         $(where+' ul').append(list.tpl({
            style:style, 
            place: counts[x],
            content: (x + ": "+ counts[x].length)
        }) )
        }

    // for (var i=0; i<elements.length; i++) {
       
    // }
}



var data = new Array();
console.log(data);


function goto(id,con) {

    if (data.length!= 0)
    {
       if (con == data[data.length -1])
           { 
               const myArray = id.split(",");
               
               data.push(con);
               var count = data.length-1;
               console.log(myArray,count);
               var t = $(myArray[count])[0].offsetTop;
               $('body').animate({ scrollTop: t +400}, 100);
               // console.log(id)
               $(myArray[count]).addClass('animate');
               setTimeout(function(){
                   $(myArray[count]).removeClass('animate');
               },7000);
               count = count+1;
           }
  
        
    }
   else
   {
       var count = 0;
       const myArray = id.split(",");
       var t = $(myArray[count])[0].offsetTop;
       $('body').animate({ scrollTop: t +400}, 100);
       console.log(myArray[count]);
       $(myArray[count]).addClass('animate');
       setTimeout(function(){
           $(myArray[count]).removeClass('animate');
       },7000);
       data.push(con);
       count = count+1;
   }

  
}
