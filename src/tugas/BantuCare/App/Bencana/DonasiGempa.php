<?php
namespace App\Bencana;

use App\Core\Donasi;

class DonasiGempa extends Donasi
{
    private int $skala;

    public function setSkala($skala)
    {
        $this->skala = $skala;
    }

    public function getSkala()
    {
        return $this->skala;
    }

    public function infoGempa(): string
    {
        return "Donasi untuk Gempa dengan skala {$this->skala} SR.";
    }
}
