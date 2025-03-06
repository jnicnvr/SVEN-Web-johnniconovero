import { Check } from "lucide-react"

export default function ServicesList() {
  const services = [
    "A photo update for you daily",
    "Notification of their arrival",
    "Treats for your pet, with your permission",
  ]

  return (
    <div className="space-y-6">
      <div  className="flex items-center gap-2 cursor-pointer"onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
        <div className="h-8 w-8 rounded-full bg-white flex items-center justify-center">
          <span className="text-gray-800 font-semibold">P</span>
        </div>
        <span className="font-semibold text-gray-800">PAWTASTIC</span>
      </div>

      <h3 className="text-xl font-semibold text-gray-800">All services include:</h3>

      <ul className="space-y-3">
        {services.map((service, index) => (
          <li key={index} className="flex items-start gap-2">
            <Check className="h-5 w-5 text-gray-800 mt-0.5 flex-shrink-0" />
            <span className="text-gray-700">{service}</span>
          </li>
        ))}
      </ul>

      <div className="mt-6">
        <img
          src="https://www.shutterstock.com/image-photo/cat-wear-blank-white-badge-600nw-512236525.jpg"
          alt="Puppy"
          width={300}
          height={200}
          className="rounded-lg object-cover w-full"
        />
      </div>
    </div>
  )
}

