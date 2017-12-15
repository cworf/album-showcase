var albums = [];

function Album(albumImage, artistName, albumTitle, releaseDate, otherInfo) {
  this.id = "";
  this.image = albumImage;
  this.artist = artistName;
  this.album = albumTitle;
  this.release = releaseDate;
  this.info = otherInfo;
};

Album.prototype.template = function () {
  return `
  <div data-target="album-info` + this.id + `" class="album modal-trigger">
    <div class="square">
      <img src="img/` + this.image + `" alt="">
    </div>
    <h3>`+ this.album + `</h3>
  </div>
  `
}

Album.prototype.modalTemplate = function () {
  return `
  <div id="album-info` + this.id + `" class="modal album-info">
    <img src="img/` + this.image + `" alt="">
    <div class="info">
      <div class="item">
        <span class="meta">Artist:</span> <span>` + this.artist + `</span>
      </div>
      <div class="item">
        <span class="meta">Released:</span> <span>` + this.release + `</span>
      </div>
      <div class="item">
        <span class="meta">Info:</span> <span>` + this.info + `</span>
      </div>
    </div>
  </div>
  `
}



$(function() {
  $('#modal-form').modal();

  $('.datepicker').pickadate({
      selectMonths: true, // Creates a dropdown to control month
      selectYears: 15, // Creates a dropdown of 15 years to control year,
      today: 'Today',
      clear: 'Clear',
      close: 'Ok',
      closeOnSelect: false // Close upon selecting a date,
  });

  $("#album-info").submit(function(event) {
    console.log("this is running");
    event.preventDefault();
      var albumImage = $(".album-image").val();
      var artistName = $("#artist-name").val();
      var albumTitle = $("#album-title").val();
      var releaseDate = $("#release-date").val();
      var otherInfo = $("#other-info").val();

      var newAlbum = new Album(albumImage, artistName, albumTitle, releaseDate, otherInfo);

      albums.push(newAlbum);
      console.log(albums);
      var gridTemplate = "";
      var modalTemplate = "";

      for (var i = 0; i < albums.length; i++) {

        albums[i].id = [i];

        gridTemplate += albums[i].template();
        modalTemplate += albums[i].modalTemplate();
      }

      $('.grid').html(gridTemplate);
      $('.modals').html(modalTemplate);

      var modalList = '';
      for (var i = 0; i < albums.length; i++) {
        if (i === albums.length - 1) {
          modalList += '#album-info' + albums[i].id;
        }
        else {
          modalList += '#album-info' + albums[i].id + ", ";
        }
      }
      $(modalList).modal();
  });



});
