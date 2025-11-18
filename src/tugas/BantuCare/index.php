<?php

require_once "App/Core/Donasi.php";
require_once "App/Bencana/DonasiBanjir.php";
require_once "App/Bencana/DonasiGempa.php";

use App\Bencana\DonasiBanjir;
use App\Bencana\DonasiGempa;

// ==========================================
// 1. DONASI BANJIR
// ==========================================

echo "\n1. Donasi Banjir:";
echo "\n----------------------------------------\n";

$donasi1 = new DonasiBanjir("Ahmad", 250000, "Semoga lekas pulih");
$donasi1->setLokasi("Jakarta");
$donasi1->tambahNominal(100000);

echo "Donatur      : Ahmad\n";
echo "Total Donasi : Rp " . number_format($donasi1->getNominal(), 0, ',', '.') . "\n";
echo "Lokasi       : " . $donasi1->getLokasi() . "\n";
echo "Pesan        : " . $donasi1->getPesan() . "\n";
echo "Keterangan   : " . $donasi1->infoBanjir() . "\n";


// ==========================================
// 2. DONASI GEMPA
// ==========================================

echo "\n2. Donasi Gempa:";
echo "\n----------------------------------------\n";

$donasi2 = new DonasiGempa("Budi", 500000);
$donasi2->setSkala(6);

echo "Donatur      : Budi\n";
echo "Total Donasi : Rp " . number_format($donasi2->getNominal(), 0, ',', '.') . "\n";
echo "Skala Gempa  : " . $donasi2->getSkala() . " SR\n";
echo "Keterangan   : " . $donasi2->infoGempa() . "\n";


// ==========================================
// 3. DAFTAR SEMUA DONASI
// ==========================================

echo "\n3. Rekap Semua Donasi";
echo "\n========================================\n";

$daftarDonasi = [$donasi1, $donasi2];
$no = 1;

foreach ($daftarDonasi as $d) {
    echo "{$no}. " . $d->getInfoDonasi() . "\n";
    $no++;
}

echo "\nTotal Donatur: " . count($daftarDonasi) . "\n";
echo "========================================\n\n";
