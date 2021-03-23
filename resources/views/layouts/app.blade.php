<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>{{ config('app.name', 'Laravel') }}</title>

    @include('layouts.partials.link')
</head>

<body data-sidebar="dark">
    <div id="layout-wrapper">
        @include('layouts.partials.header')
        @include('layouts.partials.sidebar')
        
        <div class="main-content">
            <div class="page-content">
                @yield('content')
            </div>
        </div>
    </div>
    @include('layouts.partials.script')
</body>

</html>
