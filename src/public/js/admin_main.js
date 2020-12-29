$(function () {

    $function() 

    $(function () {  
        // if ($('textarea#ta').length) {
        //   console.log($('#ta'));
        //   ClassicEditor.create(document.querySelector( '#ta' )).then(() => {
        //     console.log('editor initialized');
        //   }).catch((err) => {
        //     console.log(err);
        //   });
        // }

        alert('test');
      });

    $('a.confirmDeletion').on('click', function () {
        if (!confirm('Confirm deletion'))
            return false;
    });
    
    if ($("[data-fancybox]").length) {
        $("[data-fancybox]").fancybox();
    }

});
