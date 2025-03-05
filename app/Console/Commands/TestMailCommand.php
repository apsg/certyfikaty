<?php
namespace App\Console\Commands;

use App\Mail\CertificateMail;
use Illuminate\Console\Command;
use Illuminate\Support\Facades\Mail;

class TestMailCommand extends Command
{
    protected $signature = 'mail:test';

    public function handle(){
        Mail::to('szymon.gackowski@gmail.com')
            ->send(new CertificateMail('Test tytułu', route('validate.show')));
    }
}
