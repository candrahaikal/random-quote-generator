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
'Di balik diamku ada stress yang membandel.',
'I’m not okay but I’m trying to.',
'Slowly but surely, healing takes time.',
'In the end it’s just me and myself.',
'So fucking tired of myself.',
'Dear self, bertahap ya, ngga semuanya harus sekarang juga, semua ada waktunya.',
'I wish you were here, hugging me.',
'Diterima dulu sakit pahitnya, you have a goal, you’ll get there.',
'Take a deep breath, it’s okay, it’ll be okay.',
'Allah tidak membebani seseorang melainkan sesuai dengan kesanggupannya. [QS. Al-Baqarah : 286]',
'Sabar, nafas dulu sebentar, ceritamu masih panjang.',
'Don’t stop praying, you’ll get everything you deserve.',
'God, i’m tired, but i trust you.',
'Kamu sedang berproses, tumbuh baik-baik ya, you’ll be the best version of you.',
'\“I\’m so proud of you\” soon for myself.',
]

// Rules
btn.addEventListener('click', function(){
  let randomQuoteGenerator = Math.round(Math.random() * quotesList.length - 1);

  if(quoteText == 'undefined'){
    quoteText.innerHTML = 'Tetap semangat ya!';
  } else{
    quoteText.innerHTML = quotesList[randomQuoteGenerator];
  }
})