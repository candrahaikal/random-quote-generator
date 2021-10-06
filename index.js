const btn = document.querySelector('#btn');
const quoteText = document.querySelector('#main-quote');

// Array quotes
const quotesList = [
'Sabar\, semua ada gilirannya. Mungkin bukan sekarang\, semoga nanti akan. Tetap waras ya.',
'Capek, dihajar keadaan, dipersulit isi kepala sendiri, stress, hampir gila tapi gapapa.', 
'Love yourself, you are your home, yourself is more important.',
'Look at you, you are tired but you don\'t give up\, you are great so far.', 
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
'Sabar, nafas dulu sebentar, ceritamu masih panjang.',
'Don’t stop praying, you’ll get everything you deserve.',
'God, i’m tired, but i trust you.',
'Kamu sedang berproses, tumbuh baik-baik ya, you’ll be the best version of you.',
'\“I\’m so proud of you\” soon for myself.',
'Kuatin lagi bahunya, banyak tanggung jawab yang harus diperjuangkan.',
'It’s okay, you’re great, ngga semua orang bisa sekuat kamu.',
'Sabar, sabar, sabar. Ngga tau mau sampai kapan, tapi aku percaya rencana Tuhan.',
'It will be okay, just let it flow and enjoy your life now.',
'\“someday\” will be \“finally\”',
'Dear self, kuat-kuat ya, you will be successful, soon.',
'Ya Allah, atur aja gimana baiknya, udah ngga tau harus gimana lagi, capek.',
'I know i\'m strong, tapi kok rasanya kayak berat banget ya. Hehe.',
'Pray, talk to God, God is the best helper.',
'I wanna mute my sad feelings.',
'Kita semua stress di pikiran sendiri.',
'Maaf ya aku banyak ngeluhnya. Capek banget. Hehe',
'No hurt, no stress, just happiness please.',
'I can\'t wait to be rich, I\'m working on it.',
'Patahmu akan tumbuh, sedihmu akan bahagia, dan sabarmu akan terbayar.',
'Pundakmu lelah, kuatmu hebat sejauh ini. Rehat sebentar ya, nanti kita jalan lagi pelan-pelan.',
'No one knows berisiknya isi kepalamu, menderitanya kamu didalam dan kerasnya kamu mengusahakan yang terbaik.',
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