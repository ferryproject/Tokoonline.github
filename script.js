function kirimWhatsApp() {
  const barang = document.getElementById('barang').value;
  const harga = document.getElementById('harga').value;
  const nama = document.getElementById('nama').value;
  const alamat = document.getElementById('alamat').value;

 
  const message = `Selamat pagi pa, \nNama saya: ${nama}. \nSaya ingin membeli laptop: ${barang}. \nDengan harga: ${harga}. \nAlamat tujuan yaitu: ${alamat}.`;

  
  const formattedMessage = encodeURIComponent(message);

  
  const phoneNumber = '6289614265039'; 

  
  const whatsappLink = `https://api.whatsapp.com/send?phone=${6289614265039}&text=${formattedMessage}`;

  
  window.open(whatsappLink, '_blank');
  
}

