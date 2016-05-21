function initPara () {
  if (window.innerWidth > 768) {
    var goFull = $( window ).innerHeight() - 60
  } else {
    var goFull = $( window ).innerHeight()
  }
  $( '.parallax-window' ).css("height", goFull)
}

window.onload = initPara
