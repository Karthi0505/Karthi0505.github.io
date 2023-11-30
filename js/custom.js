(function() { //IIFE Start


// pdf to html Start ###############################################
function fn_save_pdf() {
    var source = document.getElementById('body');
    source.classList.add('print');

    var element = document.getElementById('element-to-print');
    var opt = {
      pagebreak: {mode: ['avoid-all', 'css', 'legacy']},
      margin: 0,
      filename: 'myfile.pdf',
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
    };

    // New Promise-based usage:
    html2pdf().set(opt).from(element).save()
        //https://lightrun.com/answers/ekoopmans-html2pdf-js-media-print-or-media-not-print-in-css-ignored
        .then(function(){ 
            source.classList.remove('print');
        });
}

document.getElementById('export_to_pdf_Button').addEventListener('click', fn_save_pdf)
// pdf to html End -------------------------------------------------------


})() //IIFE End