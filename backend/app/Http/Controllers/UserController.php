<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;

class UserController extends Controller
{

    function register(Request $req){

        $validatedData = Validator::make($req->all(), [
            'name' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:users',
            'password' => 'required|string|min:3',
        ]);

        if ($validatedData->fails()) {
            return response()->json($validatedData->errors(), 400);
        }
    
        // If the validation passes, create the user in the database
        $user = User::create([
            'name' => $validatedData->validated()['name'],
            'email' => $validatedData->validated()['email'],
            'password' => Hash::make($validatedData->validated()['password']),
        ]);
      

        return response()->json([
            'success' => true,
            'message' => 'User created successfully',
            'data' => $user,
        ], 201);
        
    }
}



