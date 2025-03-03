<?php
namespace App\Domains\Cerificates;

use App\Domains\Cerificates\Models\Layout;
use Illuminate\Support\Facades\Storage;
use setasign\Fpdi\Fpdi;

class CertificateGenerator
{
    protected Layout $layout;
    protected string $date;
    protected string $title;
    protected string $name;
    protected string $number;

    public function __construct(Layout $layout)
    {
        $this->layout = $layout;
    }

    public function generate(): string
    {
        $pdf = new Fpdi();
        $pdf->AddPage();

        $pdf->AddFont('SoraRegular', '', 'SoraRegular.php');
        $pdf->AddFont('SoraBold', '', 'SoraBold.php');

        $pdf->setSourceFile(Storage::path($this->layout->file));

        $tplId = $pdf->importPage(1);
        $pdf->useTemplate($tplId, 0, 0, 210);

        $pdf = $this->generateText(
            $pdf,
            $this->layout->date_position_left,
            $this->layout->date_position_top,
            $this->layout->date_font_size,
            $this->date
        );

        $pdf = $this->generateText(
            $pdf,
            $this->layout->title_position_left,
            $this->layout->title_position_top,
            $this->layout->title_font_size,
            $this->title
        );

        $pdf = $this->generateText(
            $pdf,
            $this->layout->name_position_left,
            $this->layout->name_position_top,
            $this->layout->name_font_size,
            $this->name
        );

        $pdf = $this->generateText(
            $pdf,
            $this->layout->number_position_left,
            $this->layout->number_position_top,
            $this->layout->number_font_size,
            $this->number
        );

        return $pdf->Output();
    }

    public function setDate(string $date): self
    {
        $this->date = $date;

        return $this;
    }

    public function setTitle(string $title): self
    {
        $this->title = $title;

        return $this;
    }

    public function setName(string $name): self
    {
        $this->name = $name;

        return $this;
    }

    public function setNumber(string $number): self
    {
        $this->number = $number;

        return $this;
    }

    protected function generateText(Fpdi $pdf, ?int $left, int $top, int $size, string $text): Fpdi
    {
        $pdf->SetTextColor(0, 0, 0);
        $pdf->SetFont('SoraRegular', '', $size);
        $pdf->SetXY($left ?? 0, $top);
        $pdf->cell('0', '0', iconv('UTF-8', 'iso-8859-2',$text), 0, 1, $left ? 'L' : 'C');

        return $pdf;
    }
}
