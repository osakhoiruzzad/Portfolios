<?php
$arts = [
    [
        'image' => 'assets/art1.png',
        'title' => 'Sanity',
        'desc'  => 'Desc'
    ],
    [
        'image' => 'assets/art2.png',
        'title' => 'Learn to Fly',
        'desc'  => 'Deskripsi artwork kedua.'
    ],
    [
        'image' => 'assets/art3.png',
        'title' => 'Sta(i)rs',
        'desc'  => 'Deskripsi artwork ketiga.'
    ],
    [
        'image' => 'assets/art4.png',
        'title' => 'Kerzenschein',
        'desc'  => 'Desc'
    ],
    [
        'image' => 'assets/art5.png',
        'title' => 'Ein Gebrochener Mensch.',
        'desc'  => 'Deskripsi artwork kelima.'
    ],
    [
        'image' => 'assets/art6.png',
        'title' => 'Oblivione',
        'desc'  => 'Desc'
    ],
    [
        'image' => 'assets/art7.png',
        'title' => 'K_Night',
        'desc'  => 'Desc'
    ],
    [
        'image' => 'assets/art8.png',
        'title' => 'Non-Senses',
        'desc'  => 'Deskripsi artwork kedelapan.'
    ],
    [
        'image' => 'assets/art9.png',
        'title' => 'Nevertheless',
        'desc'  => 'Deskripsi artwork kesembilan.'
    ],
    [
        'image' => 'assets/art10.png',
        'title' => 'Dethroned',
        'desc'  => 'Deskripsi artwork kesepuluh.'
    ]
];
?>

<div class="art-wrapper">

    <div class="art-viewer">
        <img id="artImage" src="<?= $arts[0]['image']; ?>" alt="Artwork">

        <!-- CONTROLS HARUS DI DALAM VIEWER -->
        <div class="art-controls">
            <button id="btnPrev" onclick="prevArt()">▲</button>
            <button id="btnNext" onclick="nextArt()">▼</button>
        </div>
    </div>

    <div class="art-desc">
        <h3 id="artTitle"><?= $arts[0]['title']; ?></h3>
        <p id="artDesc"><?= $arts[0]['desc']; ?></p>
    </div>

</div>

<script>
const arts = <?= json_encode($arts); ?>;
let index = 0;

function updateArt() {
    document.getElementById('artImage').src = arts[index].image;
    document.getElementById('artTitle').innerText = arts[index].title;
    document.getElementById('artDesc').innerText = arts[index].desc;

    // disable tombol saat mentok
    document.getElementById('btnPrev').disabled = index === 0;
    document.getElementById('btnNext').disabled = index === arts.length - 1;
}

function nextArt() {
    if (index < arts.length - 1) {
        index++;
        updateArt();
    }
}

function prevArt() {
    if (index > 0) {
        index--;
        updateArt();
    }
}

// pastikan state awal benar
updateArt();
</script>
