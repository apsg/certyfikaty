<x-mail::message>
# Uzyskano certyfikat!

Wystawiono dla Ciebie nowy certyfikat:

### {{ $title }}

Możesz pobrać klikając w poniższy link:

<x-mail::button :url="$url">
Zobacz i pobierz certyfikat
</x-mail::button>

Dziękujemy,<br>
{{ config('app.name') }}
</x-mail::message>
