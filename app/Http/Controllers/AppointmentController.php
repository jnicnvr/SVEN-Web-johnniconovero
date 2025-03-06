<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Appointment;
use App\Http\Resources\AppointmentResource;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Log;


class AppointmentController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $appointments = Appointment::get();
        if($appointments->count() > 0){
            return AppointmentResource::collection($appointments);
        }else{
            return response()->json(['message'=>'No record available'],200);
        }
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        // Log::info('Incoming Request',$request->all());
        $validator = Validator::make($request->all(),[
            'name' => 'required|string',
            'pet_name' => 'required|string',
            'selected_day' => 'required|string|in:Sun,Mon,Tue,Wed,Thu,Fri,Sat',
            'time_of_day' => 'required|in:Morning,Afternoon,Evening',
            'frequency' => 'required|string',
            'start_date' => 'required|string',
            'notes' => 'nullable|string',
        ]);

        if($validator->fails()){
            return response()->json([
                'message'=>'All fields are mandatory',
                'error'=>$validator->messages()
            ],422);
        }

        $appointment = Appointment::create([
            'name' => $request->name,
            'pet_name' => $request->pet_name,
            'selected_day' => $request->selected_day,
            'time_of_day' => $request->time_of_day,
            'frequency' => $request->frequency,
            'start_date' => $request->start_date,
            'notes' => $request->notes,
        ]);

        return response()->json([
            'message'=>'Appointment created successfully',
            'data'=> new AppointmentResource($appointment)
    ],200);
    }

    /**
     * Display the specified resource.
     */
    public function show(Appointment $appointment)
    {
        return new AppointmentResource($appointment);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Appointment $appointment)
    {
        $validator = Validator::make($request->all(),[
            'name' => 'required|string',
            'pet_name' => 'required|string',
            'selected_day' => 'required|string|in:Sun,Mon,Tue,Wed,Thu,Fri,Sat',
            'time_of_day' => 'required|in:Morning,Afternoon,Evening',
            'frequency' => 'required|string',
            'start_date' => 'required|string',
            'notes' => 'nullable|string',
        ]);

        if($validator->fails()){
            return response()->json([
                'message'=>'All fields are mandatory',
                'error'=>$validator->messages()
            ],422);
        }
        $appointment->update([
            'name' => $request->name,
            'pet_name' => $request->pet_name,
            'selected_day' => $request->selected_day,
            'time_of_day' => $request->time_of_day,
            'frequency' => $request->frequency,
            'start_date' => $request->start_date,
            'notes' => $request->notes
        ]);

        return response()->json([
            'message'=>'Appointment updated successfully',
            'data'=> new AppointmentResource($appointment)
    ],200);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Appointment $appointment)
    {
        $appointment->delete();
        return response()->json([
            'message'=>'Appointment deleted successfully',
            ],200);
    }
}
