// import html2canvas from '/node_modules/html2canvas';

const btn = document.querySelector('#btn');
const quoteText = document.querySelector('#main-quote');

// Array quotes
const quotesList = [
'Sabar, semua ada gilirannya. Mungkin bukan sekarang, semoga nanti akan. Tetap waras ya.',
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
'Someday you will find someone who hates to hurt you and feels lucky to have you.',
'I’m still here, for you, everytime.\n-God',
'ya Allah, kedepannya jangan berat-berat ya, ini aja udah stress hampir gila.',
'Kuat-kuat ya, jangan nyerah dulu, nanti akan datang hari terbaikmu.',
'Rasanya semuanya kek yaudah aja. Sedih, patah, sakit. Ya, yaudah. Capek. Hehe',
'Moody, sensitive, overthinker, bad communication, kurang tidur, suka menyendiri, benci sepi.',
'Tired but not giving up. I have a goal, and I will always try my best for it, for myself.',
'I just wanna be happy again, I was so happy before.',
'Pahit, patah, sakit, ini prosesnya, you’re on your way to be the best version of you. Kuat-kuat ya.',
'Tuhan udah ngatur gimana baiknya. Ya berat sih, tapi gapapa, aku ngikut aja. Hehe',
// 50 quotes

'Semoga tetap waras dalam keadaan yang terkuras secara mental.',
'I\'m tired, i\'m stressed, i\'m hurt, but i\'m okay.',
'Pahit, patah, sakit, ini prosesnya. Keep growing huh, be stronger, you\'ll get there.',
'Capek sama semua hal yang dipendam sendirian, i wanna tell, but i can\'t.',
'Capek, tapi gapapa. Berat, tapi masih kuat. Huh, I\'m still trying my best.',
'Pundaknya dikuatin lagi ya, libatkan Allah dalam segala urusanmu, Allah loves you.',
'Sabar dulu, sabar lagi, sabar terus. It\'s okay, God has perfect timing, trust Him.',
'Happiness and peace of mind, you deserve it.',
'Berat ya? I know it\'s hard but please don\'t give up, be strong please, kamu hebat sampai sejauh ini.',
'Capek, pengen cerita tapi susah buat ngejelasin apa yang lagi dirasain.',

'Dear self, your pain will heal soon, I promise.',
'Berdoa sambil nangis is the best healing.',
'My smile is good at lying.',
'Sabar, gapapa, mungkin bukan sekarang, tapi sedang kuusahakan.',
'\“I\'m proud of myself\” you will get it.',
'Aku tau ini belum seberapa, but I\'m tired.',
'It\'s okay to feel tired, it\'s okay to cry. It hurts but it\'s okay.',
'Capek ya? Gapapa, later you will receive what you pray for.',
'Prosesmu berat, pundakmu dipaksa kuat. Keep growing please, you will get there.',
'Happiness has an end, sadness too.',

'I\'m not crying, but my heart.',
'Take a deep breath. Sabar, Allah punya rencananya sendiri.',
'Kurangin ngeluhnya, kerasin usahanya, kencengin doanya. You\'ll get your goal.',
'Kalo mau nyerah, inget when you wanted to give up but in the end kamu bisa ngelewatin semuanya.',
'No one knows how suffer you are inside. Be strong please.',
'Capek banget ngga tau harus gimana lagi. Serius, capek.',
'I know it\'s hard, kuat-kuat ya, kamu bisa kok ngelewatin semuanya.',
'It\'s not easy but I try my best.',
'Jangan dipaksain, it\'s ok to rest, nanti kita jalan lagi pelan-pelan.',
'Reminder: rest is also part of the process.',

'Ya mau gimana lagi, kayaknya emang udah paling bener dipendem sendiri aja.',
'Sabar ya, kamu sedang dibentuk, nikmatin dulu pahit-pahitnya, semua ada waktunya.',
'Kuat-kuat ya, suatu saat kamu akan menjadi seperti apa yang kamu doakan.',
'Duduk sebentar, nafas dulu. It\'s okay, you deserve it, kamu hebat sejauh ini.',
'Patahmu akan tumbuh, sedihmu akan bahagia, dan harapmu akan tersemogakan.',
'Kita dipersulit isi kepala sendiri.',
'\“Mah, pah, ambil aja nanti aku yang bayar\” one of my life goals.',
'Kurangin ngeluhnya, sabar dulu ya, Allah tau semua tentangmu.',
'Pundak yang kuat juga butuh istirahat. Gapapa, rehat dulu ya, you\'re great so far.',
'Dipendem sendiri, ngga kuat lagi, nangis lagi. Capek ya.',

'“When?” I don\'t know when but I believe in God\'s plan.',
'“Kenapa harus aku?” Karena kamu mampu, Allah Mencintaimu.',
'Ya Allah, please make it easy, pengen bahagiain kedua orang tua.',
'Pelan-pelan, jangan dipaksain. Tenang ya, kamu bisa kok ngelewatin semuanya.',
'Keep growing, trust the process. Ada saatnya kamu bangga karena tidak pernah menyerah.',
'Take a deep breath, then exhale slowly. Hadeeh, berat banget ya prosesnya.',
'Jatah gagalmu belum habis, lelahmu juga belum seberapa. Kuat-kuat ya.',
'Akan ada saatnya “oh.. jadi ini, ternyata Tuhan baik ya, baik banget”',
'Garis finish tiap orang itu beda-beda. Gapapa, mungkin enggak sekarang, tapi akan.',
'Duduk sebentar, apa sih yang kamu kejar? Tarik nafas dulu, jangan terburu-buru.',
//100 quotes

'Tuhan, aku bakal baik-baik aja kan?',
'Bagian terburuk tentang menjadi kuat adalah ga ada yang tau kalo kamu kesakitan.',
'Jatuh sendiri, bangkit sendiri, yang nyemangatin juga diri sendiri. Gapapa, aku sayang aku',
'Bahunya dikuatin lagi ya, semesta semakin berlebihan bercandanya',
'Be proud of your progress, keep growing, you are great so far.',
'Sabar ya, prosesmu juga butuh waktu. Don\'t give up please, kamu hebat sampai sejauh ini.',
'Akan ada fase “oh.. jadi ini yang selama ini Tuhan rencanain”',
'Hampir gila karena gatau harus gimana.',
'Patah, sembuh, bertumbuh. Susah, tapi bisa. Lekas pulih ya.',
'Sedih, sakit, perih. Bertahan lagi ya, harapanmumu pantas diperjuangkan.',

]

// Rules
btn.addEventListener('click', function(){
  let randomQuoteGenerator = Math.round(Math.random() * quotesList.length - 1);

  if(quoteText == undefined){
    quoteText.innerHTML = 'Tetap semangat ya!';
  } else{
    quoteText.innerHTML = quotesList[randomQuoteGenerator];
  }
})


// const ssBtn = document.getElementById('ssBtn');

// ssBtn.addEventListener('click', function(){
// 	html2canvas(document.getElementById('main')).then(function(canvas) {
//     var link = document.createElement('a');
// 		link.href = 'images.jpg';
// 		link.download = 'Download.jpg';
// 		document.body.appendChild(link);
// 		link.click();
// 		document.body.removeChild(link);
// 	});
// })
