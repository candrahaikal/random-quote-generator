const btn = document.querySelector('#btn');
const quoteText = document.querySelector('#main-quote');

// Array quotes
const quotesList = [
'Sabar, semua ada gilirannya. Mungkin bukan sekarang, semoga nanti akan. Tetap waras ya.',
'Capek, dihajar keadaan, dipersulit isi kepala sendiri, stress, hampir gila tapi gapapa.', 
'Love yourself, you are your home, yourself is more important.',
'Look at you, you are tired but you don\'t give up, you are great so far.', 
'I hope I\'ll be happy soon, you too.',
'I wanna tell but I can’t, and it hurts.',
'Lelahmu belum seberapa, ini baru permulaan, ceritamu masih panjang.',
'I’m good at lying to hide my pain.',
'Sabar, doamu sedang bekerja, you’ll receive them at the right time.',
'Di balik diamku ada stress yang membandel.'
]

// Rules
btn.addEventListener('click', function(){
  let randomQuoteGenerator = Math.round(Math.random() * quotesList.length - 1);

  quoteText.innerHTML = quotesList[randomQuoteGenerator];
  if(quoteText == 'undefined'){
    console.log(randomQuoteGenerator);
  } else{
    console.log(quotesList[randomQuoteGenerator]);
  }
})