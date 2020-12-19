function animTitle() {
  let titleAnim = ""
  let title = document.getElementsByClassName('title-animation')
  titleAnim += "<span>"
  for (let letter = 0; letter < title[0].innerText.length; letter++) {
    if (title[0].innerText[letter] !== " ") { 
      titleAnim += "<span style='animation-delay: "+ (0.05 * letter) + "s'>"+ title[0].innerText[letter] +"</span>";
    }
    else { 
      titleAnim += "</span> <span>";
    }
  }
  titleAnim += "</span>"
  title[0].innerHTML = titleAnim; 
  titleAnim = ""; 
} 
animTitle()
