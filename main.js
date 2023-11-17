document.addEventListener('DOMContentLoaded', function() {
    var listItems = document.querySelectorAll('.navbar-content a');
  
    listItems.forEach(function(item) {
      item.addEventListener('mouseenter', function() {
        this.style.color = 'red';
      });
  
      item.addEventListener('mouseleave', function() {
        this.style.color = 'black';
      });
    });
  });
  