function kirimData() {
  var name = document.getElementById("nama").value;
  var tanggal = document.getElementById("tanggal").value;
  var domisili = document.getElementById("domisili").value; // Menggunakan id yang sesuai dengan elemen select
  var membership = document.querySelector(
    'input[name="peminatan"]:checked'
  ).value; // Menggunakan name yang sesuai dengan radio button
  var hp = document.getElementById("hp").value; // Menggunakan id yang sesuai dengan elemen input
  var alamat = document.getElementById("alamat").value;

  alert(
    "Nama: " +
      name +
      "\nTanggal Lahir: " +
      tanggal +
      "\nDomisili: " +
      domisili +
      "\nMembership: " +
      membership +
      "\nNomor Telepon: " +
      hp +
      "\nAlamat: " +
      alamat
  );
}
