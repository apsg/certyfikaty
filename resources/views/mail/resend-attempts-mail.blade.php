<x-mail::message>
# Twoje certyfikaty

Poniżej przesyłamy listę podejść do uzyskania certyfikatu, które zostały wygenerowane w naszym systemie na Twój
adres email.

<x-mail::table>
| Tytuł  | Data podejścia | Status | Link |
|--------|----------------|:------:|------|
@foreach($attempts as $attempt)
| {{ $attempt->certificate->title_formatted }} | {{ $attempt->finished_at?->format('Y-m-d') ?? $attempt->created_at->format('Y-m-d') }} | {{ $attempt->is_passed ? 'Zdany' : 'Nie zdany' }} | [Zobacz]({{ route('attempts.showAttempt', [$attempt->certificate, $attempt]) }}) |
@endforeach
</x-mail::table>

Dziękujemy,<br>
{{ config('app.name') }}
</x-mail::message>
