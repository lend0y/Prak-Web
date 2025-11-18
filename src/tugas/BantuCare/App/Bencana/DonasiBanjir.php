<?php
namespace App\Bencana;

use App\Core\Donasi;

class DonasiBanjir extends Donasi
{
    private string $lokasi;

    public function setLokasi($lokasi)
    {
        $this->lokasi = $lokasi;
    }

    public function getLokasi()
    {
        return $this->lokasi;
    }

    public function infoBanjir(): string
    {
        return "Donasi untuk Banjir di wilayah {$this->lokasi}.";
    }
}
