<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;

class UserController extends Controller
{

   public function register(Request $req){


    try {
        $validatedData = $req->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|string|email|unique:users|max:255',
            'password' => 'required|string|min:3',
        ]);
    } catch (\Illuminate\Validation\ValidationException $e) {
        return response()->json(['errors' => array_values($e->errors()) ], 422);
    }

    // Save the user to the database
    $user = User::create([
        'name' => $validatedData['name'],
        'email' => $validatedData['email'],
        'password' => Hash::make($validatedData['password']),
    ]);

    // Return the user as a JSON response
    return response()->json([
        'success' => true,
        'message' => 'User created successfully',
        'data' => $user,
    ], 201);;
       
    }
}



