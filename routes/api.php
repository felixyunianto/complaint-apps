<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

//Authentication
Route::post('/login', 'Restful\UserController@login');
Route::post('/register', 'Restful\UserController@register');

Route::group(['middleware' => 'auth:api'], function(){

    // Complaint Categories
    Route::get('/complaint-category', 'Restful\ComplaintCategoryController@index');
    Route::post('/complaint-category', 'Restful\ComplaintCategoryController@store');
    Route::put('/complaint-category/{id}','Restful\ComplaintCategoryController@update');
    Route::delete('/complaint-category/{id}', 'Restful\ComplaintCategoryController@destroy');

    // Complaints
    Route::get('/complaint', 'Restful\ComplaintController@index');
    Route::post('/complaint', 'Restful\ComplaintController@store');
    Route::put('/complaint/{id}', 'Restful\ComplaintController@update');
    Route::delete('/complaint/{id}', 'Restful\ComplaintController@destroy');

    Route::post('/details', 'Restful\UserController@details');
});