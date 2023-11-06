document.addEventListener('DOMContentLoaded', function() {
  var fileInput = document.getElementById('fileInput');
  var loadButton = document.getElementById('loadButton');
  var playlist = document.getElementById('playlist');
  var player = document.getElementById('player');

  loadButton.addEventListener('click', function() {
    var file = fileInput.files[0];
    if (file) {
      var reader = new FileReader();
      reader.onload = function(e) {
        var content = e.target.result;
        var urls = content.trim().split('\n');
        playlist.innerHTML = ''; // Limpia la lista anterior
        for (var i = 0; i < urls.length; i++) {
          var url = urls[i].trim();
          if (url) {
            var item = document.createElement('div');
            item.classList.add('playlist-item');
            item.textContent = url;
            item.addEventListener('click', function() {
              player.src = this.textContent;
              player.play();
            });
            playlist.appendChild(item);
          }
        }
      };
      reader.readAsText(file);
    }
  });
});
