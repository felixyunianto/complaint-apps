@extends('layouts.app')
@section('content')
    <div class="page-title-box">
        <div class="container-fluid">
            <div class="row align-items-center">
                <div class="col-md-8">
                    <h4 class="page-title mb-1">Dashboard</h4>
                    <ol class="breadcrumb m-0">
                        <li class="breadcrumb-item active">Welcome to Xoric Dashboard</li>
                    </ol>
                </div>
                <div class="col-md-4">
                    <div class="float-right d-none d-md-block">
                        <div class="dropdown">
                            <button class="btn btn-light btn-rounded dropdown-toggle" type="button" data-toggle="dropdown"
                                aria-haspopup="true" aria-expanded="false">
                                <i class="mdi mdi-settings-outline mr-1"></i> Settings
                            </button>
                            <div class="dropdown-menu dropdown-menu-right dropdown-menu-animated">
                                <a class="dropdown-item" href="#">Action</a>
                                <a class="dropdown-item" href="#">Another action</a>
                                <a class="dropdown-item" href="#">Something else here</a>
                                <div class="dropdown-divider"></div>
                                <a class="dropdown-item" href="#">Separated link</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="page-content-wrapper">
        <div class="container-fluid">
            <div class="card">
                <div class="card-header bg-transparent border-bottom">
                    Detail Pengaduan
                </div>
                <div class="card-body">
                    <table class="table">
                        <tr>
                            <td>Nama Pelapor</td>
                            <td>:</td>
                            <td>{{ $complaint->user->name }}</td>
                        </tr>
                        <tr>
                            <td>Jenis Aduan</td>
                            <td>:</td>
                            <td>{{ $complaint->complaintCategory->complaint_category_name }}</td>
                        </tr>
                        <tr>
                            <td>Aduan</td>
                            <td>:</td>
                            <td>{{ $complaint->complaint_content }}</td>
                        </tr>
                        <tr>
                            <td>Tanggal</td>
                            <td>:</td>
                            <td>{{ $complaint->created_at }}</td>
                        </tr>
                        <tr>
                            <td>Gambar</td>
                            <td>:</td>
                            <td>
                                <img src="{{ asset($complaint->complaint_image) }}" alt="" width="100px">
                            </td>
                        </tr>
                    </table>
                    <center>
                        <form id="form-status" method="POST" action="{{ route('complaint.update', $complaint->id) }}">
                            @csrf
                            <input type="hidden" name="_method" value="PUT">
                            <input type="hidden" name="status" id="field-status">
                        </form>
                        <button class="btn btn-primary btn-sm" id="btn-confirm">Konfirmasi</button>
                        <button class="btn btn-danger btn-sm" id="btn-decline">Tolak</button>

                    </center>
                </div>
            </div>
        </div>
    </div>
@endsection
@section('script')
    <script>
        $(document).ready(function(){
            $('#btn-confirm').on('click', function(){
                $('#field-status').val('Approved');
                $('#form-status').submit();
            });

            $('#btn-decline').on('click', function(){
                $('#field-status').val('Decline');
                $('#form-status').submit();
            });
        });
    </script>
@endsection