"use client";
import Image from 'next/image'

export default function Home() {
  const blueShades = [
    { name: 'Sky Blue', hex: '#87CEEB', rgb: 'rgb(135, 206, 235)' },
    { name: 'Azure', hex: '#007FFF', rgb: 'rgb(0, 127, 255)' },
    { name: 'Royal Blue', hex: '#4169E1', rgb: 'rgb(65, 105, 225)' },
    { name: 'Navy Blue', hex: '#000080', rgb: 'rgb(0, 0, 128)' },
    { name: 'Cornflower Blue', hex: '#6495ED', rgb: 'rgb(100, 149, 237)' },
    { name: 'Steel Blue', hex: '#4682B4', rgb: 'rgb(70, 130, 180)' },
    { name: 'Powder Blue', hex: '#B0E0E6', rgb: 'rgb(176, 224, 230)' },
    { name: 'Baby Blue', hex: '#89CFF0', rgb: 'rgb(137, 207, 240)' }
  ];

  return (
    <main className="min-h-screen bg-[#F0F8FF]"> {/* Alice Blue background */}
      {/* Floating header that stays visible */}
      <header className="sticky top-0 bg-white/80 backdrop-blur-sm shadow-md px-8 py-4 z-50">
        <h1 className="text-4xl font-bold text-center bg-gradient-to-r from-blue-600 to-blue-400 text-transparent bg-clip-text
                       transform transition-all duration-300 hover:scale-105">
          Sophie&#39;s Website
        </h1>
      </header>

      {/* Main content with padding for header */}
      <div className="flex flex-col items-center justify-center gap-12 p-8 pt-16">
        {/* Custom graphic/logo */}
        <div className="relative w-64 h-64">
          <Image
            src="/logo.svg"
            alt="Website Logo"
            fill
            className="object-contain transform transition-all duration-300 hover:rotate-12"
            priority
          />
        </div>

        {/* Interactive button */}
        <button 
          className="px-6 py-3 text-lg font-semibold text-white bg-blue-600 rounded-lg
                     transform transition-all duration-200
                     hover:bg-blue-700
                     active:scale-95 active:shadow-inner
                     focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50
                     shadow-lg hover:shadow-xl"
          onClick={() => alert('Button clicked!')}
        >
          Click Me
        </button>

        {/* Blue shades section */}
        <section className="w-full max-w-2xl mt-12">
          <h2 className="text-2xl font-semibold text-blue-800 mb-6 text-center">Shades of Blue</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {blueShades.map((shade) => (
              <div 
                key={shade.hex}
                className="group p-4 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 bg-white"
              >
                <div 
                  className="w-full h-24 rounded-md mb-2"
                  style={{ backgroundColor: shade.hex }}
                />
                <h3 className="font-medium text-blue-800">{shade.name}</h3>
                <p className="text-sm text-blue-600">HEX: {shade.hex}</p>
                <p className="text-sm text-blue-600">RGB: {shade.rgb}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  )
}
