<?php

require_once "App/Core/Donasi.php";
require_once "App/Bencana/DonasiBanjir.php";
require_once "App/Bencana/DonasiGempa.php";

use App\Bencana\DonasiBanjir;
use App\Bencana\DonasiGempa;

/* ============================
   HELPER FUNCTIONS
============================ */

function rupiah($angka)
{
    return "Rp " . number_format($angka, 0, ',', '.');
}

function line($char = "=", $len = 40)
{
    return str_repeat($char, $len) . "\n";
}

function title($text)
{
    return "\033[1;36m" . $text . "\033[0m\n"; // Cyan bold
}

function subtitle($text)
{
    return "\033[1;33m" . $text . "\033[0m\n"; // Yellow bold
}


/* ============================
   HEADER PROGRAM
============================ */

echo title("💧 SISTEM DONASI KEMANUSIAAN NASIONAL");
echo line("=");


/* ============================
   1. Donasi Banjir
============================ */

echo subtitle("1. DONASI BANJIR");
echo line("-");

$donasi1 = new DonasiBanjir("Ahmad", 250000, "Semoga lekas pulih");
$donasi1->setLokasi("Jakarta");
$donasi1->tambahNominal(100000); // increment donasi

echo "👤 Donatur      : Ahmad\n";
echo "💰 Total Donasi : " . rupiah($donasi1->getNominal()) . "\n";
echo "📍 Lokasi       : " . $donasi1->getLokasi() . "\n";
echo "📝 Pesan        : " . $donasi1->getPesan() . "\n";
echo "ℹ️  Keterangan   : " . $donasi1->infoBanjir() . "\n\n";


/* ============================
   2. Donasi Gempa
============================ */

echo subtitle("2. DONASI GEMPA");
echo line("-");

$donasi2 = new DonasiGempa("Budi", 500000);
$donasi2->setSkala(6);

echo "👤 Donatur      : Budi\n";
echo "💰 Total Donasi : " . rupiah($donasi2->getNominal()) . "\n";
echo "🌋 Skala Gempa  : " . $donasi2->getSkala() . " SR\n";
echo "ℹ️  Keterangan   : " . $donasi2->infoGempa() . "\n\n";


/* ============================
   3. Rekap Semua Donasi
============================ */

echo subtitle("3. REKAPITULASI SEMUA DONASI");
echo line("=");

$daftarDonasi = [$donasi1, $donasi2];
$no = 1;

foreach ($daftarDonasi as $d) {
    echo "{$no}. " . $d->getInfoDonasi() . "\n";
    $no++;
}

echo line("=");
echo "Total Donatur : " . count($daftarDonasi) . "\n";
echo line("=");
echo "✔ Program selesai.\n\n";

?>
