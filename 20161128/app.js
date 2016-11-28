  console.log('hello world');
  var request = require('request');
  var fs = require('fs');
  var cheerio = require('cheerio');
  var site = 'https://www.zhihu.com';
  var options = {
      method: 'GET',
      uri: 'https://www.zhihu.com/search',
      qs: {
          q: 'node.js',

          type: 'content'
      }
  };
  request(options, function(error, response, body) {
      if (!error && response.statusCode == 200) {
          //console.log(body) // Show the HTML for the Google homepage.
          var $ = cheerio.load(body);
          var $title = $('a.js-title-link');
          var result = [];
          for (var i = 0; i < $title.length; i++) {
              var item = {
                  title: $($title[i]).text(),
                  link: site + $($title[i]).attr('href')
              }



              console.log(item);
              result.push(item);
          }
          var str = JSON.stringify(result, null, 4);
          fs.writeFile('result.json', str, 'utf8', function(err) {
              if (err) {
                  console.log("存档失败");
                  return;
              } else
                  console.log("存档完成");
          });

      }
  })



  // var request = require('request');
  // var fs = require('fs');
  // var cheerio = require('cheerio');

  // var site = 'https://www.zhihu.com';

  // var options = {
  //     method: 'GET',
  //     uri: 'https://www.zhihu.com/search',
  //     qs: {
  //         type: 'content',
  //         q: 'node.js'
  //     }
  // };

  // // 網址, callback 
  // request(options, function(error, response, body) {
  //     if (!error && response.statusCode == 200) {

  //         //console.log(body);

  //         var $ = cheerio.load(body);

  //         var $title = $('a.js-title-link');

  //         var result = [];

  //         for (var i = 0; i < $title.length; i++) {
  //             var item = {
  //                 title: $($title[i]).text(),
  //                 link: site + $($title[i]).attr('href')
  //             }

  //             // var str = $($title[i]).text();
  //             // var url = site + $($title[i]).attr('href');
  //             console.log(item);
  //             // console.log(url);

  //             result.push(item);
  //         }

  //         var str = JSON.stringify(result, null, 4);
  //         // 將result存成 JSON 檔
  //         fs.writeFile('result.json', str, 'utf8');
  //     }
  // })