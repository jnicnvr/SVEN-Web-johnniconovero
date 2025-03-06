"use client";

import { useState, ChangeEvent } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useAppointment } from "@/hooks/use-appointment";

export default function BookingForm() {
    const { createAppointment, loading, error } = useAppointment();
    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const times = ["Morning", "Afternoon", "Evening"];
    interface BigFormData {
        name: string;
        pet_name: string;
        selected_day: string;
        time_of_day: string;
        notes: string;
        frequency: string;
        start_date: string;
    }

    const [formData, setFormData] = useState<BigFormData>({
        name: "",
        pet_name: "",
        selected_day: "",
        time_of_day: "",
        notes: "",
        frequency: "recurring",
        start_date: "",
    });
    const [errors, setErrors] = useState<Record<string, string>>({});
    const handleChange = (
        e: ChangeEvent<
            HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
        >
    ) => {
        const { id, value } = e.target;
        setFormData((prev) => ({ ...prev, [id]: value }));
    };

    const handleDaySelection = (day: string) => {
        setFormData((prev) => ({ ...prev, selected_day: day }));
    };

    const handleTimeOfDaySelection = (value: string) => {
        setFormData((prev) => ({ ...prev, time_of_day: value }));
    };

    const validateForm = () => {
        const newErrors: Record<string, string> = {};

        if (!formData.name.trim()) newErrors.name = "Name is required";
        if (!formData.pet_name.trim()) newErrors.pet_name = "Pet name is required";
        if (!formData.frequency) newErrors.frequency = "Please select a frequency";
        if (!formData.start_date) newErrors.start_date = "Please select a start date";
        if (!formData.selected_day) newErrors.selected_date = "Please select a day";
        if (!formData.time_of_day) newErrors.time_of_day = "Please select a time of day";
        const today = new Date();
        const selectedDayIndex = days.indexOf(formData.selected_day);
        const todayIndex = today.getDay(); // Get today's day index (0=Sun, 6=Sat)

        if (selectedDayIndex !== -1) {
            // If selected day is earlier in the week than today, it's invalid
            if (selectedDayIndex < todayIndex) {
                newErrors.selected_day = "You cannot select a past day.";
            }
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async () => {
      console.log("Form not submitted:", formData);

        if (validateForm()) {
            console.log("Form submitted:", formData);
            const result = await createAppointment(formData);
            if (result) {
                alert("Appointment booked successfully!");
                setFormData({
                    name: "",
                    pet_name: "",
                    selected_day: "",
                    time_of_day: "",
                    notes: "",
                    frequency: "",
                    start_date: "",
                });

                setErrors({});
            }
        } else {
            console.log("Validation errors:", errors);
        }
    };

    return (
        <div className="space-y-10">
            <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input
                        id="name"
                        placeholder="Your name"
                        value={formData.name}
                        onChange={handleChange}
                    />
                    {errors.name && (
                        <p className="text-red-500 text-xs">{errors.name}</p>
                    )}
                </div>
                <div className="space-y-2">
                    <Label htmlFor="pet_name">Pet name</Label>
                    <Input
                        id="pet_name"
                        placeholder="Your pet's name"
                        value={formData.pet_name}
                        onChange={handleChange}
                    />
                    {errors.pet_name && (
                        <p className="text-red-500 text-xs">
                            {errors.pet_name}
                        </p>
                    )}
                </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                    <Label htmlFor="frequency" className="text-slate-600">
                        Frequency
                    </Label>
                    <Select
                        value={formData.frequency}
                        onValueChange={(value) =>
                            setFormData((prev) => ({
                                ...prev,
                                frequency: value,
                            }))
                        }
                    >
                        <SelectTrigger
                            id="frequency"
                            className="bg-white border-gray-200"
                        >
                            <SelectValue placeholder="Select frequency" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="recurring">Recurring</SelectItem>
                            <SelectItem value="one-time">One time</SelectItem>
                        </SelectContent>
                    </Select>
                    
                </div>

                <div className="space-y-2">
                    <Label htmlFor="start_date" className="text-slate-600">
                        Start date
                    </Label>
                    <Input
                        id="start_date"
                        type="text"
                        placeholder="MM/DD/YYYY"
                        className="bg-white border-gray-200"
                        value={formData.start_date}
                        onChange={handleChange}
                    />
                     {errors.start_date && (
                    <p className="text-red-500 text-xs">
                        {errors.start_date}
                    </p>
                )}
                </div>
               
            </div>

            <div className="space-y-2">
                <Label>Days: Select all that work</Label>
                <div className="grid grid-cols-7 gap-2">
                    {days.map((day) => (
                        <button
                            key={day}
                            type="button"
                            className={`p-2 rounded-md text-center text-sm ${
                                formData.selected_day === day
                                    ? "bg-gray-800 text-white"
                                    : "bg-white hover:bg-gray-100"
                            }`}
                            onClick={() => handleDaySelection(day)}
                        >
                            {day}
                        </button>
                    ))}
                </div>
                {errors.selected_day && (
                    <p className="text-red-500 text-xs">
                        {errors.selected_day}
                    </p>
                )}
            </div>

            <div className="space-y-2.5">
                <Label className="text-slate-600">
                    Time: Select all that work
                </Label>
                <div className="grid grid-cols-3 gap-3">
                    {times.map((time) => (
                        <button
                            key={time}
                            className={`p-2.5 rounded-md text-center border border-gray-200 ${
                                formData.time_of_day === time
                                    ? "bg-slate-700 text-white border-transparent"
                                    : "bg-white hover:bg-gray-50"
                            }`}
                            onClick={() => handleTimeOfDaySelection(time)}
                            type="button"
                        >
                            {time}
                        </button>
                    ))}
                </div>
                {errors.time_of_day && (
                    <p className="text-red-500 text-xs">
                        {errors.time_of_day}
                    </p>
                )}
            </div>

            <div className="space-y-2.5">
                <Label htmlFor="notes" className="text-slate-600">
                    Notes for your visit
                </Label>
                <Textarea
                    id="notes"
                    placeholder="Route preferences, treats location, special games, etc."
                    value={formData.notes}
                    onChange={handleChange}
                    className="bg-white border-gray-200 min-h-[100px] resize-none"
                />
            </div>
            <Button
                onClick={handleSubmit}
                className="w-full bg-slate-700 hover:bg-slate-800 rounded-full h-12"
            >
                {loading ? "Scheduling..." : "Schedule Service"}
            </Button>
            {error && <p className="text-red-500">{error}</p>}
        </div>
    );
}
