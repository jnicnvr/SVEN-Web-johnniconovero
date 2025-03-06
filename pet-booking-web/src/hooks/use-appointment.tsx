import { useState } from "react";
import api from "@/lib/api";

interface AppointmentData {
    name: string;
    pet_name: string;
    selected_date: string;
    time_of_day: string;
    select_time: string;
    notes?: string;
}

export function useAppointment() {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const createAppointment = async (appointmentData: AppointmentData) => {
        try {
            setLoading(true);
            setError(null);
            const response = await api.post("/appointments", appointmentData);
            return response.data;
        } catch (err) {
            setError("Failed to create appointment");
            console.error(err);
            return null;
        } finally {
            setLoading(false);
        }
    };

    return { createAppointment, loading, error };
}
