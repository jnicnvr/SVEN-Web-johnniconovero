import BookingForm from "@/components/booking-form";
import ServicesList from "@/components/services-list";
import { forwardRef } from "react";

const BookingSection = forwardRef<HTMLElement>((_, ref) => {
    return (
        <>
            <section ref={ref} className="py-16">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-2 gap-0">
                        <div className="bg-slate-300 p-8 rounded-l-lg">
                            <ServicesList />
                        </div>
                        <div className="bg-gray-100 p-8 rounded-r-lg">
                            <h2 className="text-2xl font-bold text-slate-800 mb-6">
                                We'll take your dog for a walk. Just tell us
                                when!
                            </h2>
                            <BookingForm />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
});

export default BookingSection;
