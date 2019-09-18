// console.log(blurb.array3[2]);

// i = 1;
// j = 1;
// k = 1;
// l = 1;
// m = 1;
// n = 1;
// clicks = 0;

function textItem() {
  // makes a span into which a text segment from blurb.array1[i] is rendered and appended to centerText div


  var appears = [blurb.firstPara["array4"], blurb.firstPara["array3"]]

  for (i in appears){
    for (j in appears[i]){
      appears[i][j] = "<span class='appear'>" + appears[i][j] + "</span>"
      console.log(appears[i][j])

    }
  }


  // puts 'appear' id on array3 and array4 items so they can be toggled
  // you could put these 'appear' arrays in an array themselves 

  for (obj in blurb) {
    //firstPara, secondPara

    Object.keys(blurb[obj]).forEach(function (key) {
    // Object.key takes blurb and forEach spits out each key's entry (e.g. firstPara's values)
      console.log(obj)
      // prints the nth value of the nth value of blurb
      var n = 0;

      $('<span/>', {
        class: 'textSpan',
      })
      .html(blurb[obj][key][n])
      .appendTo($('.centerText'))
      .click(function() {
        n = (n + 1) % ((blurb.firstPara[key].length));
        $(this).html(blurb.firstPara[key][n]);
              console.log("obj =" + obj + " / " + "key = " + key + " / " + "n = " + n)

        })   
            // underline on mouseover
      .mouseover(function() {
        $(this).css("text-decoration", "underline")
      })
      .mouseleave(function() {
        $(this).css("text-decoration", "none")
      })
      .after("&nbsp;");


      $('.appear').css('display', 'none');
    
      $('#works').click( function() {
        $('.appear').css('display', 'inline')
      })

      // adds spaces between segments



      // $('#that')
      // .click( function() {

      //   $('<span/>')
      //   .appendTo($('#secondPara'))
      //   .html("placeholder text")
        })
}

    }
  

textItem();

// $("#textOne").click(function() {
//   i = (i + 1) % 4;
//   $(this).html(textOne[i]);
//   clicks = clicks + 1;
//   clickstest();
// });

// // take something as an input, deal with it 
// // e.g. function ()

// $("#textTwo").click(function() {
//   j = (j + 1) % 4;
//   $(this).html(textTwo[j]);
//   clicks = clicks + 1;
//   clickstest();
// });

// $("#textThree").click(function() {
//   k = (k + 1) % 3;
//   $(this).html(textThree[k]);
//   clicks = clicks + 1;
//   clickstest();
// });

// function clickstest () {
// console.log("clicks: "+ clicks);
// if (clicks > 15) {
//   $("#ellipsis").show();
//   }
// };
