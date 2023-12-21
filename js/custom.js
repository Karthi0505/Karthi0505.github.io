(function () { //IIFE Start


  // Print Js Start
  const printButtons = document.querySelectorAll('.print-JS');

  printButtons.length > 0 && (

    printButtons.forEach((button) => {
      button.addEventListener('click', () => {
        window.print();
      })
    })

  ) // && condition end
  // Print Js End


  // Scroll to top - Start #####################################################
  let scrollTopBtn = document.getElementById("scrollTopBtn");

  window.onscroll = function () {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
      scrollTopBtn.style.display = "block";
    } else {
      scrollTopBtn.style.display = "none";
    }
  };

  scrollTopBtn.onclick = function () {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };
  // Scroll to top - End -------------------------------------------------------


  // pdf to html Start ###############################################
  const export_to_pdf_Button = document.getElementById('export_to_pdf_Button');

  function fn_save_pdf() {
    var source = document.getElementById('body');
    source.classList.add('print'); //add this class before conversion starts, and do PDF necessary CSS with this class

    var element = document.getElementById('element-to-print');
    //Heading to keep as filename
    let title = document.querySelector('h1').innerText.replaceAll(" ", "_");
    var opt = {
      pagebreak: { mode: ['avoid-all', 'css', 'legacy'] },
      margin: 0,
      filename: title + '.pdf',
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
    };

    // New Promise-based usage:
    html2pdf().set(opt).from(element).save()
      //https://lightrun.com/answers/ekoopmans-html2pdf-js-media-print-or-media-not-print-in-css-ignored
      .then(function () {
        source.classList.remove('print');
      });
  }

  if (export_to_pdf_Button) {
    document.getElementById('export_to_pdf_Button').addEventListener('click', fn_save_pdf)
  }
  // pdf to html End -------------------------------------------------------


})() //IIFE End