<?php

namespace App\Http\Controllers\Restful;

use App\Http\Controllers\Controller;
use App\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Validator;

class UserController extends Controller
{
    public function loginMobile(Request $request){
        
        if(Auth::attempt(['email' => $request->email, 'password' => $request->password])){
            $user = Auth::user();
            $user['token'] = $user->createToken('BanjarAnyar')->accessToken;

            return response()->json([
                'message' => 'Success Login',
                'status' => 200,
                'data' => $user
            ],200);
        }else{ 
            return response()->json([
                'message'=>'Error Login',
                'status' => 401,
                'error' => 'Email or Password is invalid'
            ], 401); 
        }
    }

    public function registerMobile(Request $request){
        $validator = Validator::make($request->all(), [
            'name' => 'required',
            'email' => 'required | email',
            'password' => 'required | min: 6',
            'confirm_password' => 'required | same:password'
        ]);

        if($validator->fails()){
            return response()->json([
                'message' => 'Error',
                'status' => 401,
                'error' => $validator->errors()
            ], 401);
        }

        $findUser = User::where('email', $request->email)->first();

        if($findUser !== null){
            return response()->json([
                'message' => 'Error',
                'status' => 422,
                'error' => 'Email is already exists'
            ], 402);
        }
        $user = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => bcrypt($request->password)
        ]);

        $responseObject = [
            'name' => $user['name'],
            'email' => $user['email'],
            'token' => $user->createToken('BanjarAnyar')->accessToken
        ];

        return response()->json([
            'message' => 'Register is successful',
            'status' => 200,
            'data' => $responseObject
        ], 200);
    }

    public function details (){
        $user = Auth::user();
        
        return response()->json([
            'message' => 'Success get detail user',
            'status' => 200,
            'data' => $user
        ],200);
    }
}
