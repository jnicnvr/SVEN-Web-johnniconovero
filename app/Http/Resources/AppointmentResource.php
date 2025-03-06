<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class AppointmentResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'id'=> $this->id,
            'user_id'=> $this->user_id,
            'pet_id'=> $this->pet_id,
            'name'=> $this->name,
            'pet_name'=> $this->pet_name,
            'selected_date'=> $this->selected_date,
            'time_of_day'=> $this->time_of_day,
            'select_time'=> $this->select_time,
            'status'=> $this->status,
            'notes'=> $this->notes,
            'created_at'=> $this->created_at,
            'updated_at'=> $this->updated_at
        ];
    }
}
