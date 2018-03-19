(function ($) {
 $(document).ready(function () {

   function getWPFunction(pUrl, pElement) {
     var url = pUrl;

     $.ajax({
       type: "GET", // Use Get
       url: url,
       timeout: 2000, // set timeout for how long want to load
       beforeSend: function () {
         console.log('log beforesend ');
       },
       complete: function () {
         console.log('log complete');
       },
       success: function (wpData) { // pass in Parameter from WP
         jsWithNT(wpData); // skick wpData till jsWithNT FN

       },
       error: function () { // if is error log
         console.log('OOPS, Try Agian!');
      }
}); // end of $.ajax


     function jsWithNT(pData) {
       //console.log('This is from pData', pData); // log wpData
       var wpTitle = pData.title.rendered; // loop all rendered in title
       //console.log(wpTitle);
       //console.log(' pData.length ', pData.length);
       var wpTitle = pData.title.rendered; // loop all rendered in title
       var wpContent = pData.content.rendered; // loop content from wp
       // console.log('CHK title and content', wpTitle, wpContent); // it works
       if (pData._embedded['wp:featuredmedia']) {
         var wpFM = pData._embedded['wp:featuredmedia'];
         //  console.log('This is wpFM', wpFM);

         for (var i = 0; i < wpFM.length; i++) {
           var wpImage = wpFM[i].media_details.sizes.medium_large.source_url;
           var wpCaption = wpFM[i].caption.rendered;
           var wpFeaturedMediaTitle = wpFM[i].title.rendered;
           //console.log('test', wpTitle, wpContent, wpImage, wpCaption);

           var wpHTML = ''; // Add content here later

            wpHTML += '<h1>' + wpTitle + '</h1>' // add h1 title
            wpHTML += '<figure>'; // for figure
            wpHTML += '<img class="image" src="' + wpImage + '">'; // add images
            wpHTML += '</figure>'; // add closing tag
            wpHTML += wpContent; // add content


         pElement.append(wpHTML);



         } // end of if _embedded

       } // for loop pData

     } // end jsWithT FN

   } // end getWPFun
   var $url_1 = "http://localhost:808/wordpress/wp-json/wp/v2/posts/4?_embed=true";
   var $section_1 = $('#Lean');
   getWPFunction($url_1, $section_1);

   var $url_2 = "http://localhost:808/wordpress/wp-json/wp/v2/posts/9?_embed=true";
   var $section_2 = $('#Agila-metoder');
   getWPFunction($url_2, $section_2);

   var $url_3 = "http://localhost:808/wordpress/wp-json/wp/v2/posts/13?_embed=true";
   var $section_3 = $('#Projektmetodiken');
   getWPFunction($url_3, $section_3);

 }); // end of .readyFN
})(jQuery)
