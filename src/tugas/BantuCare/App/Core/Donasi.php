<?php
namespace App\Core;

class Donasi
{
    protected string $namaDonatur;
    protected float $nominal;
    protected string $pesan;

    public function __construct($namaDonatur, $nominal, $pesan = "")
    {
        $this->namaDonatur = $namaDonatur;
        $this->nominal = $nominal;
        $this->pesan = $pesan;
    }

    public function __toString()
    {
        return "Donatur: {$this->namaDonatur}, Nominal: Rp" . number_format($this->nominal, 0, ',', '.');
    }

    public function __destruct()
    {
        // biasanya untuk closing DB / logging
        // ga ku isi apa-apa karna program kecil
    }

    public function getInfoDonasi(): string
    {
        return "{$this->namaDonatur} berdonasi sebesar Rp" . number_format($this->nominal, 0, ',', '.');
    }

    public function tambahNominal($jumlah): void
    {
        $this->nominal += $jumlah;
    }

    public function getNominal(): float
    {
        return $this->nominal;
    }

    public function getPesan(): string
    {
        return $this->pesan ?: "-";
    }
}
