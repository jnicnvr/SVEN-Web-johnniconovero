import { forwardRef } from "react";

interface ExpertCareSectionProps {
    onNavigate?: (section: "booking") => void;
}
const ExpertCareSection = forwardRef<HTMLElement, ExpertCareSectionProps>(({ onNavigate }, ref) => {
    return (
        <>
            <section ref={ref} className="py-16 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-2 gap-8 items-center">
                        <div>
                            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
                                Expert care for your furry, feathery, or scaly
                                friend
                            </h2>
                            <p className="text-gray-600 mb-6">
                                We treat your critters as our own pets at home
                                while you're away. With a team of experienced
                                animal caregivers, we're committed to your pet's
                                wellbeing. Our goal is to ensure they stay safe,
                                comfortable, and as happy as they would be with
                                you around.
                            </p>
                            <button onClick={() => onNavigate("booking")} className="bg-gray-800 text-white px-6 py-3 rounded-full font-medium hover:bg-gray-700 transition">
                                Schedule Visit
                            </button>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="aspect-square rounded-lg overflow-hidden">
                                <img
                                    src="https://media.istockphoto.com/id/1298158630/photo/cute-portrait-of-smiling-shiba-inu-dog.jpg?s=612x612&w=0&k=20&c=xAwEvAXvodF50hVRQBypbRY1Ry18D2BeV5a7U97-OIY="
                                    alt="Cat"
                                    width={300}
                                    height={300}
                                    className="object-cover h-full w-full"
                                />
                            </div>
                            <div className="aspect-square rounded-lg overflow-hidden">
                                <img
                                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsgCaKaF282ntnpXhrlS0fEk0y38n-KLkm7g&s"
                                    alt="Dog"
                                    width={300}
                                    height={300}
                                    className="object-cover h-full w-full"
                                />
                            </div>
                            <div className="aspect-square rounded-lg overflow-hidden">
                                <img
                                    src="https://media.istockphoto.com/id/1434305860/photo/front-view-of-cute-baby-rabbit-standing-on-blue-background.jpg?s=612x612&w=0&k=20&c=1Rd_siPtDPowJuw7Q7PTnV1ISrULQSO7E7M4DylYdbw="
                                    alt="Dog"
                                    width={300}
                                    height={300}
                                    className="object-cover h-full w-full"
                                />
                            </div>
                            <div className="aspect-square rounded-lg overflow-hidden">
                                <img
                                    src="https://media.gettyimages.com/id/582715570/photo/green-winged-macaw.jpg?s=612x612&w=gi&k=20&c=rHyAYMnBsCenXzLQsrFvry4EtwnqR084qVVJt6GsMX8="
                                    alt="Dog"
                                    width={300}
                                    height={300}
                                    className="object-cover h-full w-full"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
});

export default ExpertCareSection;
