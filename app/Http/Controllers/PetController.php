<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Pet;
use App\Http\Resources\PetResource;
use Illuminate\Support\Facades\Validator;

class PetController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $pets = Pet::get();
        if($pets->count() > 0){
            return PetResource::collection($pets);
        }else{
            return response()->json(['message'=>'No record available'],200);
        }
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {

        $validator = Validator::make($request->all(),[
            'name'=> 'required|string|max:255',
            'species'=>'required',
            'breed'=>'required',
            'dob'=>'required',
        ]);

        if($validator->fails()){
            return response()->json([
                'message'=>'All fields are mandatory',
                'error'=>$validator->messages()
            ],422);
        }
        $pets = Pet::create([
            'name'=>$request->name,
            'species'=>$request->species,
            'breed'=>$request->breed,
            'dob'=>$request->dob,
        ]);

        return response()->json([
            'message'=>'Pet created successfully',
            'data'=> new PetResource($pets)
    ],200);
    }

    /**
     * Display the specified resource.
     */
    public function show(Pet $pet)
    {
        return new PetResource($pet);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Pet $pet)
    {
        $validator = Validator::make($request->all(),[
            'name'=> 'required|string|max:255',
            'species'=>'required',
            'breed'=>'required',
            'dob'=>'required',
        ]);
        if($validator->fails()){
            return response()->json([
                'message'=>'All fields are mandatory',
                'error'=>$validator->messages()
            ],422);
        }
        $pet->update([
            'name'=>$request->name,
            'species'=>$request->species,
            'breed'=>$request->breed,
            'dob'=>$request->dob,
        ]);

        return response()->json([
            'message'=>'Pet updated successfully',
            'data'=> new PetResource($pet) 
    ],200);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Pet $pet)
    {
        $pet->delete();
        return response()->json([
            'message'=>'Pet deleted successfully',
            ],200);
    }
}
