

String.prototype.tpl = function(o) { 
    var r = this ; 
    for (var i in o) { 
        r = r.replace(new RegExp("\\$"+i, 'g'),o[i])  
    } 
    return r 
}

var listItemTpl = `<li class="nav-item"><a class="nav-link" href='#' id="list_btn" onclick='load("$url")'>$label</a></li>`;
var listItemTpl2 = `<li class="nav-item"><a class="nav-link" href='#' id="list_btn" onclick='load2("$url")'>$label</a></li>`;

$(document).ready(main);

function main() { 
    $.ajax({    // ajax to load the doc on the page and making due lists 
        type: 'GET', 
        dataType: 'json',
        url: 'filelist.json', //jsonfile where articles are listed
        success: function(d) {
            for (var i=0; i<d.length; i++) {
                // alert(d)
                $('#list').append(listItemTpl.tpl({url:d[i].url, label: d[i].label})) // here the load funcion to select the article and display it on the file section
                $('#list2').append(listItemTpl2.tpl({url:d[i].url, label: d[i].label}))
            }	

           
        },
        error: function() {
            alert('No document to show')
        }
    });
    
    $('#peop').click(function() {
        if (this.checked)

            $('.people').addClass('text-people')  //for checkbox to compare metadata and color in css 
        else
            $('.people').removeClass('text-people')
    })


    $('#plac').click(function() {
        if (this.checked) 
        $('.place').addClass('text-place')
    else
        $('.place').removeClass('text-place')
    })

    $('#eve').change(function() {
        if (this.checked) 
            $('.event').addClass('text-event')
        else
            $('.event').removeClass('text-event')
    })

    $('#conce').change(function() {
        if (this.checked) 
            $('.concept').addClass('text-concept')
        else
            $('.concept').removeClass('text-concept')
    })

    $('#oppi').change(function() {
        if (this.checked) 
            $('.opinion').addClass('text-opinion')
          
        else
           
            $('.opinion').removeClass('text-opinion')
    })

    

}

function load(file) { //load function when ypu click on the article to display it on th file section 
    $.ajax({
        method: 'GET',
        url: file, //file is the section on topic page 
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
            addIds() //function one
            filltabs2() //function two
        },
        error: function() {
            alert('Could not load file '+file)
        }
    });
}

function addIds() { //function one 


    addId('.people','people') //adds ids to the annotations 
    addId('.place', 'place')
    addId('.event', 'event')
    addId('.concept', 'concept')
    addId('.opinion', 'opinion')

}

function addId(what, prefix) {
    var id = '0'
    var elements = $(what); 
    for (var i=0; i<elements.length; i++) { //adding numbered ids 
        elements[i].id = prefix + "-" + id++
    }
}

function filltabs(){ //function two 


    filltab("#file .people","list-people","#peoples") //adds metadata in the tabs 
    filltab("#file .place","list-place","#places")
    filltab("#file .event","list-event","#events")
    filltab("#file .concept","list-concept","#concepts")
    filltab("#file .opinion","list-opinion","#opinions")
}

function filltabs2(){


    filltab("#file2 .people","list-people2","#peoples2")
    filltab("#file2 .place","list-place2","#places2")
    filltab("#file2 .event","list-event2","#events2")
    filltab("#file2 .concept","list-concept2","#concepts2")
    filltab("#file2 .opinion","list-opinion2","#opinions2")
}


function filltab(what,style,where) { //what is #file2 .people,  style is "list-people2", where is #peoples2

    var where_new = what.split(' ');
    where_new = where_new[0];
    var list = `<li class="list $style"><a href="#" onclick="goto('$place','$content','$wh')">$content</a></li>` //goto + the count funtion 
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

    // console.log(counts);

    for (let x in counts) {
       // console.log);
       // console.log(counts)
         $(where+' ul').append(list.tpl({
            style:style, 
            place: counts[x],
            wh: where_new,
            content: (x + " count: "+ counts[x].length) //saving the counts on the ids
        }) )
        }

    // for (var i=0; i<elements.length; i++) {
       
    // }
}



var data = new Array();


function goto(id,con,wh) { //if you click one time is hightlight one two time the next one 
    

    if (data.length!= 0)
    {
       if (con == data[data.length -1])
           { 
               
               const myArray = id.split(",");
               
               data.push(con);
               var count = data.length-1;
            //    console.log(myArray,data,count);
                
               var che  = con.split(" ");
               if (count+1>Number(che[che.length-1]))
               {
                   alert('You have reached end of count');
                   count=0;
               }
               else
               {
                    if ($(myArray[count])[0])
                       {
                           var t = $(myArray[count])[0].offsetTop;
                          
                       }
                       else{
                           var t = $(myArray[count-1])[0].offsetTop;
                       }
                        $(wh).animate({ scrollTop: t - 600}, 100);
                        
                           $(myArray[count]).addClass('animate');
                           setTimeout(function(){
                               $(myArray[count]).removeClass('animate');
                           },7000);
                           count = count+1;
               }

               
              
               
               
           }
        else
           {   
               data=[];
            //    console.log('else block');
               var count = 0;
               const myArray = id.split(",");
               var t = $(myArray[count])[0].offsetTop;
               $(wh).animate({ scrollTop: t - 600}, 100);
            //    console.log(myArray[count]);
               $(myArray[count]).addClass('animate');
               setTimeout(function(){
                   $(myArray[count]).removeClass('animate');
               },7000);
               data.push(con);
               count = count+1;
            //    console.log(data);
           }
  
        
    }

   else
   {
       var count = 0;
       const myArray = id.split(",");
       var t = $(myArray[count])[0].offsetTop;
       $(wh).animate({ scrollTop: t - 600}, 100);
    //    console.log(myArray[count]);
       $(myArray[count]).addClass('animate');
       setTimeout(function(){
           $(myArray[count]).removeClass('animate');
       },7000);
       data.push(con);
       count = count+1;
   }

  
}
